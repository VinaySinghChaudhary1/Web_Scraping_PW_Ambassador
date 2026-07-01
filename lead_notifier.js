/**
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

      // Extract demographics
      if (header === 'Student Full Name') {
        name = strVal;
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
    // If the difference between the submission timestamp and the current time is greater than 60 seconds, it is an Edit.
    var isEdit = false;
    var timestampVal = rowValues[0];
    if (timestampVal) {
      var parsedDate = (timestampVal instanceof Date) ? timestampVal : new Date(timestampVal);
      if (!isNaN(parsedDate.getTime())) {
        var diffMs = Math.abs(new Date().getTime() - parsedDate.getTime());
        if (diffMs > 60000) { // 60 seconds threshold
          isEdit = true;
        }
      }
    }

    // Configure email subject and body header based on Edit status
    var subjectPrefix = isEdit ? "✏️ EDITED PW LEAD: " : "🔥 NEW PW LEAD: ";
    var bodyHeader = isEdit ? "⚠️ EDIT NOTICE: This student has updated their registration details!" : "You have a new student lead waiting!";

    // Draft the notification email
    var myEmail = "your-email@gmail.com"; // <-- REPLACE WITH YOUR EMAIL ADDRESS
    var subject = subjectPrefix + name + " (" + category + ")";
    
    var body = "Hey Vinay,\n\n" +
               bodyHeader + "\n\n" +
               "👤 Name: " + name + "\n" +
               "📞 Mobile: " + mobile + "\n" +
               "💬 WhatsApp: " + whatsapp + "\n" +
               "🎓 Status: " + status + "\n" +
               "📍 Location: " + location + "\n" +
               "❓ Wants Discount: " + explore + "\n\n" +
               "--- COURSE SELECTION ---\n" +
               "📁 Category: " + category + "\n" +
               "⚙️ Mode & Language: " + modeLang + "\n" +
               "📚 Selected Course(s): " + courseList + "\n\n" +
               "Call them immediately to lock in their incentive!";
               
    MailApp.sendEmail(myEmail, subject, body);
    Logger.log('Notification sent successfully. Edit: ' + isEdit + ', Lead: ' + name);
  } catch (err) {
    Logger.log('Error sending notification: ' + err.toString());
  }
}
