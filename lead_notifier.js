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

    // Build a map of Header -> Value
    var dataMap = {};
    for (var i = 0; i < headers.length; i++) {
      dataMap[headers[i]] = rowValues[i];
    }

    // Extract demographic fields directly using question headers (always present)
    var name = dataMap['Student Full Name'] || 'N/A';
    var mobile = dataMap['Mobile Number (For Callback Verification)'] || 'N/A';
    var whatsapp = dataMap['WhatsApp Number (If different from calling number)'] || 'N/A';
    var status = dataMap['Student Current Academic Status'] || 'N/A';
    var location = dataMap['City & State'] || 'N/A';
    var explore = dataMap['Would you like to explore course batches and unlock exclusive ambassador discounts now?'] || 'N/A';

    var category = 'N/A';
    var modeLang = 'N/A';
    var chosenCourses = [];

    // Loop through all dataMap keys to collect Category, Mode/Lang, and Checkbox Courses dynamically
    for (var key in dataMap) {
      var val = dataMap[key];
      if (!val) continue;

      if (key.indexOf('Select your target Category:') !== -1) {
        category = val;
      } else if (key.indexOf('Select Mode & Language for') !== -1) {
        modeLang = val;
      } else if (key.indexOf('Select one or more courses') !== -1) {
        chosenCourses.push(val);
      } else if (key.indexOf('If you chose Other') !== -1 || key.indexOf('desired Course or Batch Name') !== -1) {
        chosenCourses.push("Other: " + val);
      }
    }

    var courseList = chosenCourses.join(', ') || 'None selected (Basic Registration)';

    // Detect if this is an Edit or a New Submission
    var rowKey = "row_" + rowNum;
    var scriptProps = PropertiesService.getScriptProperties();
    var lastTimestamp = scriptProps.getProperty(rowKey);
    var isEdit = (lastTimestamp !== null);
    
    // Save current timestamp for this row
    scriptProps.setProperty(rowKey, String(rowValues[0]));

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
