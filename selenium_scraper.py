import os
import sys
import time
import json
import re
import html
from html.parser import HTMLParser
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# Constants
COHORT_SELECTION_URL = "https://ambassador.pw.live/cohort-selection"
PROFILE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "chrome_profile"))

# Hardcoded fallback list in case dynamic discovery fails
FALLBACK_COHORTS = [
    {"name": "IIT-JEE", "id": "679a85e05646ace8d027cb27"},
    {"name": "NEET", "id": "679a85e05646ace8d027cb2c"},
    {"name": "UPSC", "id": "679a85e05646ace8d027cb31"},
    {"name": "Govt. Exams", "id": "679a85e05646ace8d027cb32"},
    {"name": "Engineering & Medical Exams ( College & Job )", "id": "679a1b945646ace8d027ca17"},
    {"name": "College Entrance Exams ( UG & PG )", "id": "679a1b945646ace8d027ca3a"},
    {"name": "Schools, Boards & Olympiads", "id": "679a1b945646ace8d027ca48"},
    {"name": "All Government Job Exams", "id": "679a1b945646ace8d027cabf"},
    {"name": "CA, CS, Banking & Finance Courses", "id": "679a1b945646ace8d027cade"},
    {"name": "NET Exams & Teacher Training", "id": "679a1b945646ace8d027caeb"},
    {"name": "Earners  ( Upskilling )", "id": "69d8bc532e53ec77a9661e1c"},
    {"name": "Spoken English", "id": "6a02f8f57c1b1b7f1dc4a033"},
    {"name": "Gyaan-E (Short-Courses)", "id": "6a27f2ffebb853e090d40c99"},
    {"name": "M.A.D (Music, Art & Dance).", "id": "6a200f76bbc1ffa958ea34e3"},
    {"name": "Online Degree", "id": "679a1b945646ace8d027caf5"},
    {"name": "Study Abroad & Career Abroad", "id": "679a1b945646ace8d027caf7"},
    {"name": "PW IOI (College)", "id": "69d771357e20adf112e033de"},
    {"name": "Semester Prep", "id": "69e8913dc59fda147295f541"},
    {"name": "Skills", "id": "679a1b945646ace8d027caf0"}
]

class CohortParser(HTMLParser):
    """HTML Parser to extract available cohorts (categories) and their IDs from the page source."""
    def __init__(self):
        super().__init__()
        self.cohorts = []
        self.current_cohort = None
        self.in_cohort_item = False
        self.collect_text = False
        self.temp_text = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if "data-cohort-id" in attrs_dict:
            self.current_cohort = {
                "id": attrs_dict["data-cohort-id"],
                "name": ""
            }
            self.in_cohort_item = True
            
        if self.in_cohort_item and tag == "div" and "class" in attrs_dict:
            if "cohort-offering-container" in attrs_dict["class"]:
                self.collect_text = True
                self.temp_text = []

    def handle_data(self, data):
        if self.collect_text:
            self.temp_text.append(data)

    def handle_endtag(self, tag):
        if tag == "div" and self.collect_text:
            self.collect_text = False
            if self.current_cohort:
                self.current_cohort["name"] = "".join(self.temp_text).strip()
                self.cohorts.append(self.current_cohort)
                self.current_cohort = None
                self.in_cohort_item = False

def get_driver(headless=True):
    """Initializes and returns a Selenium Chrome driver with persistent profile."""
    options = webdriver.ChromeOptions()
    if headless:
        options.add_argument("--headless")
        options.add_argument("--window-size=1920,1080")
    else:
        options.add_argument("--window-size=1200,900")
    
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument(f"user-data-dir={PROFILE_DIR}")
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
    
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    return driver

