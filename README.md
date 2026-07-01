# PW Ambassador Course Scraper

A robust and highly optimized web scraping solution designed to extract all course categories, titles, language details, pricing, discount percentages, and descriptions from the **PW Ambassador** portal.

It dynamically handles complex SPA redirection logic, class-selection modals (e.g., Class 11, Class 12, Dropper), iframe switching, and extracts data from micro-frontend (MFE) widgets.

---

## 🚀 Key Features

* **Dynamic Cohort & Sub-Category Discovery:** Selenium-based crawler that interacts with category cards and modal dialogs to map all 52 categories and sub-classes to their actual backend cohort IDs.
* **Ultra-Fast Direct API Scraping:** Uses your authorization token to fetch hundreds of courses from the internal MFE widgets API in under 5 seconds.
* **Persistent Authentication:** Leverages a local Chrome user profile so you only need to log in once.
* **Double Scraper Architecture:**
  1. **`api_scraper.py` (API Mode):** Recommended. Fetches structured data directly from backend APIs.
  2. **`selenium_scraper.py` (DOM Mode):** Fallback. Walks through the DOM inside the batch iframe using Selenium.
* **Formatted Outputs:** Generates clean, searchable JSON (`outcome.json`) and Markdown summary tables (`outcome.md`) of the scraped courses.

---

## 📁 Repository Structure

```
├── discover_cohorts.py     # Selenium script to map categories and modal options
├── api_scraper.py          # Requests-based scraper utilizing API endpoints (Recommended)
├── selenium_scraper.py     # Fallback Selenium-based scraper targeting DOM elements
├── cohorts_list.json       # JSON mapping of 52 categories/sub-classes to cohort IDs
├── outcome.json            # Scraped course data output in structured JSON
├── outcome.md              # Scraped course data output in formatted Markdown tables
└── .gitignore              # Ignores sensitive tokens and browser profiles
```

---

## 🛠️ Installation & Setup

### 1. Prerequisites
Make sure you have **Python 3.8+** and **Google Chrome** installed on your system.

### 2. Install Dependencies
Clone the repository and install the required Python libraries:

```bash
pip install requests selenium webdriver-manager
```

---

## 📖 Usage Guide

### Prerequisite: Obtain your Authorization Token
For direct API scraping (`api_scraper.py`), you need to obtain your authorization token from your active session:
1. Open your browser and log in to [PW Ambassador](https://ambassador.pw.live/).
2. Open **Developer Tools** (Press `F12` or right-click and choose **Inspect**).
3. Select the **Console** tab, type the following command, and press **Enter**:
   ```javascript
   localStorage.getItem('TOKEN')
   ```
4. Copy the long token string returned (without the wrapping quotes).

---

### Method 1: Run the API Scraper (Recommended & Ultra-Fast)
This is the fastest method to fetch all course details using the pre-mapped cohorts.

1. Run the script:
   ```bash
   python api_scraper.py
   ```
2. On your first run, paste your copied authorization token when prompted.
3. The script will save it to `token.txt` (which is in `.gitignore`) and use it automatically on subsequent runs.
4. It will output `outcome.json` and `outcome.md` with all course details.

---

### Method 2: Discover and Re-Map Cohorts (Optional)
If PW adds new categories, exams, or classes, run this script to update your `cohorts_list.json` automatically:

1. Run the script:
   ```bash
   python discover_cohorts.py
   ```
2. The script runs Chrome headlessly, logs in via your saved profile, clicks all main cards, clicks through class modals (e.g., Class 11, Class 12, Dropper), grabs the redirected cohort IDs from URLs, and saves the new mappings to `cohorts_list.json`.

---

### Method 3: Run the Selenium DOM Scraper (Fallback)
If the API endpoints change, you can scrape course details directly from the page layout using browser automation:

1. Run the script:
   ```bash
   python selenium_scraper.py
   ```
2. **First Run (Authentication):** If no active session is found, a visible Chrome window will open. Log in manually. Once logged in, the script will save your session to `chrome_profile/` and begin scraping.
3. **Subsequent Runs:** The browser will run completely in the background (**headless mode**) using your saved profile.
4. The script will navigate through all categories, switch to the `batchIframe`, extract information from the `<batch-card>` web components, and output outcomes.

---

## 📊 Sample Output Format

When the scraping completes, you will see a detailed markdown table in `outcome.md`:

| Course Title | Language | Original Price | Discount | Offer Price | Description / Info |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UPSC PRARAMBH 2029** | HINGLISH | ₹48999 | 33% | ₹32999 | UPSC_2029 \| Started on 22nd Jun’26 |
| **Sankalp 2.0 Hinglish 2028** | HINGLISH | ₹21999 | 36% | ₹13999 | UPSC 2028 \| Started on 29th Jun’26 |
| **Prahar 3.0 Hinglish 2027** | HINGLISH | ₹18999 | 37% | ₹11999 | UPSC 2027 \| Started on 18th Jun’26 |
