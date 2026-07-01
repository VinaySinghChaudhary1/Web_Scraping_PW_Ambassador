import os
import time
import json
import re
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

COHORT_SELECTION_URL = "https://ambassador.pw.live/cohort-selection"
PROFILE_DIR = "D:\\Download\\PW Ambassador\\Web Scraping\\chrome_profile"

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--window-size=1920,1080")
options.add_argument(f"user-data-dir={PROFILE_DIR}")
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
discovered_cohorts = []

def extract_cohort_id(url):
    match = re.search(r'cohortId=([a-zA-Z0-9]+)', url)
    if match:
        return match.group(1)
    return None

try:
    print("Loading cohort selection page...")
    driver.get(COHORT_SELECTION_URL)
    time.sleep(6)
    
    print("Finding category cards...")
    category_cards_data = []
    items = driver.find_elements(By.XPATH, "//*[@data-cohort-id]")
    for item in items:
        cid = item.get_attribute("data-cohort-id")
        name = item.text.strip().split('\n')[-1]
        if cid and name:
            category_cards_data.append({"name": name, "offering_id": cid})
            
    print(f"Found {len(category_cards_data)} category cards on page.")
    
    for idx, card in enumerate(category_cards_data):
        name = card["name"]
        oid = card["offering_id"]
        print(f"\nProcessing category: {name}...")
        
        # Navigate to cohort selection page
        driver.get(COHORT_SELECTION_URL)
        time.sleep(4)
        
        try:
            element = driver.find_element(By.XPATH, f"//*[@data-cohort-id='{oid}']")
            driver.execute_script("arguments[0].click();", element)
            time.sleep(3)
        except Exception as e:
            print(f"Error clicking card {name}: {e}")
            continue
            
        modal_open = False
        try:
            modal_title = driver.find_elements(By.XPATH, "//*[contains(text(), 'Select your Class') or contains(text(), 'Select your')]")
            if modal_title:
                modal_open = True
        except:
            pass
            
        if modal_open:
            print(f"Category '{name}' opened a sub-category modal.")
            try:
                # Scoped XPath to find individual items inside the modal container
                options_elements = driver.find_elements(By.XPATH, "//div[contains(@class, 'cohort-question-details-items')]//div[contains(@class, 'cohort-offering-container')]")
                option_names = [opt.text.strip() for opt in options_elements if opt.text.strip()]
                print(f"Found modal options: {option_names}")
                
                for opt_name in option_names:
                    print(f"  Clicking sub-category: {opt_name}...")
                    
                    # Re-navigate to cohort-selection and re-open modal to click
                    driver.get(COHORT_SELECTION_URL)
                    time.sleep(4)
                    element = driver.find_element(By.XPATH, f"//*[@data-cohort-id='{oid}']")
                    driver.execute_script("arguments[0].click();", element)
                    time.sleep(3)
                    
                    # Find option in modal and click it
                    opt_el = driver.find_element(By.XPATH, f"//div[contains(@class, 'cohort-question-details-items')]//div[contains(@class, 'cohort-offering-container') and contains(text(), '{opt_name}')]")
                    driver.execute_script("arguments[0].click();", opt_el)
                    time.sleep(6)
                    
                    res_url = driver.current_url
                    res_cid = extract_cohort_id(res_url)
                    full_name = f"{name} - {opt_name}"
                    if res_cid:
                        print(f"  -> Mapped '{full_name}' to Cohort ID: {res_cid}")
                        discovered_cohorts.append({"name": full_name, "id": res_cid})
                    else:
                        print(f"  -> Could not extract Cohort ID from URL: {res_url}")
            except Exception as e:
                print(f"  Error processing modal for {name}: {e}")
        else:
            # Direct navigation
            time.sleep(4)
            res_url = driver.current_url
            res_cid = extract_cohort_id(res_url)
            if res_cid:
                print(f"-> Mapped '{name}' directly to Cohort ID: {res_cid}")
                discovered_cohorts.append({"name": name, "id": res_cid})
            else:
                print(f"-> Could not extract Cohort ID from URL: {res_url}")

    print("\n" + "="*50)
    print(f"DISCOVERY COMPLETE: Mapped {len(discovered_cohorts)} cohorts.")
    print("="*50)
    for c in discovered_cohorts:
        print(f" - {c['name']} -> {c['id']}")
        
    mapping_file = "D:\\Download\\PW Ambassador\\Web Scraping\\cohorts_list.json"
    with open(mapping_file, "w", encoding="utf-8") as f:
        json.dump(discovered_cohorts, f, indent=2, ensure_ascii=False)
    print(f"Saved cohort mappings to {mapping_file}")

except Exception as e:
    print("Global Error:", e)
finally:
    driver.quit()
