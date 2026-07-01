/**
 * Lead Notification Script (Spreadsheet Side)
 * Automatically triggers and sends an email alert with the student's details
 * every time a new response is submitted.
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
 */
function emailMeOnNewLead(e) {
  try {
    // Extract demographic fields directly using question headers (always present)
    var name = e.namedValues['Student Full Name'] ? e.namedValues['Student Full Name'][0] : 'N/A';
    var mobile = e.namedValues['Mobile Number (For Callback Verification)'] ? e.namedValues['Mobile Number (For Callback Verification)'][0] : 'N/A';
    var whatsapp = e.namedValues['WhatsApp Number (If different from calling number)'] ? e.namedValues['WhatsApp Number (If different from calling number)'][0] : 'N/A';
    var status = e.namedValues['Student Current Academic Status'] ? e.namedValues['Student Current Academic Status'][0] : 'N/A';
    var location = e.namedValues['City & State'] ? e.namedValues['City & State'][0] : 'N/A';
    var explore = e.namedValues['Would you like to explore course batches and unlock exclusive ambassador discounts now?'] ? e.namedValues['Would you like to explore course batches and unlock exclusive ambassador discounts now?'][0] : 'N/A';

    var category = 'N/A';
    var modeLang = 'N/A';
    var chosenCourses = [];

    // Loop through all submitted namedValues to collect Category, Mode/Lang, and Checkbox Courses dynamically
    for (var key in e.namedValues) {
      var val = e.namedValues[key][0];
      if (!val) continue;

      if (key.indexOf('Select your target Category:') !== -1) {
        category = val;
      } else if (key.indexOf('Select Mode & Language for') !== -1) {
        modeLang = val;
      } else if (key.indexOf('Select one or more courses') !== -1) {
        chosenCourses.push(val);
      }
    }

    var courseList = chosenCourses.join(', ') || 'None selected (Basic Registration)';

    // Draft the notification email
    var myEmail = "your-email@gmail.com"; // <-- REPLACE WITH YOUR EMAIL ADDRESS
    var subject = "🔥 NEW PW LEAD: " + name + " (" + category + ")";
    
    var body = "Hey Vinay,\n\n" +
               "You have a new student lead waiting!\n\n" +
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
    Logger.log('Notification sent successfully for lead: ' + name);
  } catch (err) {
    Logger.log('Error sending notification: ' + err.toString());
  }
}