def check_login_status():
    """Checks if the user is already logged in by attempting a headless load of the cohort selection page."""
    print("Checking active login session...")
    driver = get_driver(headless=True)
    try:
        driver.get(COHORT_SELECTION_URL)
        time.sleep(5)
        current_url = driver.current_url.rstrip('/')
        print(f"Current URL: {current_url}")
        
        # If redirected to home page, we are not logged in
        if "cohort-selection" not in current_url and "batch-listing" not in current_url:
            return False
        return True
    except Exception as e:
        print(f"Error checking login status: {e}")
        return False
    finally:
        driver.quit()

def perform_manual_login():
    """Opens a headed Chrome browser and waits for the user to log in."""
    print("\n" + "="*80)
    print("ACTION REQUIRED: No active session found.")
    print("A Chrome browser window will open now.")
    print("Please log in to your PW Ambassador account in that window.")
    print("The script will automatically detect once you are logged in.")
    print("="*80 + "\n")
    
    driver = get_driver(headless=False)
    try:
        driver.get("https://ambassador.pw.live/")
        
        # Poll the browser URL to check if the user has logged in
        logged_in = False
        for i in range(120):  # Wait up to 2 minutes
            time.sleep(2)
            curr_url = driver.current_url
            if any(path in curr_url for path in ["/dashboard", "/cohort-selection", "batch-listing"]):
                print("Login detected! Saving session...")
                logged_in = True
                
                # Navigate to cohort-selection page to ensure it gets cached under this profile
                driver.get(COHORT_SELECTION_URL)
                time.sleep(5)
                break
            
            if i % 5 == 0:
                print(f"Waiting for login... (Current page: {driver.title or curr_url})")
                
        if not logged_in:
            print("Login timeout. Please run the script again and complete login.")
            sys.exit(1)
            
    except Exception as e:
        print(f"An error occurred during manual login: {e}")
        sys.exit(1)
    finally:
        driver.quit()

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
        f.write(f"**Method:** DOM_IFRAME_SCRAPE  \n\n")
        
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
    # 1. Check login session
    logged_in = check_login_status()
    if not logged_in:
        perform_manual_login()
        logged_in = check_login_status()
        if not logged_in:
            print("Failed to authenticate. Exiting.")
            sys.exit(1)
            
    # 2. Start headless browser to crawl cohort selection page
    print("Session is active. Loading cohort selection...")
    driver = get_driver(headless=True)
    cohorts = []
    try:
        driver.get(COHORT_SELECTION_URL)
        print("Waiting for page load...")
        time.sleep(8)
        
        # Save HTML for debug
        html_src = driver.page_source
        with open(os.path.join(os.path.dirname(__file__), "cohort_selection.html"), "w", encoding="utf-8") as f:
            f.write(html_src)
        driver.save_screenshot(os.path.join(os.path.dirname(__file__), "cohort_selection.png"))
        
        # Parse cohorts list from page source
        print("Parsing cohorts list...")
        parser = CohortParser()
        parser.feed(html_src)
        cohorts = parser.cohorts
        
        if not cohorts:
            print("Warning: Dynamic cohort parsing returned 0 cohorts. Using fallback list...")
            cohorts = FALLBACK_COHORTS
        else:
            print(f"Successfully discovered {len(cohorts)} categories dynamically!")
            
    except Exception as e:
        print(f"Error discovering cohorts: {e}. Using fallback list...")
        cohorts = FALLBACK_COHORTS
        
    # 3. Loop through each cohort and scrape its courses
    scraped_data = {
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "categories": {}
    }
    
    print("\nStarting crawls of all categories...")
    print("="*60)
    
    try:
        # Load cohorts list from cohorts_list.json if it exists
        cohorts_file = os.path.join(os.path.dirname(__file__), "cohorts_list.json")
        if os.path.exists(cohorts_file):
            try:
                with open(cohorts_file, "r", encoding="utf-8") as f:
                    loaded_cohorts = json.load(f)
                    if loaded_cohorts:
                        cohorts = loaded_cohorts
                        print(f"Using {len(cohorts)} pre-mapped categories from cohorts_list.json.")
            except Exception as e:
                print(f"Warning: Could not read cohorts_list.json: {e}")

        for idx, ch in enumerate(cohorts):
            ch_name = ch["name"]
            ch_id = ch["id"]
            ch_url = f"https://ambassador.pw.live/sales/batch-listing?cohortId={ch_id}"
            
            print(f"[{idx+1}/{len(cohorts)}] Crawling category: {ch_name} (ID: {ch_id})...")
            
            scraped_data["categories"][ch_name] = []
            
            try:
                # Load page
                driver.get(ch_url)
                time.sleep(5)  # Wait for page structure and iframe container
                
                # Check if there is an iframe with ID "batchIframe"
                iframes = driver.find_elements(By.ID, "batchIframe")
                if not iframes:
                    print(f"   -> No courses iframe found for category {ch_name}. Skipping.")
                    driver.switch_to.default_content()
                    continue
                    
                # Switch to batchIframe
                driver.switch_to.frame("batchIframe")
                time.sleep(3)  # Wait for card web components to load
                
                # Find all batch cards
                cards = driver.find_elements(By.TAG_NAME, "batch-card")
                print(f"   -> Found {len(cards)} courses.")
                
                for card in cards:
                    batch_name = card.get_attribute("batchname") or "Unknown"
                    price = card.get_attribute("price") or "0"
                    total = card.get_attribute("total") or "0"
                    discount = card.get_attribute("discount") or "0"
                    language = card.get_attribute("language") or "N/A"
                    course_type = card.get_attribute("category") or "N/A"
                    batch_type = card.get_attribute("batchtype") or "N/A"
                    desc_pointers_str = card.get_attribute("description-pointers") or ""
                    
                    # Deduce mode and target year from attributes
                    mode = "ONLINE" if "E_BATCH" in batch_type else "OFFLINE"
                    target_year = "N/A"
                    
                    desc = ""
                    if desc_pointers_str:
                        try:
                            pointers = json.loads(desc_pointers_str)
                            if isinstance(pointers, list):
                                desc_items = []
                                for p in pointers:
                                    p_text = ""
                                    if isinstance(p, dict) and "text" in p:
                                        p_text = p["text"]
                                        desc_items.append(p_text)
                                    elif isinstance(p, str):
                                        p_text = p
                                        desc_items.append(p_text)
                                    
                                    # Attempt to extract target year
                                    if p_text and (re.search(r'\d{4}', p_text) or '_' in p_text) and target_year == "N/A":
                                        target_year = p_text
                                        
                                desc = " | ".join(desc_items)
                            else:
                                desc = str(pointers)
                        except:
                            desc = desc_pointers_str
                            
                    batch_name = html.unescape(batch_name)
                    desc = html.unescape(desc)
                    
                    course_info = {
                        "title": batch_name,
                        "mode": mode,
                        "target_year": target_year,
                        "course_type": course_type,
                        "batch_type": batch_type,
                        "language": language,
                        "price": price,
                        "discount": discount,
                        "total": total,
                        "description": desc
                    }
                    scraped_data["categories"][ch_name].append(course_info)
                    
                # Save incremental results to avoid data loss
                save_outcomes(scraped_data)
                
            except Exception as e:
                print(f"   -> Error crawling {ch_name}: {e}")
            finally:
                # Switch back to the main document context
                try:
                    driver.switch_to.default_content()
                except:
                    pass
                    
            print("-"*60)
            
        print("\nAll categories scraped successfully!")
        
        # Generate Google Apps Script code for Google Forms
        try:
            from form_generator import generate_apps_script
            generate_apps_script()
        except Exception as e:
            print(f"Warning: Could not generate Apps Script: {e}")
            
        total_extracted = sum(len(courses) for courses in scraped_data["categories"].values())
        print(f"Total courses extracted: {total_extracted}")
        print("Outcomes saved to outcome.json and outcome.md.")
        
    finally:
        driver.quit()

if __name__ == "__main__":
    main()
