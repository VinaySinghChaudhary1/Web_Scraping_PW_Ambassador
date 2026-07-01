import os
import sys
import json
import time
import requests

# Constants
ORG_ID = "65dc5778a2696c7fd76b702f"

# Default cohort list in case cohorts_list.json doesn't exist
DEFAULT_COHORTS = [
    {"name": "IIT-JEE - Class 11", "id": "634fb54c0c56610011d10202"},
    {"name": "NEET - Class 11", "id": "634fd1c40c274c00183c7579"},
    {"name": "UPSC", "id": "635b83410a47c70011ca5ffb"}
]

def get_token():
    """Gets the token from token.txt file or user input."""
    token_file = os.path.join(os.path.dirname(__file__), "token.txt")
    if os.path.exists(token_file):
        with open(token_file, "r") as f:
            token = f.read().strip()
            if token:
                print(f"Reading token from {token_file}...")
                return token
                
    print("\n" + "="*80)
    print("API SCRAPER: Authorization Token Required")
    print("How to get your token:")
    print("1. Log in to https://ambassador.pw.live/ in your browser.")
    print("2. Open Developer Tools (F12 or Right Click -> Inspect).")
    print("3. Go to the Console tab and run: localStorage.getItem('TOKEN')")
    print("4. Copy the long token string (without quotes).")
    print("="*80 + "\n")
    
    token = input("Please paste your TOKEN here: ").strip()
    if not token:
        print("Error: Token cannot be empty.")
        sys.exit(1)
        
    try:
        with open(token_file, "w") as f:
            f.write(token)
        print(f"Token saved to {token_file} for future runs.")
    except Exception as e:
        print(f"Warning: Could not save token to file: {e}")
        
    return token

def get_cohorts():
    """Reads cohorts list from cohorts_list.json or falls back to default list."""
    cohorts_file = os.path.join(os.path.dirname(__file__), "cohorts_list.json")
    if os.path.exists(cohorts_file):
        try:
            with open(cohorts_file, "r", encoding="utf-8") as f:
                cohorts = json.load(f)
                if cohorts:
                    print(f"Loaded {len(cohorts)} categories dynamically from cohorts_list.json.")
                    return cohorts
        except Exception as e:
            print(f"Warning: Could not read cohorts_list.json: {e}")
            
    print(f"Using default list of {len(DEFAULT_COHORTS)} categories.")
    return DEFAULT_COHORTS

def save_outcomes(scraped_data):
    """Saves the scraped data to outcome.json and outcome.md (UTF-8)."""
    # 1. Save to JSON
    outcome_json_path = os.path.join(os.path.dirname(__file__), "outcome.json")
    with open(outcome_json_path, "w", encoding="utf-8") as f:
        json.dump(scraped_data, f, indent=2, ensure_ascii=False)
        
    # 2. Save to Markdown
    outcome_md_path = os.path.join(os.path.dirname(__file__), "outcome.md")
    with open(outcome_md_path, "w", encoding="utf-8") as f:
        f.write("# PW Ambassador Scraped Course Batches (All Categories)\n\n")
        f.write(f"**Date:** {scraped_data['timestamp']}  \n")
        f.write(f"**Method:** DIRECT_API  \n\n")
        
        f.write("## Category Scrape Summary\n")
        total_courses = 0
        for cat, courses in scraped_data["categories"].items():
            f.write(f"- **{cat}**: {len(courses)} courses\n")
            total_courses += len(courses)
        f.write(f"\n**Total Courses Scraped:** {total_courses}\n\n")
        f.write("-"*50 + "\n\n")
        
        # Write tables for each category
        for cat, courses in scraped_data["categories"].items():
            f.write(f"## {cat} ({len(courses)} courses)\n\n")
            if not courses:
                f.write("*No courses available in this category.*\n\n")
                continue
                
            f.write("| Course Title | Mode | Target Year | Course Type | Batch Type | Language | Original Price | Discount | Offer Price | Description / Info |\n")
            f.write("| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n")
            for course in courses:
                desc_clean = course["description"].replace('\n', ' ').strip()
                f.write(f"| {course['title']} | {course['mode']} | {course['target_year']} | {course['course_type']} | {course['batch_type']} | {course['language']} | ₹{course['price']} | {course['discount']}% | ₹{course['total']} | {desc_clean} |\n")
            f.write("\n")

