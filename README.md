# PW Ambassador Course Scraper & Dynamic Google Form Generator

A robust and highly optimized web scraping and automated enrollment form-generation solution designed to extract all course categories, titles, mode details, target years, pricing, discount percentages, and descriptions from the **PW Ambassador** portal, and compile them into an **authenticated, branching Google Form**.

It dynamically handles complex SPA redirection logic, class-selection modals, iframe switching, extracts data from micro-frontend (MFE) widgets, and generates custom Google Apps Script code to build student intake forms on Google Drive.

---

## 🚀 Key Features

* **Dynamic Cohort & Sub-Category Discovery:** Selenium-based crawler that interacts with category cards and modal dialogs to map all 52 categories and sub-classes to their actual backend cohort IDs.
* **Ultra-Fast Direct API Scraping:** Uses your authorization token to fetch hundreds of courses from the internal MFE widgets API in under 5 seconds.
* **Dynamic Google Form Automation:** A Python generator (`form_generator.py`) parses the scraped courses and automatically compiles a Google Apps Script file (`google_apps_script.js`). Running this script instantly builds a professional, branching Google Form on your Google Drive.
* **Branching Form Logic:** 
  - Captures student demographics (Name, Mobile Validation, WhatsApp, Current Academic Status, Location).
  - Routes the student to their chosen Target Category.
  - Dynamically branches into Mode (Online/Offline) and Language (Hinglish/English/Hindi) configurations based on actual scraped course availability.
  - Presents a checkbox list of the live scraped courses for the selected configuration.
  - Automatically submits on completion.
* **Persistent Authentication:** Leverages a local Chrome user profile so you only need to log in once.
* **Formatted Outputs:** Generates clean, searchable JSON (`outcome.json`) and Markdown summary tables (`outcome.md`) of the scraped courses.

---

## 📁 Repository Structure

```
├── discover_cohorts.py     # Selenium script to map categories and modal options
├── api_scraper.py          # Requests-based scraper utilizing API endpoints (Recommended)
├── selenium_scraper.py     # Fallback Selenium-based scraper targeting DOM elements
├── form_generator.py       # Compiles scraped courses into Google Apps Script code
├── google_apps_script.js   # Automated Javascript code to create the branching Google Form
├── cohorts_list.json       # JSON mapping of 52 categories/sub-classes to cohort IDs
├── outcome.json            # Scraped course data output in structured JSON
├── outcome.md              # Scraped course data output in formatted Markdown tables
└── .gitignore              # Ignores sensitive tokens and browser profiles
```

---

## 🔑 How the Authentication Token is Managed

The API scraper (`api_scraper.py`) runs entirely in the command line and **does not open a browser window** to ask you to log in. Instead, it uses an authorization token:

1. **First-time Run:** If the script doesn't find a `token.txt` file in your folder, it stops and prompts you directly in the terminal:
   ```
   Please paste your TOKEN here:
   ```
2. **Auto-Saving:** When you paste the token and hit Enter, **the script automatically creates the `token.txt` file in the folder and saves your token inside it**. You do not need to create or edit this file manually.
3. **Future Runs:** On subsequent runs, the script detects `token.txt` automatically, reads the saved token, and scrapes the data instantly without prompting you.
4. **Token Expiry:** If the API returns a `401 Unauthorized` (meaning your token has expired), the script will automatically delete `token.txt` and ask you for a fresh token on the next run.

---

## 🛠️ Installation & Setup

### 1. Prerequisites
Make sure you have **Python 3.8+** and **Google Chrome** installed on your system.

### 2. Install Dependencies
Install the required Python libraries:

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

### Step 1: Run the Scraper (Recommended & Ultra-Fast)
This fetches all course details and automatically compiles the Google Form generator:

```bash
python api_scraper.py
```
* On your first run, copy the token from your browser console and **paste it directly into the terminal prompt**. The script will automatically create `token.txt` and save it.
* It will crawl the 52 categories, save outcomes to `outcome.json` / `outcome.md`, and **automatically run `form_generator.py` to write `google_apps_script.js`**.

---

### Step 2: Deploy your Branching Google Form
1. Copy the entire contents of the generated [google_apps_script.js](file:///D:/Download/PW%20Ambassador/google_apps_script.js) file.
2. Go to [Google Apps Script (script.google.com)](https://script.google.com/).
3. Click **New Project**.
4. Delete the default boilerplate code, paste the copied code, and click the **Save** icon.
5. Click the **Run** button at the top to execute `createPWAmbassadorFormV4`.
6. Grant permissions when prompted by Google.
7. Open the **Execution Log** at the bottom of the editor. It will print:
   - **Edit URL:** Use this to customize settings, view responses, or link a Google Sheet.
   - **Published URL:** Share this link with students or post it for marketing promotions!

---

### Step 3: Set up Lead Email Notifications (Spreadsheet Side)
To receive email alerts instantly whenever a student submits your Google Form:
1. Open the created Google Form in your browser.
2. Go to the **Responses** tab and click the green **Link to Sheets** icon to create or open the response Google Sheet.
3. In the Google Sheet, click **Extensions** > **Apps Script** in the top menu.
4. Copy the `emailMeOnNewLead` function from the bottom of your generated [google_apps_script.js](file:///D:/Download/PW%20Ambassador/google_apps_script.js) file.
5. Paste it into the Google Sheet Apps Script editor and replace `'your-email@gmail.com'` with your actual email address.
6. Click the **Save** icon.
7. In the left sidebar of the script editor, click the clock icon (**Triggers**).
8. Click the **+ Add Trigger** button in the bottom right corner and set:
   - **Choose which function to run:** `emailMeOnNewLead`
   - **Choose which deployment should run:** `Head`
   - **Select event source:** `From spreadsheet`
   - **Select event type:** `On form submit`
9. Click **Save** and click through to authorize permissions.
10. **Done!** You will now receive instant, automated email notifications (with student details, mobile, category, and selected batches) the moment a response is submitted.

---

## 📊 Sample Output Format (Scraped Data)

The generated tables in `outcome.md` list all the courses with their respective modes, target years, types, and discount prices:

| Course Title | Mode | Target Year | Course Type | Batch Type | Language | Original Price | Discount | Offer Price | Description / Info |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **UPSC PRARAMBH 2029** | ONLINE | UPSC_2029 | Foundation | BATCH | Hinglish | ₹48999 | 33% | ₹32999 | UPSC_2029 \| Started on 22nd Jun’26 |
| **Sankalp 2.0 Hinglish 2028** | ONLINE | UPSC 2028 | Foundation | BATCH | Hinglish | ₹21999 | 36% | ₹13999 | UPSC 2028 \| Started on 29th Jun’26 |
| **Prahar 3.0 Hinglish 2027** | ONLINE | UPSC 2027 | Foundation | BATCH | Hinglish | ₹18999 | 37% | ₹11999 | UPSC 2027 \| Started on 18th Jun’26 |

---

## ✍️ Author & Developer

This project was designed, engineered, and developed by **Vinay Singh Chaudhary**.

Built with a vision to automate student intake operations, map target cohorts dynamically, and streamline ambassador promotions, this scraper and dynamic form-generation system serves as a premium, end-to-end automation toolkit.

