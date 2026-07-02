import os
import json
import re

def escape_js_string(s):
    """Escapes quotes and backslashes for safe embedding in a JS string literal."""
    if not s:
        return ""
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ').strip()

def generate_apps_script():
    """Reads outcome.json and generates google_apps_script.js."""
    outcome_file = os.path.join(os.path.dirname(__file__), "outcome.json")
    script_file = os.path.join(os.path.dirname(__file__), "google_apps_script.js")
    
    if not os.path.exists(outcome_file):
        print(f"Error: {outcome_file} not found. Cannot generate Apps Script.")
        return
        
    try:
        with open(outcome_file, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error reading outcome.json: {e}")
        return

    categories_dict = data.get("categories", {})
    
    # Filter out categories that have no courses
    active_categories = {}
    for cat_name, courses in categories_dict.items():
        if courses:
            active_categories[cat_name] = courses
            
    print(f"Form Generator: Found {len(active_categories)} active categories with courses.")
    
    # Start writing Apps Script code
    js_code = []
    js_code.append("""/**
 * Dynamic Google Form Generator for PW Ambassador Program
 * Generated automatically from live scraped course data.
 * 
 * Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project.
 * 3. Delete any default code and paste this entire script.
 * 4. Click the 'Run' button.
 * 5. Grant permissions when prompted.
 * 6. Check the Execution Log for your form's Edit URL!
 */

function createPWAmbassadorFormV4() {
  // 1. Initialize Form with Brand Details & Disclaimer
  var form = FormApp.create('Official PW Student Registration & Batch Choice Portal');
  
  // Link to a newly created Google Sheet response spreadsheet automatically
  var ss = SpreadsheetApp.create('Official PW Student Registration Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  
  form.setTitle('Official PW Student Registration & Batch Choice Portal');
  
  // Form Configuration Settings
  form.setLimitOneResponsePerUser(false); // Allow multiple submissions
  form.setAllowResponseEdits(true);        // Allow editing response after submitting
  form.setCollectEmail(true);            // Collect student email addresses

  form.setDescription('📋 Official Student Intake & Course Mapping Form\\n' +
                      'Physics Wallah Campus Ambassador Program\\n\\n' +
                      'Welcome! This authenticated portal captures your learning preferences and transfers them securely to our counseling division.\\n\\n' +
                      '🔒 Verified Official Program Disclaimer:\\n' +
                      'This is a verified academic intake page authorized under the official PW Campus Ambassador framework. ' +
                      'Your coordinates are kept secure and are sent directly to official PW counselors. ' +
                      'No unofficial application fees are processed on this portal.');

  // 2. Setup Student Demographic Section
  form.addTextItem().setTitle('Student Full Name').setRequired(true);
  
  var phoneItem = form.addTextItem().setTitle('Mobile Number (For Callback Verification)').setRequired(true);
  var phoneValidation = FormApp.createTextValidation()
    .setHelpText('Please enter a valid 10-digit mobile number.')
    .requireTextMatchesPattern('^[0-9]{10}$')
    .build();
  phoneItem.setValidation(phoneValidation);
  
  form.addTextItem().setTitle('WhatsApp Number (If different from calling number)');
  
  form.addMultipleChoiceItem()
    .setTitle('Student Current Academic Status')
    .setChoiceValues([
      'Class 8th / 9th / 10th (Foundation Level)',
      'Class 11th / 12th (Regular Schooling)',
      'Dropper / Preparing Full-Time',
      'College Student / Graduate'
    ])
    .setRequired(true);
    
  form.addTextItem().setTitle('City & State').setRequired(true);

  // 2.5 Optional Intake Path Selector with Promotion Description
  var pathQuestion = form.addMultipleChoiceItem()
    .setTitle('Would you like to explore course batches and unlock exclusive ambassador discounts now?')
    .setHelpText('💡 Unlock Exclusive Ambassador Discounts: You can submit your basic details now. However, if you proceed to select your course and mode of learning, you will immediately unlock exclusive ambassador discount credentials (up to 35%+ OFF) and jump the counseling queue!')
    .setRequired(true);

  // 3. Category Page Setup
  var categoryPage = form.addPageBreakItem().setTitle('Choose Your Target Course Category');
  
  // Link pathQuestion choices to submit or Category Page
  pathQuestion.setChoices([
    pathQuestion.createChoice('Yes, explore available courses and unlock ambassador discount credentials! 🚀', categoryPage),
    pathQuestion.createChoice('No, just submit my basic registration details for now. 📋', FormApp.PageNavigationType.SUBMIT)
  ]);

  var categoryQuestion = form.addMultipleChoiceItem()
    .setTitle('Select your target Category:')
    .setRequired(true);

  // Define Category page breaks and questions
""")

    # We will declare category page breaks and Mode & Language multiple choice items first
    cat_vars = {}
    mode_lang_vars = {}
    
    js_code.append("  // Declaring Category Pages and Selection Questions")
    for idx, (cat_name, courses) in enumerate(active_categories.items()):
        cat_var = f"catPage_{idx}"
        ml_var = f"mlQuestion_{idx}"
        cat_vars[cat_name] = cat_var
        mode_lang_vars[cat_name] = ml_var
        
        escaped_cat = escape_js_string(cat_name)
        js_code.append(f"  var {cat_var} = form.addPageBreakItem().setTitle('{escaped_cat} Options');")
        js_code.append(f"  var {ml_var} = form.addMultipleChoiceItem().setTitle('Select Mode & Language for {escaped_cat}:').setRequired(true);")
        
    # Declare the Other Category Page Break and Questions
    js_code.append("\n  // Declare Page and Questions for 'Other / Course Not Listed' Option")
    js_code.append("  var otherCatPage = form.addPageBreakItem().setTitle('Other Course Registration');")
    js_code.append("  form.addTextItem().setTitle('Enter your desired Course or Batch Name:').setRequired(true);")
    js_code.append("  form.addMultipleChoiceItem().setTitle('Preferred Mode of Learning:').setChoiceValues(['ONLINE Mode', 'OFFLINE Mode']).setRequired(true);")
    js_code.append("  form.addMultipleChoiceItem().setTitle('Preferred Batch Language:').setChoiceValues(['Hinglish Language', 'English Medium', 'Hindi Medium']).setRequired(true);")
    js_code.append("  otherCatPage.setGoToPage(FormApp.PageNavigationType.SUBMIT);")

    js_code.append("\n  // Link main Category question to Category Pages")
    category_choices_js = []
    for cat_name, cat_var in cat_vars.items():
        escaped_cat = escape_js_string(cat_name)
        category_choices_js.append(f"    categoryQuestion.createChoice('{escaped_cat}', {cat_var})")
    
    # Append the Other option choice
    category_choices_js.append("    categoryQuestion.createChoice('Other / Course Not Listed', otherCatPage)")
    
    js_code.append("  categoryQuestion.setChoices([\n" + ",\n".join(category_choices_js) + "\n  ]);\n")
    
    # We will now generate the course list pages for each combination in each category
    js_code.append("  // Declaring Course List Pages and Checkboxes for combinations")
    
    course_pages_to_submit = []
    
    for cat_idx, (cat_name, courses) in enumerate(active_categories.items()):
        # Group courses by (mode, language)
        groups = {}
        for c in courses:
            mode = c.get("mode", "ONLINE")
            lang = c.get("language", "N/A")
            key = (mode, lang)
            if key not in groups:
                groups[key] = []
            groups[key].append(c)
            
        ml_var = mode_lang_vars[cat_name]
        ml_choices_js = []
        
        js_code.append(f"\n  // Combinations for: {cat_name}")
        
        for comb_idx, ((mode, lang), g_courses) in enumerate(groups.items()):
            course_page_var = f"coursePage_{cat_idx}_{comb_idx}"
            course_pages_to_submit.append(course_page_var)
            
            # Escape strings
            escaped_mode = escape_js_string(mode)
            escaped_lang = escape_js_string(lang)
            escaped_cat = escape_js_string(cat_name)
            
            page_title = f"{escaped_cat} | {escaped_mode} ({escaped_lang}) Courses"
            js_code.append(f"  var {course_page_var} = form.addPageBreakItem().setTitle('{page_title}');")
            
            # Extract names of courses
            course_names = []
            for c in g_courses:
                title = c.get("title")
                price = c.get("total")
                orig_price = c.get("price")
                discount = c.get("discount")
                
                # Format a detailed label for the checkbox
                label = f"{title} (Price: Rs. {price} | Rs. {orig_price} {discount}% OFF)"
                course_names.append(escape_js_string(label))
                
            # Add Other option to course list
            course_names.append("Other (Please specify below)")
            
            # Render checkbox item in Apps Script
            js_code.append(f"  form.addCheckboxItem()")
            js_code.append(f"    .setTitle('Select one or more courses to register for:')")
            js_code.append(f"    .setChoiceValues({json.dumps(course_names, ensure_ascii=False)})")
            js_code.append(f"    .setRequired(true);")
            js_code.append(f"  form.addTextItem().setTitle('If you chose Other, enter the Course/Batch Name here:');")
            
            # Create a choice for the Mode/Language selector on the category page
            choice_label = f"{mode} Mode - {lang} Language"
            ml_choices_js.append(f"    {ml_var}.createChoice('{choice_label}', {course_page_var})")
            
        # Link the Mode/Language selector to the respective course list pages
        js_code.append(f"  {ml_var}.setChoices([\n" + ",\n".join(ml_choices_js) + "\n  ]);")
        
    # Configure all course pages to submit directly on submission
    js_code.append("\n  // 5. Set Page Routing to Submit to prevent page bleeding")
    for cp_var in course_pages_to_submit:
        js_code.append(f"  {cp_var}.setGoToPage(FormApp.PageNavigationType.SUBMIT);")
        
    # Success text and Drive logs
    js_code.append("""
  // 6. Post Submission Success Text Configuration
  form.setConfirmationMessage('🎉 Registration Details Confirmed!\\n\\n' +
                              'Your learning preferences are securely synced under the PW Campus Ambassador registry. ' +
                              'An authorized team advisor assigned to your selected Category + Mode + Language branch will contact you within 24 hours via Call/WhatsApp to coordinate your enrollment discount credentials and finalize onboarding! 💙');

  Logger.log('==================================================');
  Logger.log('Success! Form and Spreadsheet ready on Google Drive.');
  Logger.log('Edit URL (For Ambassador): ' + form.getEditUrl());
  Logger.log('Published URL (For Students): ' + form.getPublishedUrl());
  Logger.log('Connected Google Sheet URL: ' + ss.getUrl());
  Logger.log('==================================================');
}
""")
    
    # Save the Form Creator script
    try:
        with open(script_file, "w", encoding="utf-8") as f_out:
            f_out.write("\n".join(js_code))
        print(f"Form Generator: Successfully generated Apps Script code to {script_file}")
    except Exception as e:
        print(f"Error saving google_apps_script.js: {e}")

    # Generate the Lead Notifier script in a separate file
    notifier_file = os.path.join(os.path.dirname(__file__), "lead_notifier.js")
    notifier_code = """/**
 * Lead Notification Script (Spreadsheet Side)
 * Automatically triggers and sends an email alert with the student's details
 * every time a new response is submitted or edited.
 * 
 * How to setup:
 * 1. Open your Google Form response Spreadsheet.
 * 2. Click 'Extensions' > 'Apps Script' in the top menu.
 * 3. Paste this function into the editor.
 * 4. Replace 'your-email@gmail.com' with your actual email address.
 * 5. In the left sidebar of the script editor, click the clock icon (Triggers).
 * 6. Click '+ Add Trigger' at the bottom right.
 * 7. Choose function: 'emailMeOnNewLead'
 * 8. Choose event source: 'From spreadsheet'
 * 9. Choose event type: 'On form submit'
 * 10. Click Save and authorize permissions.
 */
function emailMeOnNewLead(e) {
  try {
    var sheet = e.range.getSheet();
    var rowNum = e.range.getRow();
    var lastCol = sheet.getLastColumn();
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    var rowValues = sheet.getRange(rowNum, 1, 1, lastCol).getValues()[0];

    // Extract fields by looping through headers and row values in parallel
    var name = 'N/A';
    var email = 'N/A';
    var mobile = 'N/A';
    var whatsapp = 'N/A';
    var status = 'N/A';
    var location = 'N/A';
    var explore = 'N/A';
    var category = 'N/A';
    var modeLang = 'N/A';
    var chosenCourses = [];

    var prefMode = '';
    var prefLang = '';

    for (var i = 0; i < headers.length; i++) {
      var header = headers[i];
      var val = rowValues[i];
      if (!header || val === undefined || val === null) continue;
      
      var strVal = String(val).trim();
      if (strVal === '') continue;

      // Extract demographics & email
      if (header === 'Student Full Name') {
        name = strVal;
      } else if (header === 'Email Address' || header === 'Username') {
        email = strVal;
      } else if (header === 'Mobile Number (For Callback Verification)') {
        mobile = strVal;
      } else if (header === 'WhatsApp Number (If different from calling number)') {
        whatsapp = strVal;
      } else if (header === 'Student Current Academic Status') {
        status = strVal;
      } else if (header === 'City & State') {
        location = strVal;
      } else if (header === 'Would you like to explore course batches and unlock exclusive ambassador discounts now?') {
        explore = strVal;
      } 
      // Extract course options
      else if (header.indexOf('Select your target Category:') !== -1) {
        category = strVal;
      } else if (header.indexOf('Select Mode & Language for') !== -1) {
        modeLang = strVal;
      } else if (header.indexOf('Select one or more courses') !== -1) {
        chosenCourses.push(strVal);
      } else if (header.indexOf('If you chose Other') !== -1 || header.indexOf('desired Course or Batch Name') !== -1) {
        chosenCourses.push("Other: " + strVal);
      } else if (header.indexOf('Preferred Mode of Learning:') !== -1) {
        prefMode = strVal;
      } else if (header.indexOf('Preferred Batch Language:') !== -1) {
        prefLang = strVal;
      }
    }

    // If Category is Other, combine Preferred Mode and Language
    if (category === 'Other / Course Not Listed' && prefMode && prefLang) {
      modeLang = prefMode + " - " + prefLang;
    }

    var courseList = chosenCourses.join(', ') || 'None selected (Basic Registration)';

    // Detect if this is an Edit or a New Submission
    // We create/use a hidden 'Notification Status' column to save the true original submission time.
    var statusCol = -1;
    for (var i = 0; i < headers.length; i++) {
      if (headers[i] === 'Notification Status') {
        statusCol = i + 1; // 1-indexed
        break;
      }
    }
    if (statusCol === -1) {
      statusCol = lastCol + 1;
      sheet.getRange(1, statusCol).setValue('Notification Status');
    }

    var statusVal = rowValues[statusCol - 1]; // 0-indexed in rowValues array
    var isEdit = false;
    var isLateEdit = false;
    var nowTime = new Date().getTime();

    if (!statusVal || String(statusVal).trim() === '') {
      // First-time submission (New Lead)
      sheet.getRange(rowNum, statusCol).setValue(String(nowTime));
      isEdit = false;
    } else {
      // This row has been processed before, meaning the user edited their response
      isEdit = true;
      var originalTime = Number(statusVal);
      if (!isNaN(originalTime)) {
        var diffMs = Math.abs(nowTime - originalTime);
        if (diffMs > 30 * 60 * 1000) { // 30 minutes threshold
          isLateEdit = true;
        }
      }
    }

    // Configure email subject and body header based on Edit status
    var subjectPrefix = isEdit ? (isLateEdit ? "⚠️ LATE EDITED PW LEAD: " : "✏️ EDITED PW LEAD: ") : "🔥 NEW PW LEAD: ";
    var bodyHeader = isEdit ? (isLateEdit ? "⚠️ WARNING: This response was edited AFTER the 30-minute allowed window!" : "⚠️ EDIT NOTICE: This student has updated their registration details!") : "You have a new student lead waiting!";

    // Draft the notification email
    var myEmail = "your-email@gmail.com"; // <-- REPLACE WITH YOUR EMAIL ADDRESS
    var subject = subjectPrefix + name + " (" + category + ")";
    
    var body = "Hey Vinay,\\n\\n" +
               bodyHeader + "\\n\\n" +
               "👤 Name: " + name + "\\n" +
               "✉️ Email: " + email + "\\n" +
               "📞 Mobile: " + mobile + "\\n" +
               "💬 WhatsApp: " + whatsapp + "\\n" +
               "🎓 Status: " + status + "\\n" +
               "📍 Location: " + location + "\\n" +
               "❓ Wants Discount: " + explore + "\\n\\n" +
               "--- COURSE SELECTION ---\\n" +
               "📁 Category: " + category + "\\n" +
               "⚙️ Mode & Language: " + modeLang + "\\n" +
               "📚 Selected Course(s): " + courseList + "\\n\\n" +
               "Call them immediately to lock in their incentive!";
               
    MailApp.sendEmail(myEmail, subject, body);
    Logger.log('Notification sent successfully. Edit: ' + isEdit + ', Lead: ' + name);
  } catch (err) {
    Logger.log('Error sending notification: ' + err.toString());
  }
}
"""
    try:
        with open(notifier_file, "w", encoding="utf-8") as f_out:
            f_out.write(notifier_code)
        print(f"Form Generator: Successfully generated Lead Notifier code to {notifier_file}")
    except Exception as e:
        print(f"Error saving lead_notifier.js: {e}")

if __name__ == "__main__":
    generate_apps_script()