def main():
    token = get_token()
    cohorts = get_cohorts()
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "client-id": ORG_ID,
        "client-type": "WEB",
        "client-version": "301",
        "version": "0.0.1",
        "Authorization": f"Bearer {token}"
    }
    
    scraped_data = {
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "categories": {}
    }
    
    print("\nStarting crawl of all categories using Direct API...")
    print("="*60)
    
    auth_failed = False
    
    for idx, ch in enumerate(cohorts):
        ch_name = ch["name"]
        ch_id = ch["id"]
        
        # The correct micro-frontend API endpoint
        api_url = f"https://api.penpencil.co/v1/student-acquisition/ambassador-client/assisted-sales/cohort/{ch_id}/widgets/all-courses"
        params = {
            "page": "1",
            "isNewCheckoutEnabled": "false",
            "accessType": "paid",
            "onlyBatches": "true"
        }
        
        print(f"[{idx+1}/{len(cohorts)}] Fetching: {ch_name}...")
        scraped_data["categories"][ch_name] = []
        
        try:
            response = requests.get(api_url, headers=headers, params=params)
            
            if response.status_code == 200:
                api_data = response.json()
                
                # Extract widgets
                widgets = api_data.get("data", [])
                if not isinstance(widgets, list):
                    widgets = []
                    
                courses_extracted = 0
                for widget in widgets:
                    if not isinstance(widget, dict):
                        continue
                        
                    # We are only interested in BATCH widgets
                    if widget.get("type") == "BATCH":
                        info = widget.get("typeInfo", {})
                        if not info:
                            continue
                            
                        title = info.get("name") or "Unknown Title"
                        language = info.get("language")
                        card = info.get("card", {})
                        
                        if not language and card:
                            language = card.get("language")
                        if not language:
                            language = "N/A"
                            
                        # New fields requested by user
                        mode = info.get("mode") or "ONLINE"
                        
                        target_year = info.get("config", {}).get("card", {}).get("examTarget")
                        if not target_year:
                            # Fallback: check examYear
                            target_year = info.get("examYear")
                        if not target_year:
                            target_year = "N/A"
                            
                        course_type = card.get("target") or info.get("courseType") or "N/A"
                        batch_type = info.get("batchGroupType") or info.get("type") or "N/A"
                        
                        # Extract fees
                        fees = card.get("fees", {}) if card else {}
                        if not fees:
                            fees = {}
                        price = fees.get("price") or info.get("amount") or "0"
                        total = fees.get("total") or price
                        discount = fees.get("discount") or 0
                        
                        # Extract description pointers
                        desc_pointers = card.get("descriptionPointers", []) if card else []
                        desc = ""
                        if isinstance(desc_pointers, list):
                            desc_items = []
                            for p in desc_pointers:
                                if isinstance(p, dict) and "text" in p:
                                    desc_items.append(p["text"])
                                elif isinstance(p, str):
                                    desc_items.append(p)
                            desc = " | ".join(desc_items)
                            
                        course_info = {
                            "title": title,
                            "mode": mode,
                            "target_year": target_year,
                            "course_type": course_type,
                            "batch_type": batch_type,
                            "language": language,
                            "price": str(price),
                            "discount": str(discount),
                            "total": str(total),
                            "description": desc
                        }
                        scraped_data["categories"][ch_name].append(course_info)
                        courses_extracted += 1
                        
                print(f"   -> Found {courses_extracted} courses.")
                
            elif response.status_code == 401:
                print("   -> Authentication failed! Token is invalid or expired.")
                auth_failed = True
                break
            else:
                print(f"   -> Failed (Status code: {response.status_code})")
        except Exception as e:
            print(f"   -> Error: {e}")
            
        time.sleep(0.05)  # Minimal delay to prevent rate limit
        
    if auth_failed:
        print("\nCrawl aborted due to authentication error. Please refresh your token.")
        token_file = os.path.join(os.path.dirname(__file__), "token.txt")
        if os.path.exists(token_file):
            os.remove(token_file)
    else:
        # Save outcomes
        save_outcomes(scraped_data)
        
        # Generate Google Apps Script code for Google Forms
        try:
            from form_generator import generate_apps_script
            generate_apps_script()
        except Exception as e:
            print(f"Warning: Could not generate Apps Script: {e}")
            
        total_extracted = sum(len(courses) for courses in scraped_data["categories"].values())
        print("\n" + "="*60)
        print("Scrape complete!")
        print(f"Total courses extracted: {total_extracted}")
        print("Outcomes saved to outcome.json and outcome.md.")
        
if __name__ == "__main__":
    main()
