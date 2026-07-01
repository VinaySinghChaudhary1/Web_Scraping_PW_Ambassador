/**
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
  form.setTitle('Official PW Student Registration & Batch Choice Portal');
  form.setDescription('📋 Official Student Intake & Course Mapping Form\n' +
                      'Physics Wallah Campus Ambassador Program\n\n' +
                      'Welcome! This authenticated portal captures your learning preferences and transfers them securely to our counseling division.\n\n' +
                      '🔒 Verified Official Program Disclaimer:\n' +
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

  // 3. Category Page Setup
  var categoryPage = form.addPageBreakItem().setTitle('Choose Your Target Course Category');
  var categoryQuestion = form.addMultipleChoiceItem()
    .setTitle('Select your target Category:')
    .setRequired(true);

  // Define Category page breaks and questions

  // Declaring Category Pages and Selection Questions
  var catPage_0 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 Options');
  var mlQuestion_0 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for IIT-JEE - Class 11:').setRequired(true);
  var catPage_1 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 Options');
  var mlQuestion_1 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for IIT-JEE - Class 12:').setRequired(true);
  var catPage_2 = form.addPageBreakItem().setTitle('IIT-JEE - Dropper Options');
  var mlQuestion_2 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for IIT-JEE - Dropper:').setRequired(true);
  var catPage_3 = form.addPageBreakItem().setTitle('NEET - Class 11 Options');
  var mlQuestion_3 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for NEET - Class 11:').setRequired(true);
  var catPage_4 = form.addPageBreakItem().setTitle('NEET - Class 12 Options');
  var mlQuestion_4 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for NEET - Class 12:').setRequired(true);
  var catPage_5 = form.addPageBreakItem().setTitle('UPSC Options');
  var mlQuestion_5 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for UPSC:').setRequired(true);
  var catPage_6 = form.addPageBreakItem().setTitle('Govt. Exams - SSC Options');
  var mlQuestion_6 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Govt. Exams - SSC:').setRequired(true);
  var catPage_7 = form.addPageBreakItem().setTitle('Govt. Exams - Defence Options');
  var mlQuestion_7 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Govt. Exams - Defence:').setRequired(true);
  var catPage_8 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - IPMAT Options');
  var mlQuestion_8 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for College Entrance Exams ( UG & PG ) - IPMAT:').setRequired(true);
  var catPage_9 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - Design - NID, UCEED, NIFT Options');
  var mlQuestion_9 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for College Entrance Exams ( UG & PG ) - Design - NID, UCEED, NIFT:').setRequired(true);
  var catPage_10 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - Architecture - NATA, JEE Paper 2 Options');
  var mlQuestion_10 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for College Entrance Exams ( UG & PG ) - Architecture - NATA, JEE Paper 2:').setRequired(true);
  var catPage_11 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - CAT Options');
  var mlQuestion_11 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for College Entrance Exams ( UG & PG ) - CAT:').setRequired(true);
  var catPage_12 = form.addPageBreakItem().setTitle('All Government Job Exams - SSC Options');
  var mlQuestion_12 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for All Government Job Exams - SSC:').setRequired(true);
  var catPage_13 = form.addPageBreakItem().setTitle('All Government Job Exams - Defence Options');
  var mlQuestion_13 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for All Government Job Exams - Defence:').setRequired(true);
  var catPage_14 = form.addPageBreakItem().setTitle('All Government Job Exams - UPSC Options');
  var mlQuestion_14 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for All Government Job Exams - UPSC:').setRequired(true);
  var catPage_15 = form.addPageBreakItem().setTitle('All Government Job Exams - Agriculture Options');
  var mlQuestion_15 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for All Government Job Exams - Agriculture:').setRequired(true);
  var catPage_16 = form.addPageBreakItem().setTitle('All Government Job Exams - Judiciary Options');
  var mlQuestion_16 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for All Government Job Exams - Judiciary:').setRequired(true);
  var catPage_17 = form.addPageBreakItem().setTitle('All Government Job Exams - Teaching Options');
  var mlQuestion_17 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for All Government Job Exams - Teaching:').setRequired(true);
  var catPage_18 = form.addPageBreakItem().setTitle('All Government Job Exams - Railway Options');
  var mlQuestion_18 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for All Government Job Exams - Railway:').setRequired(true);
  var catPage_19 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - JAIIB & CAIIB Options');
  var mlQuestion_19 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for CA, CS, Banking & Finance Courses - JAIIB & CAIIB:').setRequired(true);
  var catPage_20 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - CFA Options');
  var mlQuestion_20 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for CA, CS, Banking & Finance Courses - CFA:').setRequired(true);
  var catPage_21 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Government Bank Exams Options');
  var mlQuestion_21 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for CA, CS, Banking & Finance Courses - Government Bank Exams:').setRequired(true);
  var catPage_22 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Certifications - Banking Options');
  var mlQuestion_22 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for CA, CS, Banking & Finance Courses - Certifications - Banking:').setRequired(true);
  var catPage_23 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Finance Certification Options');
  var mlQuestion_23 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for CA, CS, Banking & Finance Courses - Finance Certification:').setRequired(true);
  var catPage_24 = form.addPageBreakItem().setTitle('NET Exams & Teacher Training - UGC NET Options');
  var mlQuestion_24 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for NET Exams & Teacher Training - UGC NET:').setRequired(true);
  var catPage_25 = form.addPageBreakItem().setTitle('NET Exams & Teacher Training - CSIR NET Options');
  var mlQuestion_25 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for NET Exams & Teacher Training - CSIR NET:').setRequired(true);
  var catPage_26 = form.addPageBreakItem().setTitle('Earners ( Upskilling ) - PC Courses Options');
  var mlQuestion_26 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Earners ( Upskilling ) - PC Courses:').setRequired(true);
  var catPage_27 = form.addPageBreakItem().setTitle('Earners ( Upskilling ) - Mobile Courses Options');
  var mlQuestion_27 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Earners ( Upskilling ) - Mobile Courses:').setRequired(true);
  var catPage_28 = form.addPageBreakItem().setTitle('Spoken English Options');
  var mlQuestion_28 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Spoken English:').setRequired(true);
  var catPage_29 = form.addPageBreakItem().setTitle('Gyaan-E (Short-Courses) Options');
  var mlQuestion_29 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Gyaan-E (Short-Courses):').setRequired(true);
  var catPage_30 = form.addPageBreakItem().setTitle('M.A.D (Music, Art & Dance). - Art Options');
  var mlQuestion_30 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for M.A.D (Music, Art & Dance). - Art:').setRequired(true);
  var catPage_31 = form.addPageBreakItem().setTitle('Online Degree Options');
  var mlQuestion_31 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Online Degree:').setRequired(true);
  var catPage_32 = form.addPageBreakItem().setTitle('Study Abroad & Career Abroad - Acadfly Study Abroad Options');
  var mlQuestion_32 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Study Abroad & Career Abroad - Acadfly Study Abroad:').setRequired(true);
  var catPage_33 = form.addPageBreakItem().setTitle('PW IOI (College) Options');
  var mlQuestion_33 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for PW IOI (College):').setRequired(true);
  var catPage_34 = form.addPageBreakItem().setTitle('Skills - Data Science Options');
  var mlQuestion_34 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Skills - Data Science:').setRequired(true);
  var catPage_35 = form.addPageBreakItem().setTitle('Skills - Digital Marketing with AI Options');
  var mlQuestion_35 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Skills - Digital Marketing with AI:').setRequired(true);
  var catPage_36 = form.addPageBreakItem().setTitle('Skills - Software Development Options');
  var mlQuestion_36 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Skills - Software Development:').setRequired(true);
  var catPage_37 = form.addPageBreakItem().setTitle('Skills - Certifications - Banking Options');
  var mlQuestion_37 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Skills - Certifications - Banking:').setRequired(true);
  var catPage_38 = form.addPageBreakItem().setTitle('Skills - IIT Online Courses Options');
  var mlQuestion_38 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Skills - IIT Online Courses:').setRequired(true);
  var catPage_39 = form.addPageBreakItem().setTitle('Skills - IIM Online Courses Options');
  var mlQuestion_39 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Skills - IIM Online Courses:').setRequired(true);
  var catPage_40 = form.addPageBreakItem().setTitle('Skills - Legal Skills Options');
  var mlQuestion_40 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Skills - Legal Skills:').setRequired(true);
  var catPage_41 = form.addPageBreakItem().setTitle('Skills - Urban Management Options');
  var mlQuestion_41 = form.addMultipleChoiceItem().setTitle('Select Mode & Language for Skills - Urban Management:').setRequired(true);

  // Link main Category question to Category Pages
  categoryQuestion.setChoices([
    categoryQuestion.createChoice('IIT-JEE - Class 11', catPage_0),
    categoryQuestion.createChoice('IIT-JEE - Class 12', catPage_1),
    categoryQuestion.createChoice('IIT-JEE - Dropper', catPage_2),
    categoryQuestion.createChoice('NEET - Class 11', catPage_3),
    categoryQuestion.createChoice('NEET - Class 12', catPage_4),
    categoryQuestion.createChoice('UPSC', catPage_5),
    categoryQuestion.createChoice('Govt. Exams - SSC', catPage_6),
    categoryQuestion.createChoice('Govt. Exams - Defence', catPage_7),
    categoryQuestion.createChoice('College Entrance Exams ( UG & PG ) - IPMAT', catPage_8),
    categoryQuestion.createChoice('College Entrance Exams ( UG & PG ) - Design - NID, UCEED, NIFT', catPage_9),
    categoryQuestion.createChoice('College Entrance Exams ( UG & PG ) - Architecture - NATA, JEE Paper 2', catPage_10),
    categoryQuestion.createChoice('College Entrance Exams ( UG & PG ) - CAT', catPage_11),
    categoryQuestion.createChoice('All Government Job Exams - SSC', catPage_12),
    categoryQuestion.createChoice('All Government Job Exams - Defence', catPage_13),
    categoryQuestion.createChoice('All Government Job Exams - UPSC', catPage_14),
    categoryQuestion.createChoice('All Government Job Exams - Agriculture', catPage_15),
    categoryQuestion.createChoice('All Government Job Exams - Judiciary', catPage_16),
    categoryQuestion.createChoice('All Government Job Exams - Teaching', catPage_17),
    categoryQuestion.createChoice('All Government Job Exams - Railway', catPage_18),
    categoryQuestion.createChoice('CA, CS, Banking & Finance Courses - JAIIB & CAIIB', catPage_19),
    categoryQuestion.createChoice('CA, CS, Banking & Finance Courses - CFA', catPage_20),
    categoryQuestion.createChoice('CA, CS, Banking & Finance Courses - Government Bank Exams', catPage_21),
    categoryQuestion.createChoice('CA, CS, Banking & Finance Courses - Certifications - Banking', catPage_22),
    categoryQuestion.createChoice('CA, CS, Banking & Finance Courses - Finance Certification', catPage_23),
    categoryQuestion.createChoice('NET Exams & Teacher Training - UGC NET', catPage_24),
    categoryQuestion.createChoice('NET Exams & Teacher Training - CSIR NET', catPage_25),
    categoryQuestion.createChoice('Earners ( Upskilling ) - PC Courses', catPage_26),
    categoryQuestion.createChoice('Earners ( Upskilling ) - Mobile Courses', catPage_27),
    categoryQuestion.createChoice('Spoken English', catPage_28),
    categoryQuestion.createChoice('Gyaan-E (Short-Courses)', catPage_29),
    categoryQuestion.createChoice('M.A.D (Music, Art & Dance). - Art', catPage_30),
    categoryQuestion.createChoice('Online Degree', catPage_31),
    categoryQuestion.createChoice('Study Abroad & Career Abroad - Acadfly Study Abroad', catPage_32),
    categoryQuestion.createChoice('PW IOI (College)', catPage_33),
    categoryQuestion.createChoice('Skills - Data Science', catPage_34),
    categoryQuestion.createChoice('Skills - Digital Marketing with AI', catPage_35),
    categoryQuestion.createChoice('Skills - Software Development', catPage_36),
    categoryQuestion.createChoice('Skills - Certifications - Banking', catPage_37),
    categoryQuestion.createChoice('Skills - IIT Online Courses', catPage_38),
    categoryQuestion.createChoice('Skills - IIM Online Courses', catPage_39),
    categoryQuestion.createChoice('Skills - Legal Skills', catPage_40),
    categoryQuestion.createChoice('Skills - Urban Management', catPage_41)
  ]);

  // Declaring Course List Pages and Checkboxes for combinations

  // Combinations for: IIT-JEE - Class 11
  var coursePage_0_0 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna JEE 2027 (Price: Rs. 4999 | Rs. 6000 17% OFF)", "Arjuna JEE 2.0 2027 (Price: Rs. 4900 | Rs. 5500 11% OFF)", "UDAY 2.0 2027 (Class 11th) (Price: Rs. 3500 | Rs. 4500 22% OFF)", "Arjuna Power Batch JEE Target 2028 3.1 (J1131AB26) (Price: Rs. 5000 | Rs. 0 0% OFF)", "UDAY 2027 (Class 11th) (Price: Rs. 3500 | Rs. 4800 27% OFF)", "Arjuna JEE 2027 + Lakshya JEE 2028 (Price: Rs. 8800 | Rs. 12400 29% OFF)", "Lakshya JEE 2027 (Price: Rs. 4999 | Rs. 6000 17% OFF)", "Arjuna JEE 2027 + Uday 2027 (Price: Rs. 7500 | Rs. 10800 31% OFF)"])
    .setRequired(true);
  var coursePage_0_1 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Vidyapeeth 11 JEE (Target 2028) (Price: Rs. 5000 | Rs. 0 0% OFF)", "Pathshala 11th JEE (Target 2028) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_0_2 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 | ONLINE (Hindi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna JEE Hindi 2.0 2027 (Price: Rs. 3199 | Rs. 5200 38% OFF)", "Arjuna JEE Hindi 2027 (Price: Rs. 3499 | Rs. 5500 36% OFF)"])
    .setRequired(true);
  var coursePage_0_3 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna JEE in English 2027 (Price: Rs. 4200 | Rs. 6300 33% OFF)", "Arjuna Power Batch JEE Target 2028 (English) (J1111EE26) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_0_4 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna MHT-CET 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)", "Arjuna Bangla (WBJEE + Biology) 2027 + Lakshya Bangla (WBJEE + Biology) 2028 (Price: Rs. 7200 | Rs. 12000 40% OFF)"])
    .setRequired(true);
  var coursePage_0_5 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 | ONLINE (Gujrati) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna JEE Gujarati 2027 (Price: Rs. 5500 | Rs. 7000 21% OFF)", "Arjuna JEE Gujarati 2027 Pro + Tab (Price: Rs. 23000 | Rs. 27000 15% OFF)"])
    .setRequired(true);
  var coursePage_0_6 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 | ONLINE (Kannada) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna KCET 2027 (Price: Rs. 4499 | Rs. 6500 31% OFF)"])
    .setRequired(true);
  var coursePage_0_7 = form.addPageBreakItem().setTitle('IIT-JEE - Class 11 | ONLINE (Bangla) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna Bangla (WBJEE + Biology) 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)"])
    .setRequired(true);
  mlQuestion_0.setChoices([
    mlQuestion_0.createChoice('ONLINE Mode - Hinglish Language', coursePage_0_0),
    mlQuestion_0.createChoice('OFFLINE Mode - Hinglish Language', coursePage_0_1),
    mlQuestion_0.createChoice('ONLINE Mode - Hindi Language', coursePage_0_2),
    mlQuestion_0.createChoice('ONLINE Mode - English Language', coursePage_0_3),
    mlQuestion_0.createChoice('ONLINE Mode - Bilingual Language', coursePage_0_4),
    mlQuestion_0.createChoice('ONLINE Mode - Gujrati Language', coursePage_0_5),
    mlQuestion_0.createChoice('ONLINE Mode - Kannada Language', coursePage_0_6),
    mlQuestion_0.createChoice('ONLINE Mode - Bangla Language', coursePage_0_7)
  ]);

  // Combinations for: IIT-JEE - Class 12
  var coursePage_1_0 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya JEE 2027 (Price: Rs. 4999 | Rs. 6000 17% OFF)", "Lakshya JEE 2.0 2027 (Price: Rs. 4900 | Rs. 5500 11% OFF)", "Lakshya Power Batch JEE Target 2027 3.1 (J1231EB26) (Price: Rs. 5000 | Rs. 0 0% OFF)", "PARISHRAM 2027 (Class 12th) (Price: Rs. 3500 | Rs. 4800 27% OFF)", "JEE College Counselling: Masterclass (Price: Rs. 199 | Rs. 999 80% OFF)", "LAKSHYA JEE 2027 + PARISHRAM 2027 (Price: Rs. 7500 | Rs. 11100 32% OFF)", "BITSAT Crash Course 2026 (Price: Rs. 499 | Rs. 4430 89% OFF)"])
    .setRequired(true);
  var coursePage_1_1 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Vidyapeeth 12th JEE (Target 2027) (Price: Rs. 5000 | Rs. 0 0% OFF)", "Pathshala 12th JEE (Target 2027) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_1_2 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 | ONLINE (Hindi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya JEE Hindi 2.0 2027 (Price: Rs. 3199 | Rs. 5200 38% OFF)", "Lakshya JEE Hindi 2027 (Price: Rs. 3499 | Rs. 5500 36% OFF)"])
    .setRequired(true);
  var coursePage_1_3 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya MHTCET 2.0 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)", "Lakshya MHT-CET 0.0 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)", "Lakshya MHT-CET 2027 + Parishram Maharashtra HSC 2027 (Price: Rs. 6999 | Rs. 9999 30% OFF)"])
    .setRequired(true);
  var coursePage_1_4 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya JEE in English 2027 (Price: Rs. 4200 | Rs. 6300 33% OFF)", "Lakshya Power Batch  JEE Target 2027 (English) (J1211EE26) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_1_5 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 | ONLINE (Gujrati) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya JEE Gujarati 2027 (Price: Rs. 5500 | Rs. 7000 21% OFF)", "Lakshya JEE Gujarati Pro +Tab 2027 (Price: Rs. 23000 | Rs. 25500 10% OFF)"])
    .setRequired(true);
  var coursePage_1_6 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 | ONLINE (Kannada) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya KCET 2027 (Price: Rs. 4999 | Rs. 6500 23% OFF)"])
    .setRequired(true);
  var coursePage_1_7 = form.addPageBreakItem().setTitle('IIT-JEE - Class 12 | ONLINE (Bangla) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya Bangla (WBJEE + Biology) 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)"])
    .setRequired(true);
  mlQuestion_1.setChoices([
    mlQuestion_1.createChoice('ONLINE Mode - Hinglish Language', coursePage_1_0),
    mlQuestion_1.createChoice('OFFLINE Mode - Hinglish Language', coursePage_1_1),
    mlQuestion_1.createChoice('ONLINE Mode - Hindi Language', coursePage_1_2),
    mlQuestion_1.createChoice('ONLINE Mode - Bilingual Language', coursePage_1_3),
    mlQuestion_1.createChoice('ONLINE Mode - English Language', coursePage_1_4),
    mlQuestion_1.createChoice('ONLINE Mode - Gujrati Language', coursePage_1_5),
    mlQuestion_1.createChoice('ONLINE Mode - Kannada Language', coursePage_1_6),
    mlQuestion_1.createChoice('ONLINE Mode - Bangla Language', coursePage_1_7)
  ]);

  // Combinations for: IIT-JEE - Dropper
  var coursePage_2_0 = form.addPageBreakItem().setTitle('IIT-JEE - Dropper | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Prayas 2.0 2027 (Price: Rs. 4900 | Rs. 6000 18% OFF)", "Prayas 2.0 2027 INFINITY PRO (Price: Rs. 11500 | Rs. 29072 60% OFF)", "Prayas Power Batch JEE Target 2027 3.1 (J1331MB26) (Price: Rs. 5000 | Rs. 0 0% OFF)", "Prayas 2027 (Price: Rs. 4999 | Rs. 6000 17% OFF)", "JEE College Counselling: Masterclass (Price: Rs. 199 | Rs. 999 80% OFF)", "BITSAT Crash Course 2026 (Price: Rs. 499 | Rs. 4430 89% OFF)", "NIRMAAN GATE 2029 - Civil (With Basics & AI Fundamentals) (Price: Rs. 32000 | Rs. 65343 51% OFF)", "NIRMAAN GATE 2029 - Civil (With Basics & AI Fundamentals) without Books (Price: Rs. 30000 | Rs. 58000 48% OFF)", "NIRMAAN GATE 2029 - Computer Science & IT (With Basics & AI Fundamentals) (Price: Rs. 32000 | Rs. 65247 51% OFF)", "NIRMAAN GATE 2029 - Computer Science & IT (With Basics & AI Fundamentals) without Books (Price: Rs. 30000 | Rs. 58000 48% OFF)", "NIRMAAN GATE 2029 - Electrical (With Basics & AI Fundamentals) (Price: Rs. 32000 | Rs. 65247 51% OFF)"])
    .setRequired(true);
  var coursePage_2_1 = form.addPageBreakItem().setTitle('IIT-JEE - Dropper | ONLINE (Hindi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Prayas JEE Hindi 2.0 2027 (Price: Rs. 3199 | Rs. 5200 38% OFF)", "Prayas JEE Hindi 2027 (Price: Rs. 3499 | Rs. 5500 36% OFF)"])
    .setRequired(true);
  var coursePage_2_2 = form.addPageBreakItem().setTitle('IIT-JEE - Dropper | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Vidyapeeth Dropper JEE (Target 2027) (Price: Rs. 5000 | Rs. 0 0% OFF)", "Pathshala DROPPER JEE (Target 2027) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_2_3 = form.addPageBreakItem().setTitle('IIT-JEE - Dropper | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Prayas MHT-CET 2027 (Dropper) (Price: Rs. 4600 | Rs. 6000 23% OFF)", "Lakshya MHT-CET 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)"])
    .setRequired(true);
  var coursePage_2_4 = form.addPageBreakItem().setTitle('IIT-JEE - Dropper | ONLINE (Gujrati) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya JEE Gujarati 2027 (Price: Rs. 5500 | Rs. 7000 21% OFF)"])
    .setRequired(true);
  var coursePage_2_5 = form.addPageBreakItem().setTitle('IIT-JEE - Dropper | ONLINE (Kannada) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya KCET 2027 (Price: Rs. 4999 | Rs. 6500 23% OFF)"])
    .setRequired(true);
  var coursePage_2_6 = form.addPageBreakItem().setTitle('IIT-JEE - Dropper | ONLINE (Bangla) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya Bangla (WBJEE + Biology) 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)"])
    .setRequired(true);
  mlQuestion_2.setChoices([
    mlQuestion_2.createChoice('ONLINE Mode - Hinglish Language', coursePage_2_0),
    mlQuestion_2.createChoice('ONLINE Mode - Hindi Language', coursePage_2_1),
    mlQuestion_2.createChoice('OFFLINE Mode - Hinglish Language', coursePage_2_2),
    mlQuestion_2.createChoice('ONLINE Mode - Bilingual Language', coursePage_2_3),
    mlQuestion_2.createChoice('ONLINE Mode - Gujrati Language', coursePage_2_4),
    mlQuestion_2.createChoice('ONLINE Mode - Kannada Language', coursePage_2_5),
    mlQuestion_2.createChoice('ONLINE Mode - Bangla Language', coursePage_2_6)
  ]);

  // Combinations for: NEET - Class 11
  var coursePage_3_0 = form.addPageBreakItem().setTitle('NEET - Class 11 | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna NEET 2027 (Price: Rs. 4999 | Rs. 6000 17% OFF)", "Arjuna NEET 2.0 2027 (Price: Rs. 4900 | Rs. 5500 11% OFF)", "UDAY 2.0 2027 (Class 11th) (Price: Rs. 3500 | Rs. 4500 22% OFF)", "Arjuna Power Batch NEET Target 2028 3.1 (N1131AB26) (Price: Rs. 5000 | Rs. 0 0% OFF)", "UDAY 2027 (Class 11th) (Price: Rs. 3500 | Rs. 4800 27% OFF)", "Arjuna NEET 2027 + Lakshya NEET 2028 (Price: Rs. 8800 | Rs. 12400 29% OFF)", "Lakshya NEET 2027 (Price: Rs. 4999 | Rs. 6000 17% OFF)", "Arjuna NEET 2027 + Uday 2027 (Price: Rs. 7500 | Rs. 10800 31% OFF)", "PARISHRAM 2027 (Class 12th) (Price: Rs. 3500 | Rs. 4800 27% OFF)"])
    .setRequired(true);
  var coursePage_3_1 = form.addPageBreakItem().setTitle('NEET - Class 11 | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Vidyapeeth 11 NEET (Target 2028) (Price: Rs. 5000 | Rs. 0 0% OFF)", "Pathshala 11th NEET (Target 2028) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_3_2 = form.addPageBreakItem().setTitle('NEET - Class 11 | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna NEET in English 2027 (Price: Rs. 4200 | Rs. 6300 33% OFF)", "Arjuna Power Batch NEET Target 2028 (English) (N1111EE26) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_3_3 = form.addPageBreakItem().setTitle('NEET - Class 11 | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna MHT-CET 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)", "Lakshya MHT-CET 0.0 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)"])
    .setRequired(true);
  var coursePage_3_4 = form.addPageBreakItem().setTitle('NEET - Class 11 | ONLINE (Gujrati) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna NEET Gujarati 2027 (Price: Rs. 5500 | Rs. 7000 21% OFF)", "Arjuna NEET Gujarati Pro + Tab 2027 (Price: Rs. 25000 | Rs. 28000 11% OFF)"])
    .setRequired(true);
  var coursePage_3_5 = form.addPageBreakItem().setTitle('NEET - Class 11 | ONLINE (Kannada) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna KCET 2027 (Price: Rs. 4499 | Rs. 6500 31% OFF)"])
    .setRequired(true);
  var coursePage_3_6 = form.addPageBreakItem().setTitle('NEET - Class 11 | ONLINE (Bangla) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna Bangla (WBJEE + Biology) 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)"])
    .setRequired(true);
  var coursePage_3_7 = form.addPageBreakItem().setTitle('NEET - Class 11 | ONLINE (Hindi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Arjuna NEET hindi 2027 (Price: Rs. 3499 | Rs. 5500 36% OFF)"])
    .setRequired(true);
  mlQuestion_3.setChoices([
    mlQuestion_3.createChoice('ONLINE Mode - Hinglish Language', coursePage_3_0),
    mlQuestion_3.createChoice('OFFLINE Mode - Hinglish Language', coursePage_3_1),
    mlQuestion_3.createChoice('ONLINE Mode - English Language', coursePage_3_2),
    mlQuestion_3.createChoice('ONLINE Mode - Bilingual Language', coursePage_3_3),
    mlQuestion_3.createChoice('ONLINE Mode - Gujrati Language', coursePage_3_4),
    mlQuestion_3.createChoice('ONLINE Mode - Kannada Language', coursePage_3_5),
    mlQuestion_3.createChoice('ONLINE Mode - Bangla Language', coursePage_3_6),
    mlQuestion_3.createChoice('ONLINE Mode - Hindi Language', coursePage_3_7)
  ]);

  // Combinations for: NEET - Class 12
  var coursePage_4_0 = form.addPageBreakItem().setTitle('NEET - Class 12 | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Yakeen 2.0 2027 (Price: Rs. 4900 | Rs. 6000 18% OFF)", "Lakshya NEET 2.0 2027 (Price: Rs. 4900 | Rs. 5500 11% OFF)", "Lakshya Power Batch NEET Target 2027 3.1 (N1231EB26) (Price: Rs. 5000 | Rs. 0 0% OFF)", "Lakshya NEET 2027 (Price: Rs. 4999 | Rs. 6000 17% OFF)", "Yakeen Neet 2.0 2027 Infinity Pro (Price: Rs. 13500 | Rs. 34175 60% OFF)", "PARISHRAM 2027 (Class 12th) (Price: Rs. 3500 | Rs. 4800 27% OFF)", "MISSION 100 NEET 2026 (Price: Rs. 499 | Rs. 3000 83% OFF)", "LAKSHYA NEET 2027 + PARISHRAM 2027 (Price: Rs. 7500 | Rs. 11100 32% OFF)"])
    .setRequired(true);
  var coursePage_4_1 = form.addPageBreakItem().setTitle('NEET - Class 12 | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Vidyapeeth 12th NEET (Target 2027) (Price: Rs. 5000 | Rs. 0 0% OFF)", "Pathshala 12th NEET (Target 2027) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_4_2 = form.addPageBreakItem().setTitle('NEET - Class 12 | ONLINE (Hindi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya NEET Hindi 2027 (Price: Rs. 3499 | Rs. 5500 36% OFF)"])
    .setRequired(true);
  var coursePage_4_3 = form.addPageBreakItem().setTitle('NEET - Class 12 | ONLINE (Gujrati) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya NEET Gujarati 2027 (Price: Rs. 5500 | Rs. 7000 21% OFF)", "Lakshya NEET Gujarati Pro +Tab 2027 (Price: Rs. 25000 | Rs. 28000 11% OFF)"])
    .setRequired(true);
  var coursePage_4_4 = form.addPageBreakItem().setTitle('NEET - Class 12 | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya NEET in English 2027 (Price: Rs. 4200 | Rs. 6300 33% OFF)", "Lakshya Power Batch NEET Target 2027 (English) (N1211EE26) (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_4_5 = form.addPageBreakItem().setTitle('NEET - Class 12 | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya MHT-CET 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)", "Lakshya MHT-CET 0.0 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)"])
    .setRequired(true);
  var coursePage_4_6 = form.addPageBreakItem().setTitle('NEET - Class 12 | ONLINE (Kannada) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya KCET 2027 (Price: Rs. 4999 | Rs. 6500 23% OFF)"])
    .setRequired(true);
  var coursePage_4_7 = form.addPageBreakItem().setTitle('NEET - Class 12 | ONLINE (Bangla) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Lakshya Bangla (WBJEE + Biology) 2027 (Price: Rs. 4600 | Rs. 6000 23% OFF)"])
    .setRequired(true);
  var coursePage_4_8 = form.addPageBreakItem().setTitle('NEET - Class 12 | OFFLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Vidyapeeth Residential Program 12 NEET (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_4.setChoices([
    mlQuestion_4.createChoice('ONLINE Mode - Hinglish Language', coursePage_4_0),
    mlQuestion_4.createChoice('OFFLINE Mode - Hinglish Language', coursePage_4_1),
    mlQuestion_4.createChoice('ONLINE Mode - Hindi Language', coursePage_4_2),
    mlQuestion_4.createChoice('ONLINE Mode - Gujrati Language', coursePage_4_3),
    mlQuestion_4.createChoice('ONLINE Mode - English Language', coursePage_4_4),
    mlQuestion_4.createChoice('ONLINE Mode - Bilingual Language', coursePage_4_5),
    mlQuestion_4.createChoice('ONLINE Mode - Kannada Language', coursePage_4_6),
    mlQuestion_4.createChoice('ONLINE Mode - Bangla Language', coursePage_4_7),
    mlQuestion_4.createChoice('OFFLINE Mode - English Language', coursePage_4_8)
  ]);

  // Combinations for: UPSC
  var coursePage_5_0 = form.addPageBreakItem().setTitle('UPSC | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["UPSC PRARAMBH 2029 (Price: Rs. 32999 | Rs. 48999 33% OFF)", "Sankalp 2.0 Hinglish 2028 (Price: Rs. 13999 | Rs. 21999 36% OFF)", "Prahar 3.0 Hinglish 2027 (Price: Rs. 11999 | Rs. 18999 37% OFF)", "UPSC Optional 2027 - Sociology (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - PSIR (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Anthropology (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Mathematics (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Pub. AD. (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - History (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Geography (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)"])
    .setRequired(true);
  var coursePage_5_1 = form.addPageBreakItem().setTitle('UPSC | ONLINE (Hindi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["UPSC Prarambh 2029 - हिन्दी (Price: Rs. 32999 | Rs. 48999 33% OFF)", "Prahar 3.0 Hindi 2027 (Price: Rs. 11999 | Rs. 18999 37% OFF)", "Sankalp 2.0 Hindi 2028 (Price: Rs. 13999 | Rs. 21999 36% OFF)", "UPSC Optional 2027 - Sociology (हिन्दी) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - PSIR (हिन्दी) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - History (हिन्दी) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Hindi Literature (हिन्दी) (Price: Rs. 12999 | Rs. 19999 35% OFF)"])
    .setRequired(true);
  var coursePage_5_2 = form.addPageBreakItem().setTitle('UPSC | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["UPSC PRARAMBH 2029 - English (Price: Rs. 32999 | Rs. 48999 33% OFF)", "Pinnacle 2.0 2028 (English) (Price: Rs. 13999 | Rs. 21999 36% OFF)", "Titan 3.0 2027 (English) (Price: Rs. 11999 | Rs. 18999 37% OFF)"])
    .setRequired(true);
  mlQuestion_5.setChoices([
    mlQuestion_5.createChoice('ONLINE Mode - Hinglish Language', coursePage_5_0),
    mlQuestion_5.createChoice('ONLINE Mode - Hindi Language', coursePage_5_1),
    mlQuestion_5.createChoice('ONLINE Mode - English Language', coursePage_5_2)
  ]);

  // Combinations for: Govt. Exams - SSC
  var coursePage_6_0 = form.addPageBreakItem().setTitle('Govt. Exams - SSC | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Surya 3.0 SSC CGL Target 2026 (Price: Rs. 999 | Rs. 1699 41% OFF)", "SSC CGL Mahapack (Price: Rs. 2199 | Rs. 3499 37% OFF)", "SAFAR 3.0 SSC CGL | CHSL 2027 with English Books (Price: Rs. 2249 | Rs. 3499 36% OFF)", "SSC Mahapack Pro (Price: Rs. 2999 | Rs. 6249 52% OFF)", "Kamyabi 3.0 SSC CHSL Target 2026 (Price: Rs. 1249 | Rs. 1999 38% OFF)", "Surya 2.0 SSC CGL Target 2026 (Price: Rs. 999 | Rs. 1699 41% OFF)", "SSC CHSL Mahapack (Price: Rs. 1999 | Rs. 2999 33% OFF)", "SAFAR 3.0 SSC CGL | CHSL 2027 with Hindi Books (Price: Rs. 2249 | Rs. 3499 36% OFF)", "Akshay SSC Stenographer 2026 (Price: Rs. 999 | Rs. 2499 60% OFF)", "Vishwas SSC GD 2027 (Price: Rs. 599 | Rs. 999 40% OFF)", "Karmath SSC MTS/Havaldar 2026 (Price: Rs. 599 | Rs. 999 40% OFF)", "Yogdaan SSC CPO Target 2026 (Price: Rs. 1499 | Rs. 1999 25% OFF)", "SSC & Railway Mahapack Pro (Price: Rs. 3499 | Rs. 11499 70% OFF)", "Aagaaz SSC Selection Post Phase XIV (Price: Rs. 999 | Rs. 2499 60% OFF)", "SSC GD MTS Mahapack (Price: Rs. 899 | Rs. 2499 64% OFF)", "SSC MTS/Havaldar 2026 Video Course (Price: Rs. 499 | Rs. 999 50% OFF)", "SSC GD Constable Complete Video Course 2026-27 (Price: Rs. 499 | Rs. 999 50% OFF)", "Maths Special Recorded Batch (Arithmetic and Advance) (Price: Rs. 599 | Rs. 1499 60% OFF)", "English Special Recorded Batch (Grammar + Vocab) (Price: Rs. 499 | Rs. 1249 60% OFF)", "Reasoning Special Recorded Batch for All SSC Exams (Price: Rs. 499 | Rs. 1249 60% OFF)"])
    .setRequired(true);
  mlQuestion_6.setChoices([
    mlQuestion_6.createChoice('ONLINE Mode - Hinglish Language', coursePage_6_0)
  ]);

  // Combinations for: Govt. Exams - Defence
  var coursePage_7_0 = form.addPageBreakItem().setTitle('Govt. Exams - Defence | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Mission NDA 100 (Price: Rs. 2499 | Rs. 3999 38% OFF)", "Mission CDS 100 (Price: Rs. 2499 | Rs. 4499 44% OFF)", "Mission CDS OTA 100 (Price: Rs. 2199 | Rs. 3499 37% OFF)", "UDAY NDA FOUNDATION 2027 (Price: Rs. 5599 | Rs. 6999 20% OFF)", "CAPF RAKSHAK 2027 (Price: Rs. 7999 | Rs. 9999 20% OFF)", "NDA (II) Shaurya 2.0 2026 (Price: Rs. 3299 | Rs. 4299 23% OFF)", "CDS (II) VIRAAT 2.0 2026 (Price: Rs. 3799 | Rs. 4799 21% OFF)", "CDS (II) OTA VIRAAT 2.0 2026 (Price: Rs. 2799 | Rs. 3799 26% OFF)", "UDAY NDA Foundation 2.0 2027 (Price: Rs. 5299 | Rs. 6999 24% OFF)", "CDS Foundation 2027 (Price: Rs. 6599 | Rs. 7599 13% OFF)", "AFCAT (II) Garud 2.0 2026 (Price: Rs. 1999 | Rs. 2999 33% OFF)", "Territorial Army Yakeen 2026 (Price: Rs. 1099 | Rs. 1999 45% OFF)", "Paramveer Mahapack 2027 (Price: Rs. 2299 | Rs. 3499 34% OFF)", "Airforce Vayu Combo 2027 (Price: Rs. 999 | Rs. 1499 33% OFF)"])
    .setRequired(true);
  var coursePage_7_1 = form.addPageBreakItem().setTitle('Govt. Exams - Defence | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["NDA (II) Foundation Offline 2027 (Price: Rs. 5000 | Rs. 10000 0% OFF)", "NDA (I) 12th Foundation Offline 2027 (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_7_2 = form.addPageBreakItem().setTitle('Govt. Exams - Defence | OFFLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Super 30 NDA (II) Offline 2026 (Price: Rs. 10000 | Rs. 0 0% OFF)", "NDA (II) Shaurya Offline 2026 (Price: Rs. 5000 | Rs. 0 0% OFF)", "CDS (II) Viraat Offline 2026 (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_7_3 = form.addPageBreakItem().setTitle('Govt. Exams - Defence | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Spoken English By Neha Ma\\'am (Price: Rs. 499 | Rs. 999 50% OFF)"])
    .setRequired(true);
  mlQuestion_7.setChoices([
    mlQuestion_7.createChoice('ONLINE Mode - Hinglish Language', coursePage_7_0),
    mlQuestion_7.createChoice('OFFLINE Mode - Hinglish Language', coursePage_7_1),
    mlQuestion_7.createChoice('OFFLINE Mode - English Language', coursePage_7_2),
    mlQuestion_7.createChoice('ONLINE Mode - English Language', coursePage_7_3)
  ]);

  // Combinations for: College Entrance Exams ( UG & PG ) - IPMAT
  var coursePage_8_0 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - IPMAT | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["IPMAT MASTERQUEST 2.0 2027 (Price: Rs. 4499 | Rs. 8180 45% OFF)", "IPMAT MASTERQUEST 2027 (Price: Rs. 4499 | Rs. 9999 55% OFF)", "IPMAT PRO 2027 (Price: Rs. 7499 | Rs. 14999 50% OFF)"])
    .setRequired(true);
  var coursePage_8_1 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - IPMAT | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Superclass - IPMAT Masterquest 2027 (Price: Rs. 4999 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_8.setChoices([
    mlQuestion_8.createChoice('ONLINE Mode - Hinglish Language', coursePage_8_0),
    mlQuestion_8.createChoice('OFFLINE Mode - Hinglish Language', coursePage_8_1)
  ]);

  // Combinations for: College Entrance Exams ( UG & PG ) - Design - NID, UCEED, NIFT
  var coursePage_9_0 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - Design - NID, UCEED, NIFT | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Design Power Batch 2027 (Price: Rs. 4999 | Rs. 0 0% OFF)", "DESIGN PRO 2027 (Price: Rs. 13499 | Rs. 26999 50% OFF)", "Design Iconic 3.0 2027 (Price: Rs. 7999 | Rs. 16999 53% OFF)", "Design Iconic 2.0 2027 (Price: Rs. 8999 | Rs. 18999 53% OFF)", "DESIGN ICONIC 2027 (Price: Rs. 9999 | Rs. 20999 52% OFF)"])
    .setRequired(true);
  mlQuestion_9.setChoices([
    mlQuestion_9.createChoice('ONLINE Mode - Hinglish Language', coursePage_9_0)
  ]);

  // Combinations for: College Entrance Exams ( UG & PG ) - Architecture - NATA, JEE Paper 2
  var coursePage_10_0 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - Architecture - NATA, JEE Paper 2 | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Architecture Pro 2027 (Price: Rs. 10999 | Rs. 24999 56% OFF)", "Architecture Creators 2.0 2027 (Price: Rs. 6999 | Rs. 13999 50% OFF)", "Architecture Creators 2027 (Price: Rs. 7999 | Rs. 19999 60% OFF)"])
    .setRequired(true);
  mlQuestion_10.setChoices([
    mlQuestion_10.createChoice('ONLINE Mode - Hinglish Language', coursePage_10_0)
  ]);

  // Combinations for: College Entrance Exams ( UG & PG ) - CAT
  var coursePage_11_0 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - CAT | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["MBA IGNITE 2026 (CAT + OMETs) (ENGLISH) (Price: Rs. 7499 | Rs. 14999 50% OFF)", "MBA PIONEER 2026 (CAT + OMETs) (ENGLISH) (Price: Rs. 7999 | Rs. 14999 47% OFF)"])
    .setRequired(true);
  var coursePage_11_1 = form.addPageBreakItem().setTitle('College Entrance Exams ( UG & PG ) - CAT | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["MBA IGNITE 2026 (CAT + OMETs) (Price: Rs. 7499 | Rs. 14999 50% OFF)", "MBA ELITE WEEKEND 2026 (CAT + OMETs) (Price: Rs. 7999 | Rs. 14999 47% OFF)", "MBA Pro 2026 (CAT + OMETs) (Price: Rs. 11999 | Rs. 27999 57% OFF)", "MBA ELITE 2026 (CAT + OMETs) (Price: Rs. 7999 | Rs. 14999 47% OFF)", "MBA PIONEER 2026 (CAT + OMETs) (Price: Rs. 7999 | Rs. 15999 50% OFF)", "MBA Core 2026 (Foundation + CAT & OMETs) (Price: Rs. 8999 | Rs. 15999 44% OFF)"])
    .setRequired(true);
  mlQuestion_11.setChoices([
    mlQuestion_11.createChoice('ONLINE Mode - English Language', coursePage_11_0),
    mlQuestion_11.createChoice('ONLINE Mode - Hinglish Language', coursePage_11_1)
  ]);

  // Combinations for: All Government Job Exams - SSC
  var coursePage_12_0 = form.addPageBreakItem().setTitle('All Government Job Exams - SSC | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Surya 3.0 SSC CGL Target 2026 (Price: Rs. 999 | Rs. 1699 41% OFF)", "SSC CGL Mahapack (Price: Rs. 2199 | Rs. 3499 37% OFF)", "SAFAR 3.0 SSC CGL | CHSL 2027 with English Books (Price: Rs. 2249 | Rs. 3499 36% OFF)", "SSC Mahapack Pro (Price: Rs. 2999 | Rs. 6249 52% OFF)", "Kamyabi 3.0 SSC CHSL Target 2026 (Price: Rs. 1249 | Rs. 1999 38% OFF)", "Surya 2.0 SSC CGL Target 2026 (Price: Rs. 999 | Rs. 1699 41% OFF)", "SSC CHSL Mahapack (Price: Rs. 1999 | Rs. 2999 33% OFF)", "SAFAR 3.0 SSC CGL | CHSL 2027 with Hindi Books (Price: Rs. 2249 | Rs. 3499 36% OFF)", "Akshay SSC Stenographer 2026 (Price: Rs. 999 | Rs. 2499 60% OFF)", "Vishwas SSC GD 2027 (Price: Rs. 599 | Rs. 999 40% OFF)", "Karmath SSC MTS/Havaldar 2026 (Price: Rs. 599 | Rs. 999 40% OFF)", "Yogdaan SSC CPO Target 2026 (Price: Rs. 1499 | Rs. 1999 25% OFF)", "SSC & Railway Mahapack Pro (Price: Rs. 3499 | Rs. 11499 70% OFF)", "Aagaaz SSC Selection Post Phase XIV (Price: Rs. 999 | Rs. 2499 60% OFF)", "SSC GD MTS Mahapack (Price: Rs. 899 | Rs. 2499 64% OFF)", "SSC MTS/Havaldar 2026 Video Course (Price: Rs. 499 | Rs. 999 50% OFF)", "SSC GD Constable Complete Video Course 2026-27 (Price: Rs. 499 | Rs. 999 50% OFF)", "Maths Special Recorded Batch (Arithmetic and Advance) (Price: Rs. 599 | Rs. 1499 60% OFF)", "English Special Recorded Batch (Grammar + Vocab) (Price: Rs. 499 | Rs. 1249 60% OFF)", "Reasoning Special Recorded Batch for All SSC Exams (Price: Rs. 499 | Rs. 1249 60% OFF)"])
    .setRequired(true);
  mlQuestion_12.setChoices([
    mlQuestion_12.createChoice('ONLINE Mode - Hinglish Language', coursePage_12_0)
  ]);

  // Combinations for: All Government Job Exams - Defence
  var coursePage_13_0 = form.addPageBreakItem().setTitle('All Government Job Exams - Defence | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Mission NDA 100 (Price: Rs. 2499 | Rs. 3999 38% OFF)", "Mission CDS 100 (Price: Rs. 2499 | Rs. 4499 44% OFF)", "Mission CDS OTA 100 (Price: Rs. 2199 | Rs. 3499 37% OFF)", "UDAY NDA FOUNDATION 2027 (Price: Rs. 5599 | Rs. 6999 20% OFF)", "CAPF RAKSHAK 2027 (Price: Rs. 7999 | Rs. 9999 20% OFF)", "NDA (II) Shaurya 2.0 2026 (Price: Rs. 3299 | Rs. 4299 23% OFF)", "CDS (II) VIRAAT 2.0 2026 (Price: Rs. 3799 | Rs. 4799 21% OFF)", "CDS (II) OTA VIRAAT 2.0 2026 (Price: Rs. 2799 | Rs. 3799 26% OFF)", "UDAY NDA Foundation 2.0 2027 (Price: Rs. 5299 | Rs. 6999 24% OFF)", "CDS Foundation 2027 (Price: Rs. 6599 | Rs. 7599 13% OFF)", "AFCAT (II) Garud 2.0 2026 (Price: Rs. 1999 | Rs. 2999 33% OFF)", "Territorial Army Yakeen 2026 (Price: Rs. 1099 | Rs. 1999 45% OFF)", "Paramveer Mahapack 2027 (Price: Rs. 2299 | Rs. 3499 34% OFF)", "Airforce Vayu Combo 2027 (Price: Rs. 999 | Rs. 1499 33% OFF)"])
    .setRequired(true);
  var coursePage_13_1 = form.addPageBreakItem().setTitle('All Government Job Exams - Defence | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["NDA (II) Foundation Offline 2027 (Price: Rs. 5000 | Rs. 10000 0% OFF)", "NDA (I) 12th Foundation Offline 2027 (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_13_2 = form.addPageBreakItem().setTitle('All Government Job Exams - Defence | OFFLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Super 30 NDA (II) Offline 2026 (Price: Rs. 10000 | Rs. 0 0% OFF)", "NDA (II) Shaurya Offline 2026 (Price: Rs. 5000 | Rs. 0 0% OFF)", "CDS (II) Viraat Offline 2026 (Price: Rs. 5000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_13_3 = form.addPageBreakItem().setTitle('All Government Job Exams - Defence | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Spoken English By Neha Ma\\'am (Price: Rs. 499 | Rs. 999 50% OFF)"])
    .setRequired(true);
  mlQuestion_13.setChoices([
    mlQuestion_13.createChoice('ONLINE Mode - Hinglish Language', coursePage_13_0),
    mlQuestion_13.createChoice('OFFLINE Mode - Hinglish Language', coursePage_13_1),
    mlQuestion_13.createChoice('OFFLINE Mode - English Language', coursePage_13_2),
    mlQuestion_13.createChoice('ONLINE Mode - English Language', coursePage_13_3)
  ]);

  // Combinations for: All Government Job Exams - UPSC
  var coursePage_14_0 = form.addPageBreakItem().setTitle('All Government Job Exams - UPSC | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["UPSC PRARAMBH 2029 (Price: Rs. 32999 | Rs. 48999 33% OFF)", "Sankalp 2.0 Hinglish 2028 (Price: Rs. 13999 | Rs. 21999 36% OFF)", "Prahar 3.0 Hinglish 2027 (Price: Rs. 11999 | Rs. 18999 37% OFF)", "UPSC Optional 2027 - Sociology (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - PSIR (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Anthropology (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Mathematics (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Pub. AD. (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - History (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Geography (Hinglish) (Price: Rs. 12999 | Rs. 19999 35% OFF)"])
    .setRequired(true);
  var coursePage_14_1 = form.addPageBreakItem().setTitle('All Government Job Exams - UPSC | ONLINE (Hindi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["UPSC Prarambh 2029 - हिन्दी (Price: Rs. 32999 | Rs. 48999 33% OFF)", "Prahar 3.0 Hindi 2027 (Price: Rs. 11999 | Rs. 18999 37% OFF)", "Sankalp 2.0 Hindi 2028 (Price: Rs. 13999 | Rs. 21999 36% OFF)", "UPSC Optional 2027 - Sociology (हिन्दी) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - PSIR (हिन्दी) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - History (हिन्दी) (Price: Rs. 12999 | Rs. 19999 35% OFF)", "UPSC Optional 2027 - Hindi Literature (हिन्दी) (Price: Rs. 12999 | Rs. 19999 35% OFF)"])
    .setRequired(true);
  var coursePage_14_2 = form.addPageBreakItem().setTitle('All Government Job Exams - UPSC | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["UPSC PRARAMBH 2029 - English (Price: Rs. 32999 | Rs. 48999 33% OFF)", "Pinnacle 2.0 2028 (English) (Price: Rs. 13999 | Rs. 21999 36% OFF)", "Titan 3.0 2027 (English) (Price: Rs. 11999 | Rs. 18999 37% OFF)"])
    .setRequired(true);
  mlQuestion_14.setChoices([
    mlQuestion_14.createChoice('ONLINE Mode - Hinglish Language', coursePage_14_0),
    mlQuestion_14.createChoice('ONLINE Mode - Hindi Language', coursePage_14_1),
    mlQuestion_14.createChoice('ONLINE Mode - English Language', coursePage_14_2)
  ]);

  // Combinations for: All Government Job Exams - Agriculture
  var coursePage_15_0 = form.addPageBreakItem().setTitle('All Government Job Exams - Agriculture | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Agriculture Mahapack (Price: Rs. 4499 | Rs. 9999 55% OFF)", "IBPS AFO 2026 Prelims Crash Course (Price: Rs. 999 | Rs. 1599 37% OFF)", "ASRB NET 2026 Agronomy fast track Batch (Price: Rs. 2499 | Rs. 3999 37% OFF)", "CUET PG Agriculture Science Batch 2027 (Price: Rs. 2999 | Rs. 4999 40% OFF)", "IBPS AFO 2026 Target Batch (Price: Rs. 2999 | Rs. 5998 50% OFF)", "UPSSSC AGTA 2026 (Price: Rs. 1499 | Rs. 2998 50% OFF)", "NABARD Grade A 2026 Batch C (Price: Rs. 3499 | Rs. 6998 50% OFF)", "ASRB NET 2026 - Plant Pathology Batch (Price: Rs. 2999 | Rs. 5999 50% OFF)", "B.SC Agriculture course Semester -1 (Price: Rs. 999 | Rs. 1998 50% OFF)", "B.SC Agriculture course Semester -3 (Price: Rs. 1299 | Rs. 2597 49% OFF)", "B.SC Agriculture course Semester -5 (Price: Rs. 1499 | Rs. 2998 50% OFF)", "BIHAR - PLANT PROTECTION ( SUPERVISOR & INSPECTOR 2026) (Price: Rs. 2199 | Rs. 4399 50% OFF)", "Vidya Foundation Batch For Agriculture Govt. Exams (Price: Rs. 3499 | Rs. 6999 50% OFF)", "MPESB RAEO/RHEO 2026 Batch (Price: Rs. 2499 | Rs. 4999 50% OFF)", "MPPSC ADA 2026 Foundation Batch (Price: Rs. 1999 | Rs. 3999 50% OFF)"])
    .setRequired(true);
  mlQuestion_15.setChoices([
    mlQuestion_15.createChoice('ONLINE Mode - Hinglish Language', coursePage_15_0)
  ]);

  // Combinations for: All Government Job Exams - Judiciary
  var coursePage_16_0 = form.addPageBreakItem().setTitle('All Government Job Exams - Judiciary | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["NAV NEETI 3.0 JUDICIARY FOUNDATION BATCH (Price: Rs. 24999 | Rs. 50000 50% OFF)", "ABHIYOJAN 3.0 APO/APP/ADPO FOUNDATION BATCH 2026 - 2029 (Price: Rs. 10998 | Rs. 20000 45% OFF)", "RAJASTHAN APO 2026 (Prelims + Mains) Batch (Price: Rs. 7499 | Rs. 13999 46% OFF)", "PW COMPLETE ADVOCACY PROGRAM (Price: Rs. 17999 | Rs. 29999 40% OFF)", "TARGET CBI APP + DELHI APP 2026 BATCH (Price: Rs. 3999 | Rs. 5999 33% OFF)", "PW Legal Drafting Certification Program 2026 (Price: Rs. 5999 | Rs. 10997 45% OFF)", "HARYANA ADA MAINS SUCCESS BATCH (Price: Rs. 4999 | Rs. 8999 44% OFF)", "Target SBI SO + IBPS SO LAW OFFICER BATCH 2026 (Price: Rs. 4999 | Rs. 7999 38% OFF)", "IBPS SO LAW OFFICER 2.0 BATCH 2026 (Price: Rs. 2999 | Rs. 4999 40% OFF)", "VAKALAT AIBE 22 FOUNDATION BATCH 2026 (Price: Rs. 1499 | Rs. 2499 40% OFF)", "PW ADVANCED CRIMINAL LITIGATION & LEGAL DRAFTING PROGRAM 2026 (Price: Rs. 12999 | Rs. 24999 48% OFF)", "PW ADVANCED CIVIL LITIGATION & LEGAL DRAFTING PROGRAM 2026 (Price: Rs. 12999 | Rs. 24999 48% OFF)", "PROSECUTOR’S HARYANA ADA 2026 PRELIMS BATCH (Price: Rs. 2999 | Rs. 10999 73% OFF)", "PROSECUTOR’S PUNJAB ADA 2026 PRELIMS BATCH (Price: Rs. 4999 | Rs. 10999 55% OFF)", "RAJASTHAN APO 2026 PRELIMS BATCH (Price: Rs. 4999 | Rs. 8999 44% OFF)", "IBPS SO LAW OFFICER BATCH 2026 (Price: Rs. 2999 | Rs. 9999 70% OFF)", "UP APO MAINS SUCCESS BATCH (Price: Rs. 3999 | Rs. 10999 63% OFF)"])
    .setRequired(true);
  var coursePage_16_1 = form.addPageBreakItem().setTitle('All Government Job Exams - Judiciary | ONLINE (Punjabi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["PUNJAB GK+PUNJABI LANGUAGE RECORDED COURSES (Price: Rs. 1499 | Rs. 2599 42% OFF)"])
    .setRequired(true);
  var coursePage_16_2 = form.addPageBreakItem().setTitle('All Government Job Exams - Judiciary | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["PW VAKIL TOOLKIT (Price: Rs. 499 | Rs. 899 44% OFF)", "BIHAR APO PRELIMS BOOSTER BATCH (Price: Rs. 1999 | Rs. 5999 66% OFF)"])
    .setRequired(true);
  mlQuestion_16.setChoices([
    mlQuestion_16.createChoice('ONLINE Mode - Hinglish Language', coursePage_16_0),
    mlQuestion_16.createChoice('ONLINE Mode - Punjabi Language', coursePage_16_1),
    mlQuestion_16.createChoice('ONLINE Mode - Bilingual Language', coursePage_16_2)
  ]);

  // Combinations for: All Government Job Exams - Teaching
  var coursePage_17_0 = form.addPageBreakItem().setTitle('All Government Job Exams - Teaching | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Teaching Mahapack (Price: Rs. 2499 | Rs. 12999 81% OFF)", "CTET PREMIUM INFINITY 2.0 SEP 2026 PAPER 1 (Price: Rs. 1299 | Rs. 3499 63% OFF)", "CTET PREMIUM INFINITY 2.0 SEP 2026 PAPER 2 MATH & SCIENCE (Price: Rs. 1499 | Rs. 3999 63% OFF)", "CTET PREMIUM COMBO 3.0 SEP 2026 PAPER 1 & PAPER 2 MATH & SCIENCE (Price: Rs. 1249 | Rs. 3339 63% OFF)", "CTET PREMIUM COMBO 3.0 SEP 2026 PAPER 1 & PAPER 2 SST (Price: Rs. 1249 | Rs. 3339 63% OFF)", "CTET PREMIUM 3.0 SEP 2026 PAPER 1 (Price: Rs. 749 | Rs. 1999 63% OFF)", "CTET PREMIUM 3.0 SEP 2026 PAPER 2 MATH & SCIENCE (Price: Rs. 949 | Rs. 2599 63% OFF)", "CTET PREMIUM 3.0 SEP 2026 PAPER 2 SST (Price: Rs. 949 | Rs. 2599 63% OFF)", "CTET PREMIUM INFINITY 3.0 SEP 2026 PAPER 1 (Price: Rs. 1299 | Rs. 3499 63% OFF)", "CTET PREMIUM INFINITY 3.0 SEP 2026 PAPER 2 MATH & SCIENCE (Price: Rs. 1499 | Rs. 3999 63% OFF)", "CTET PREMIUM INFINITY 3.0 SEP 2026 PAPER 2 SST (Price: Rs. 1499 | Rs. 3999 63% OFF)", "CTET PREMIUM COMBO INFINITY 3.0 SEP 2026 PAPER 1 & PAPER 2 SST (Price: Rs. 1799 | Rs. 4799 63% OFF)", "CTET PREMIUM COMBO INFINITY 3.0 SEP 2026 PAPER 1 & PAPER 2 MATH & SCIENCE (Price: Rs. 1799 | Rs. 4799 63% OFF)", "CTET PREMIUM INFINITY 2.0 PAPER 2 SST SEP 2026 (Price: Rs. 1499 | Rs. 3999 63% OFF)", "UPTET Revision+Practice Batch 2026 Paper 1 & Paper 2 (Price: Rs. 499 | Rs. 999 50% OFF)", "DSSSB TGT Computer Science 2026 (Price: Rs. 1599 | Rs. 4799 67% OFF)", "CTET PREMIUM COMBO INFINTY 2.0 SEP 2026 (Paper 1 & Paper 2 Maths & Science) (Price: Rs. 1799 | Rs. 4799 63% OFF)", "CTET PREMIUM COMBO INFINITY 2.0 SEP 2026 (Paper 1 & Paper 2 SST) (Price: Rs. 1799 | Rs. 4799 63% OFF)", "CTET PREMIUM 2.0 SEP 2026 PAPER 1 (Price: Rs. 749 | Rs. 1999 63% OFF)", "CTET PREMIUM 2.0 PAPER 2 MATH & SCIENCE SEP 2026 (Price: Rs. 949 | Rs. 2599 63% OFF)"])
    .setRequired(true);
  mlQuestion_17.setChoices([
    mlQuestion_17.createChoice('ONLINE Mode - Hinglish Language', coursePage_17_0)
  ]);

  // Combinations for: All Government Job Exams - Railway
  var coursePage_18_0 = form.addPageBreakItem().setTitle('All Government Job Exams - Railway | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Mission RRB Technician Grade III CEN 2/2026 (Price: Rs. 799 | Rs. 1199 33% OFF)", "Mission RRB Technician Gr I Signal CEN 2/2026 (Price: Rs. 899 | Rs. 1499 40% OFF)", "Mission RRB ALP CEN 1/ 2026 CBT 1 + CBT 2 (Price: Rs. 999 | Rs. 1499 33% OFF)", "RRB Section Controller CEN 3/2026 (Price: Rs. 999 | Rs. 1499 33% OFF)", "Railway Mahapack Pro (Price: Rs. 1499 | Rs. 3499 57% OFF)", "Humsafar Express 4.0 Railway 2026-27 (Price: Rs. 1199 | Rs. 1799 33% OFF)", "RRB Technician Grade III 2026 (Price: Rs. 799 | Rs. 1199 33% OFF)", "RRB Technician Gr I Signal (Price: Rs. 899 | Rs. 1499 40% OFF)", "Mission RRB ALP 2026 CBT 1 + CBT 2 (Price: Rs. 999 | Rs. 1499 33% OFF)", "Tejas RRB NTPC 2026-27 (Price: Rs. 999 | Rs. 1499 33% OFF)", "Humsafar Express 3.0 Railway 2026-27 (Price: Rs. 1199 | Rs. 1799 33% OFF)", "Rajdhani 2.0 Railway Group D Level 1 (Price: Rs. 499 | Rs. 749 33% OFF)", "RRB Technician Gr I Signal Video Course 2026 (Price: Rs. 699 | Rs. 1999 65% OFF)", "RRB Technician Gr III Video Course (Price: Rs. 449 | Rs. 1499 70% OFF)", "Brahmastra NTPC Graduate | Under Graduate Video Course (Price: Rs. 499 | Rs. 1999 75% OFF)", "SSC & Railway Mahapack Pro (Price: Rs. 3499 | Rs. 11499 70% OFF)"])
    .setRequired(true);
  mlQuestion_18.setChoices([
    mlQuestion_18.createChoice('ONLINE Mode - Hinglish Language', coursePage_18_0)
  ]);

  // Combinations for: CA, CS, Banking & Finance Courses - JAIIB & CAIIB
  var coursePage_19_0 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - JAIIB & CAIIB | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["JAIIB Mahapack (Price: Rs. 2799 | Rs. 6000 53% OFF)", "CAIIB Mahapack (Price: Rs. 3499 | Rs. 8000 56% OFF)", "JAIIB AND CAIIB Mahapack (Price: Rs. 4499 | Rs. 11000 59% OFF)", "Officers JAIIB Foundation 2.0 Batch for Nov 2026 (Price: Rs. 2299 | Rs. 4199 45% OFF)", "Goal CAIIB 2.0 Foundation Batch For Dec 2026 (Price: Rs. 2799 | Rs. 4999 44% OFF)", "Goal CAIIB Foundation Batch For Dec 2026 (Price: Rs. 2799 | Rs. 5599 50% OFF)", "Officers JAIIB Foundation Batch for Nov 2026 (Price: Rs. 2299 | Rs. 4599 50% OFF)", "JAIIB Batch for IE & IFS Nov 2026 (Price: Rs. 999 | Rs. 1999 50% OFF)", "JAIIB Batch for PPB Nov 2026 (Price: Rs. 999 | Rs. 1998 50% OFF)", "CAIIB BRBL Foundation Course Dec 2026 (Price: Rs. 999 | Rs. 1999 50% OFF)", "JAIIB Batch for RBWM Nov 2026 (Price: Rs. 998 | Rs. 1998 50% OFF)", "CAIIB ABFM Foundation Course Dec 2026 (Price: Rs. 999 | Rs. 1999 50% OFF)", "CAIIB ABM Foundation Course Dec 2026 (Price: Rs. 999 | Rs. 1998 50% OFF)", "Samarth 2.0 RBI Grade-B Foundation Batch 2026 (Phase 1 & 2) (Price: Rs. 2299 | Rs. 4999 54% OFF)", "Samarth RBI Grade-B Foundation Batch 2026 (Phase 1 & 2) (Price: Rs. 2299 | Rs. 4999 54% OFF)", "RBI Notes Prime – ESI & FM 2025 (Price: Rs. 499 | Rs. 999 50% OFF)", "CAIIB CENTRAL BANKING (VIDEO COURSE) (Price: Rs. 999 | Rs. 1999 50% OFF)", "CAIIB Human Resource Management (Video Course) (Price: Rs. 999 | Rs. 1999 50% OFF)", "CAIIB RURAL BANKING Complete Course (Price: Rs. 799 | Rs. 3999 80% OFF)", "CAIIB Risk Management Complete Course (Price: Rs. 799 | Rs. 3999 80% OFF)"])
    .setRequired(true);
  mlQuestion_19.setChoices([
    mlQuestion_19.createChoice('ONLINE Mode - Hinglish Language', coursePage_19_0)
  ]);

  // Combinations for: CA, CS, Banking & Finance Courses - CFA
  var coursePage_20_0 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - CFA | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Fin-X CFA Level 1 Pro Batch (Feb/May 27) (Price: Rs. 13999 | Rs. 27000 48% OFF)", "Fin-X CFA Level 1 Batch (Feb/ May 27) (Price: Rs. 11999 | Rs. 22000 45% OFF)", "Fin-X CFA Level 1 Pro Batch (Nov 26/Feb 27) (Price: Rs. 14999 | Rs. 35000 57% OFF)", "Fin-X CFA Level 1 (4.0) Batch (Nov 26/ Feb 27) (Price: Rs. 12999 | Rs. 22000 41% OFF)", "CFA Level 1 – Fastrack Batch (Recorded) (Price: Rs. 4999 | Rs. 15000 66% OFF)", "Fin-X CFA Level 1 (3.0) Batch (Nov 26/ Feb 27) (Price: Rs. 12999 | Rs. 30000 57% OFF)", "Fin-X CFA Level-1 2.0 Batch (Nov 26/Feb 27) (Price: Rs. 12999 | Rs. 30000 57% OFF)", "Fin-X CFA Level 1 Batch (Aug/Nov 26) (Price: Rs. 12999 | Rs. 30000 57% OFF)"])
    .setRequired(true);
  mlQuestion_20.setChoices([
    mlQuestion_20.createChoice('ONLINE Mode - Hinglish Language', coursePage_20_0)
  ]);

  // Combinations for: CA, CS, Banking & Finance Courses - Government Bank Exams
  var coursePage_21_0 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Government Bank Exams | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Bank Mahapack (Price: Rs. 2999 | Rs. 4999 40% OFF)", "Bank SSC Mahapack (Price: Rs. 4299 | Rs. 11499 63% OFF)", "AIM Prime Foundation Batch for All Banking Exams (Price: Rs. 2499 | Rs. 3999 38% OFF)", "Ultimate SBI PO/Clerk Selection Batch 2026 (Price: Rs. 1799 | Rs. 3499 49% OFF)", "Ved Prime Batch for All Banking Exams 2026-27 (Price: Rs. 2599 | Rs. 4499 42% OFF)", "AIM Clerk Foundation for IBPS/SBI Clerk Exams (Price: Rs. 1999 | Rs. 3599 44% OFF)", "Rudra Prime Batch for Bank PO/Clerk exams (Price: Rs. 2599 | Rs. 7999 68% OFF)", "Rudra 2.0 Bank PO Foundation 2026 (Price: Rs. 2499 | Rs. 4999 50% OFF)", "Aim 2.0 Bank Clerk Foundation (Price: Rs. 1999 | Rs. 3999 50% OFF)", "Aim Bank Clerk Foundation (Price: Rs. 1999 | Rs. 3999 50% OFF)", "Rudra Bank PO Foundation 2026 (Price: Rs. 2499 | Rs. 4999 50% OFF)", "Fluent English 2026 Batch for Bank Exams (Price: Rs. 999 | Rs. 4999 80% OFF)", "VISTAAR QUANT 2026 Foundation Batch for Bank Exams (Price: Rs. 999 | Rs. 4999 80% OFF)", "Anant Reasoning 2026 Pre+Mains Batch for Bank Exams (Price: Rs. 999 | Rs. 4999 80% OFF)", "RBI Foundation 2.0 Batch 2026 (Price: Rs. 2499 | Rs. 4999 50% OFF)", "Ved 2026: Banking Zero to Hero Batch (Price: Rs. 1799 | Rs. 4999 64% OFF)", "SBI Apprentice Batch (Recorded) (Price: Rs. 999 | Rs. 1799 44% OFF)", "Rudra 2026: Banking Zero to Hero Batch (Price: Rs. 1799 | Rs. 4999 64% OFF)", "Ultimate SBI/IBPS PO Pre+Mains Batch 2026 (Price: Rs. 2299 | Rs. 4999 54% OFF)", "Crack SBI/IBPS Clerk Pre+Mains Batch 2026 (Price: Rs. 2299 | Rs. 4999 54% OFF)"])
    .setRequired(true);
  mlQuestion_21.setChoices([
    mlQuestion_21.createChoice('ONLINE Mode - Hinglish Language', coursePage_21_0)
  ]);

  // Combinations for: CA, CS, Banking & Finance Courses - Certifications - Banking
  var coursePage_22_0 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Certifications - Banking | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Certification program  in Banking, Financial Services & Insurance (Price: Rs. 29999 | Rs. 49999 40% OFF)", "ITR Filing Course: ITR 1 to ITR 4 — Step by Step (Price: Rs. 999 | Rs. 1999 50% OFF)", "Stock Market For Beginners (Price: Rs. 2500 | Rs. 4000 37% OFF)", "NISM Series V-A & V-B - Mutual Fund Foundation (Price: Rs. 1499 | Rs. 3000 50% OFF)"])
    .setRequired(true);
  var coursePage_22_1 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Certifications - Banking | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["NISM Series XII - Securities Markets Foundation (Price: Rs. 1499 | Rs. 3000 50% OFF)"])
    .setRequired(true);
  mlQuestion_22.setChoices([
    mlQuestion_22.createChoice('ONLINE Mode - Hinglish Language', coursePage_22_0),
    mlQuestion_22.createChoice('ONLINE Mode - Bilingual Language', coursePage_22_1)
  ]);

  // Combinations for: CA, CS, Banking & Finance Courses - Finance Certification
  var coursePage_23_0 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Finance Certification | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Finance, Tax and Accounting Course - (Batch-19) Pre (Price: Rs. 29999 | Rs. 39999 25% OFF)", "Finance, Tax and Accounting Course - (Batch-19) Pro (Price: Rs. 34999 | Rs. 49999 30% OFF)", "ITR Filing Course: ITR 1 to ITR 4 — Step by Step (Price: Rs. 999 | Rs. 1999 50% OFF)", "AI in Finance (Price: Rs. 1499 | Rs. 2999 50% OFF)"])
    .setRequired(true);
  var coursePage_23_1 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Finance Certification | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Financial Modeling with AI (Price: Rs. 16999 | Rs. 34999 51% OFF)"])
    .setRequired(true);
  var coursePage_23_2 = form.addPageBreakItem().setTitle('CA, CS, Banking & Finance Courses - Finance Certification | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["TallyPrime Basic with GST Essentials (Tally Certification) (Price: Rs. 1500 | Rs. 2999 49% OFF)", "TallyPrime Advance with GST Accounting (Tally Certification) (Price: Rs. 2200 | Rs. 4500 51% OFF)"])
    .setRequired(true);
  mlQuestion_23.setChoices([
    mlQuestion_23.createChoice('ONLINE Mode - Hinglish Language', coursePage_23_0),
    mlQuestion_23.createChoice('OFFLINE Mode - Hinglish Language', coursePage_23_1),
    mlQuestion_23.createChoice('ONLINE Mode - English Language', coursePage_23_2)
  ]);

  // Combinations for: NET Exams & Teacher Training - UGC NET
  var coursePage_24_0 = form.addPageBreakItem().setTitle('NET Exams & Teacher Training - UGC NET | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Mission JRF Pro Dec 2026: Paper 1 (Price: Rs. 3799 | Rs. 7500 49% OFF)", "Mission JRF Pro Dec 2026: Commerce + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: Computer + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: Economics + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: Education + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: English Literature + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: Environmental Sciences + Paper 1 (Price: Rs. 6299 | Rs. 13000 52% OFF)", "Mission JRF Pro Dec 2026: Geography + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: Hindi Literature + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: History + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: Law + Paper 1 (Price: Rs. 6299 | Rs. 13000 52% OFF)", "Mission JRF Pro Dec 2026: Management + Paper 1 (Price: Rs. 6299 | Rs. 13000 52% OFF)", "Mission JRF Pro Dec 2026: Political Science + Paper 1 (Price: Rs. 6799 | Rs. 13000 48% OFF)", "Mission JRF Pro Dec 2026: Sociology + Paper 1 (Price: Rs. 6299 | Rs. 13000 52% OFF)", "Mission JRF 1.0 Dec 2026: Paper 1 (Price: Rs. 2499 | Rs. 5000 50% OFF)", "Mission JRF 1.0 Dec 2026: Commerce + Paper 1 (Price: Rs. 5299 | Rs. 10000 47% OFF)", "Mission JRF 1.0 Dec 2026: Computer + Paper 1 (Price: Rs. 5299 | Rs. 10000 47% OFF)", "Mission JRF 1.0 Dec 2026: Economics + Paper 1 (Price: Rs. 5299 | Rs. 10000 47% OFF)", "Mission JRF 1.0 Dec 2026: Education + Paper 1 (Price: Rs. 5299 | Rs. 10000 47% OFF)", "Mission JRF 1.0 Dec 2026: English Literature + Paper 1 (Price: Rs. 5299 | Rs. 10000 47% OFF)"])
    .setRequired(true);
  mlQuestion_24.setChoices([
    mlQuestion_24.createChoice('ONLINE Mode - Hinglish Language', coursePage_24_0)
  ]);

  // Combinations for: NET Exams & Teacher Training - CSIR NET
  var coursePage_25_0 = form.addPageBreakItem().setTitle('NET Exams & Teacher Training - CSIR NET | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Shodh Pro June 2027 Life Sciences (Price: Rs. 7499 | Rs. 9999 25% OFF)", "Shodh Pro June 2027 Mathematical Sciences (Price: Rs. 7499 | Rs. 9999 25% OFF)", "Shodh Pro June 2027 Chemical Sciences (Price: Rs. 7499 | Rs. 9999 25% OFF)", "Shodh Dec 2026 Life Sciences (Price: Rs. 4999 | Rs. 6999 28% OFF)", "Shodh Pro June 2027 Physical Sciences (Price: Rs. 7499 | Rs. 9999 25% OFF)", "Shodh Dec 2026 Chemical Sciences (Price: Rs. 4999 | Rs. 6999 28% OFF)", "Shodh Dec 2026 Mathematical Sciences (Price: Rs. 4999 | Rs. 6999 28% OFF)", "Shodh Dec 2026 Physical Sciences (Price: Rs. 4999 | Rs. 6999 28% OFF)", "Shodh Foundation Dec 2026 Life Sciences (Price: Rs. 4999 | Rs. 6999 29% OFF)", "Shodh Foundation Dec 2026 Mathematical Sciences (Price: Rs. 4999 | Rs. 6999 29% OFF)", "Shodh Foundation Dec 2026 Chemical Sciences (Price: Rs. 4999 | Rs. 6999 29% OFF)", "Shodh Foundation Dec 2026 Physical Sciences (Price: Rs. 4999 | Rs. 6999 29% OFF)", "Shodh Fastrack June 2.0 2026 Chemical Sciences (Price: Rs. 1999 | Rs. 2499 20% OFF)", "Shodh Fastrack June 2.0 2026 Life Sciences (Price: Rs. 1999 | Rs. 2499 20% OFF)", "Shodh Fastrack June 2.0 2026 Physical Sciences (Price: Rs. 1999 | Rs. 2499 20% OFF)", "Shodh Fastrack June 2.0 2026 Mathematical Sciences (Price: Rs. 1999 | Rs. 2499 20% OFF)", "Shodh June 2.0 2026 General Aptitude (Price: Rs. 349 | Rs. 499 30% OFF)"])
    .setRequired(true);
  mlQuestion_25.setChoices([
    mlQuestion_25.createChoice('ONLINE Mode - Hinglish Language', coursePage_25_0)
  ]);

  // Combinations for: Earners ( Upskilling ) - PC Courses
  var coursePage_26_0 = form.addPageBreakItem().setTitle('Earners ( Upskilling ) - PC Courses | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Video Editing with AI - Earners (Price: Rs. 2800 | Rs. 10000 72% OFF)", "Data Analytics with AI - Earners (Price: Rs. 2800 | Rs. 10000 72% OFF)", "⁠All PC Courses (Combo) - Earners (Price: Rs. 3999 | Rs. 20000 80% OFF)", "Coding & Web Development - Earners (Price: Rs. 2800 | Rs. 10000 72% OFF)", "DSA in C++ - Earners (Price: Rs. 2800 | Rs. 10000 72% OFF)", "AI & Machine Learning - Earners (Price: Rs. 2800 | Rs. 10000 72% OFF)", "⁠Graphic Design with AI - Earners (Price: Rs. 2800 | Rs. 10000 72% OFF)"])
    .setRequired(true);
  mlQuestion_26.setChoices([
    mlQuestion_26.createChoice('ONLINE Mode - Hinglish Language', coursePage_26_0)
  ]);

  // Combinations for: Earners ( Upskilling ) - Mobile Courses
  var coursePage_27_0 = form.addPageBreakItem().setTitle('Earners ( Upskilling ) - Mobile Courses | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Mobile Video Editing - Earners (Price: Rs. 800 | Rs. 1500 47% OFF)", "All Mobile Courses (Combo)- Earners (Price: Rs. 1300 | Rs. 7500 83% OFF)", "AI & ChatGPT - Earners (Price: Rs. 800 | Rs. 1500 47% OFF)", "YouTube Content Creation – Earners (Price: Rs. 800 | Rs. 1500 47% OFF)", "Instagram & Social Media – Earners (Price: Rs. 800 | Rs. 1500 47% OFF)", "Mobile Graphic Designing – Earners (Price: Rs. 800 | Rs. 1500 47% OFF)"])
    .setRequired(true);
  mlQuestion_27.setChoices([
    mlQuestion_27.createChoice('ONLINE Mode - Hinglish Language', coursePage_27_0)
  ]);

  // Combinations for: Spoken English
  var coursePage_28_0 = form.addPageBreakItem().setTitle('Spoken English | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Spoken English by PW Talk 12 Months (Price: Rs. 1199 | Rs. 3599 67% OFF)", "Spoken English by PW Talk 6 Months (Price: Rs. 799 | Rs. 1799 56% OFF)", "Spoken English by PW Talk 3 Months (Price: Rs. 699 | Rs. 899 22% OFF)", "Spoken English by PW Talk (Price: Rs. 699 | Rs. 899 22% OFF)"])
    .setRequired(true);
  mlQuestion_28.setChoices([
    mlQuestion_28.createChoice('ONLINE Mode - Hinglish Language', coursePage_28_0)
  ]);

  // Combinations for: Gyaan-E (Short-Courses)
  var coursePage_29_0 = form.addPageBreakItem().setTitle('Gyaan-E (Short-Courses) | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["PW Gyaan-E Master AI + Excel Course (Price: Rs. 499 | Rs. 999 50% OFF)", "PW Gyaan-E Go Viral (Price: Rs. 499 | Rs. 999 50% OFF)", "PW Gyaan-E Get Job Ready (Price: Rs. 499 | Rs. 999 50% OFF)"])
    .setRequired(true);
  mlQuestion_29.setChoices([
    mlQuestion_29.createChoice('ONLINE Mode - Hinglish Language', coursePage_29_0)
  ]);

  // Combinations for: M.A.D (Music, Art & Dance). - Art
  var coursePage_30_0 = form.addPageBreakItem().setTitle('M.A.D (Music, Art & Dance). - Art | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Intensive Artist Training Program (Price: Rs. 1999 | Rs. 2999 33% OFF)"])
    .setRequired(true);
  mlQuestion_30.setChoices([
    mlQuestion_30.createChoice('ONLINE Mode - Hinglish Language', coursePage_30_0)
  ]);

  // Combinations for: Online Degree
  var coursePage_31_0 = form.addPageBreakItem().setTitle('Online Degree | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["MBA PIONEER 2026 (CAT + OMETs) (Price: Rs. 7999 | Rs. 15999 50% OFF)", "Personality Development Programme (Price: Rs. 10000 | Rs. 20000 50% OFF)"])
    .setRequired(true);
  var coursePage_31_1 = form.addPageBreakItem().setTitle('Online Degree | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Professional Course On Communication and Behavior Skills (Price: Rs. 5000 | Rs. 10000 50% OFF)"])
    .setRequired(true);
  mlQuestion_31.setChoices([
    mlQuestion_31.createChoice('ONLINE Mode - Hinglish Language', coursePage_31_0),
    mlQuestion_31.createChoice('ONLINE Mode - English Language', coursePage_31_1)
  ]);

  // Combinations for: Study Abroad & Career Abroad - Acadfly Study Abroad
  var coursePage_32_0 = form.addPageBreakItem().setTitle('Study Abroad & Career Abroad - Acadfly Study Abroad | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Study Abroad - MBBS - Administrative Charges - $2000 (Price: Rs. 192000 | Rs. 0 0% OFF)", "Study Abroad - MBBS - Processing Fees - ₹15,000 (Price: Rs. 15000 | Rs. 0 0% OFF)", "Study Abroad - Masters/ Bachelors (Germany) Processing Fees - ₹25,000 (Price: Rs. 25000 | Rs. 0 0% OFF)", "Study Abroad - Bachelors (Albania) Processing Fees - ₹10,000 (Price: Rs. 10000 | Rs. 0 0% OFF)", "Study Abroad - Bachelors (Albania) Processing Fees - ₹50,000 (Price: Rs. 50000 | Rs. 0 0% OFF)", "Study Abroad - Bachelors (Albania) Visa Consultation - ₹87,500 (Price: Rs. 87500 | Rs. 0 0% OFF)", "Study Abroad - Diploma (Malaysia) Processing Fees - ₹25,000 (Price: Rs. 25000 | Rs. 0 0% OFF)", "Study Abroad - Masters/ Bachelors (Germany) Processing Fees - ₹80,000 (Price: Rs. 80000 | Rs. 0 0% OFF)", "Study Abroad - Diploma (Malaysia) Processing Fees - ₹100,000 (Price: Rs. 100000 | Rs. 0 0% OFF)", "Study Abroad - Masters/ Bachelors (Germany) Visa Consultation - ₹95,000 (Price: Rs. 95000 | Rs. 0 0% OFF)", "Study Abroad - Diploma (Malaysia) Visa Consultation - ₹100,000 (Price: Rs. 100000 | Rs. 0 0% OFF)", "Study Abroad - Diploma (Malaysia) Service Charges - ₹223,000 (Price: Rs. 223000 | Rs. 0 0% OFF)", "Study Abroad - Nursing - Processing Fees - ₹10,000 (Price: Rs. 10000 | Rs. 0 0% OFF)", "Study Abroad - Nursing - Processing Fees - ₹50,000 (Price: Rs. 50000 | Rs. 0 0% OFF)", "Study Abroad - Nursing - Processing Fees - ₹87,500 (Price: Rs. 87500 | Rs. 0 0% OFF)", "Study Abroad - Nursing - Administrative Charges - $1000 (Price: Rs. 95000 | Rs. 0 0% OFF)", "Study Abroad - MBBS - Processing Fees - ₹29,500 (Price: Rs. 29500 | Rs. 0 0% OFF)", "Study Abroad - MBBS - Processing Fees - ₹50,000 (Price: Rs. 50000 | Rs. 0 0% OFF)", "Study Abroad - MBBS - Processing Fees - ₹174,000 (Price: Rs. 174000 | Rs. 0 0% OFF)", "Study Abroad - MBBS - Processing Fees - ₹169,000 (Price: Rs. 169000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_32.setChoices([
    mlQuestion_32.createChoice('ONLINE Mode - English Language', coursePage_32_0)
  ]);

  // Combinations for: PW IOI (College)
  var coursePage_33_0 = form.addPageBreakItem().setTitle('PW IOI (College) | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["PW Institute Of Innovation - School of Technology || Noida Campus (Price: Rs. 11 | Rs. 0 0% OFF)", "PW Institute Of Innovation - School of Technology || Lucknow Campus (Price: Rs. 11 | Rs. 0 0% OFF)", "PW Institute Of Innovation - School of Technology || Pune Campus (Price: Rs. 11 | Rs. 0 0% OFF)", "PW Institute Of Innovation - School of Technology || Bangalore Campus (Price: Rs. 11 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_33.setChoices([
    mlQuestion_33.createChoice('OFFLINE Mode - Hinglish Language', coursePage_33_0)
  ]);

  // Combinations for: Skills - Data Science
  var coursePage_34_0 = form.addPageBreakItem().setTitle('Skills - Data Science | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Data Analytics With AI Course (Price: Rs. 6999 | Rs. 9999 30% OFF)", "Data Science With Generative AI Course (Price: Rs. 6999 | Rs. 9999 30% OFF)"])
    .setRequired(true);
  var coursePage_34_1 = form.addPageBreakItem().setTitle('Skills - Data Science | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Data Analytics with Gen AI (Offline Batch) (Price: Rs. 50000 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_34_2 = form.addPageBreakItem().setTitle('Skills - Data Science | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["AI/ML Launchpad Bootcamp (Price: Rs. 29 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_34.setChoices([
    mlQuestion_34.createChoice('ONLINE Mode - Hinglish Language', coursePage_34_0),
    mlQuestion_34.createChoice('OFFLINE Mode - Hinglish Language', coursePage_34_1),
    mlQuestion_34.createChoice('ONLINE Mode - English Language', coursePage_34_2)
  ]);

  // Combinations for: Skills - Digital Marketing with AI
  var coursePage_35_0 = form.addPageBreakItem().setTitle('Skills - Digital Marketing with AI | OFFLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Digital Marketing with AI (Offline Batch) (Price: Rs. 49999 | Rs. 0 0% OFF)"])
    .setRequired(true);
  var coursePage_35_1 = form.addPageBreakItem().setTitle('Skills - Digital Marketing with AI | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Digital Marketing with AI Course (Price: Rs. 9999 | Rs. 20000 50% OFF)", "Social Media Marketing Course (Price: Rs. 7999 | Rs. 8999 11% OFF)", "How to Start Your Digital Marketing Agency (Price: Rs. 49 | Rs. 0 0% OFF)", "Digital Marketing with AI + Social Media Marketing (Price: Rs. 39999 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_35.setChoices([
    mlQuestion_35.createChoice('OFFLINE Mode - Hinglish Language', coursePage_35_0),
    mlQuestion_35.createChoice('ONLINE Mode - Hinglish Language', coursePage_35_1)
  ]);

  // Combinations for: Skills - Software Development
  var coursePage_36_0 = form.addPageBreakItem().setTitle('Skills - Software Development | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Full Stack Development with AI (Price: Rs. 6999 | Rs. 8999 22% OFF)", "Decode Python with DSA Course 1 (Price: Rs. 3499 | Rs. 4999 30% OFF)", "Decode C++ with DSA Course (Price: Rs. 3499 | Rs. 4999 30% OFF)", "Decode Java with DSA Course (Price: Rs. 3499 | Rs. 4999 30% OFF)"])
    .setRequired(true);
  var coursePage_36_1 = form.addPageBreakItem().setTitle('Skills - Software Development | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Certified Ethical Hacking Course (Price: Rs. 4999 | Rs. 9999 50% OFF)", "DevOps and Cloud Computing Course (Price: Rs. 24999 | Rs. 30000 16% OFF)"])
    .setRequired(true);
  mlQuestion_36.setChoices([
    mlQuestion_36.createChoice('ONLINE Mode - English Language', coursePage_36_0),
    mlQuestion_36.createChoice('ONLINE Mode - Hinglish Language', coursePage_36_1)
  ]);

  // Combinations for: Skills - Certifications - Banking
  var coursePage_37_0 = form.addPageBreakItem().setTitle('Skills - Certifications - Banking | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Certification program  in Banking, Financial Services & Insurance (Price: Rs. 29999 | Rs. 49999 40% OFF)", "ITR Filing Course: ITR 1 to ITR 4 — Step by Step (Price: Rs. 999 | Rs. 1999 50% OFF)", "Stock Market For Beginners (Price: Rs. 2500 | Rs. 4000 37% OFF)", "NISM Series V-A & V-B - Mutual Fund Foundation (Price: Rs. 1499 | Rs. 3000 50% OFF)"])
    .setRequired(true);
  var coursePage_37_1 = form.addPageBreakItem().setTitle('Skills - Certifications - Banking | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["NISM Series XII - Securities Markets Foundation (Price: Rs. 1499 | Rs. 3000 50% OFF)"])
    .setRequired(true);
  mlQuestion_37.setChoices([
    mlQuestion_37.createChoice('ONLINE Mode - Hinglish Language', coursePage_37_0),
    mlQuestion_37.createChoice('ONLINE Mode - Bilingual Language', coursePage_37_1)
  ]);

  // Combinations for: Skills - IIT Online Courses
  var coursePage_38_0 = form.addPageBreakItem().setTitle('Skills - IIT Online Courses | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Post-Graduate Certificate Programme in AI-Driven FinTech (PGCPF) (Price: Rs. 590 | Rs. 0 0% OFF)", "AI-Driven Robotics: Design, Intelligence and Automation (Price: Rs. 590 | Rs. 0 0% OFF)", "Professional Certificate Programme in Generative AI and Machine Learning (Price: Rs. 590 | Rs. 0 0% OFF)", "Professional Certificate Programme in Gen AI in Digital Marketing (Price: Rs. 590 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_38.setChoices([
    mlQuestion_38.createChoice('ONLINE Mode - English Language', coursePage_38_0)
  ]);

  // Combinations for: Skills - IIM Online Courses
  var coursePage_39_0 = form.addPageBreakItem().setTitle('Skills - IIM Online Courses | ONLINE (English) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Executive Certificate Programme in AI-Driven Marketing & Digital Growth (Price: Rs. 590 | Rs. 0 0% OFF)", "Executive Certificate Program in Digital Finance and FinTech (Price: Rs. 590 | Rs. 0 0% OFF)", "Professional Certificate Programme in Digital Marketing and Growth (Price: Rs. 1298 | Rs. 0 0% OFF)", "Post-Graduate Certificate Programme in AI-Driven General Management (Price: Rs. 590 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_39.setChoices([
    mlQuestion_39.createChoice('ONLINE Mode - English Language', coursePage_39_0)
  ]);

  // Combinations for: Skills - Legal Skills
  var coursePage_40_0 = form.addPageBreakItem().setTitle('Skills - Legal Skills | ONLINE (Hinglish) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["PW COMPLETE ADVOCACY PROGRAM (Price: Rs. 17999 | Rs. 29999 40% OFF)", "PW Legal Drafting Certification Program 2026 (Price: Rs. 5999 | Rs. 10997 45% OFF)", "PW ADVANCED CIVIL LITIGATION & LEGAL DRAFTING PROGRAM 2026 (Price: Rs. 12999 | Rs. 24999 48% OFF)", "PW ADVANCED CRIMINAL LITIGATION & LEGAL DRAFTING PROGRAM 2026 (Price: Rs. 12999 | Rs. 24999 48% OFF)"])
    .setRequired(true);
  var coursePage_40_1 = form.addPageBreakItem().setTitle('Skills - Legal Skills | ONLINE (Bilingual) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["PW VAKIL TOOLKIT (Price: Rs. 499 | Rs. 899 44% OFF)"])
    .setRequired(true);
  mlQuestion_40.setChoices([
    mlQuestion_40.createChoice('ONLINE Mode - Hinglish Language', coursePage_40_0),
    mlQuestion_40.createChoice('ONLINE Mode - Bilingual Language', coursePage_40_1)
  ]);

  // Combinations for: Skills - Urban Management
  var coursePage_41_0 = form.addPageBreakItem().setTitle('Skills - Urban Management | ONLINE (Hindi) Courses');
  form.addCheckboxItem()
    .setTitle('Select one or more courses to register for:')
    .setChoiceValues(["Municipal Managment Course (Price: Rs. 299 | Rs. 0 0% OFF)"])
    .setRequired(true);
  mlQuestion_41.setChoices([
    mlQuestion_41.createChoice('ONLINE Mode - Hindi Language', coursePage_41_0)
  ]);

  // 5. Set Page Routing to Submit to prevent page bleeding
  coursePage_0_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_0_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_0_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_0_3.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_0_4.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_0_5.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_0_6.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_0_7.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_1_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_1_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_1_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_1_3.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_1_4.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_1_5.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_1_6.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_1_7.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_2_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_2_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_2_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_2_3.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_2_4.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_2_5.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_2_6.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_3_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_3_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_3_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_3_3.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_3_4.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_3_5.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_3_6.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_3_7.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_3.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_4.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_5.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_6.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_7.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_4_8.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_5_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_5_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_5_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_6_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_7_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_7_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_7_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_7_3.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_8_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_8_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_9_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_10_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_11_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_11_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_12_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_13_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_13_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_13_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_13_3.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_14_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_14_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_14_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_15_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_16_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_16_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_16_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_17_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_18_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_19_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_20_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_21_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_22_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_22_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_23_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_23_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_23_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_24_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_25_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_26_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_27_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_28_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_29_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_30_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_31_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_31_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_32_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_33_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_34_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_34_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_34_2.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_35_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_35_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_36_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_36_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_37_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_37_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_38_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_39_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_40_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_40_1.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  coursePage_41_0.setGoToPage(FormApp.PageNavigationType.SUBMIT);

  // 6. Post Submission Success Text Configuration
  form.setConfirmationMessage('🎉 Registration Details Confirmed!\n\n' +
                              'Your learning preferences are securely synced under the PW Campus Ambassador registry. ' +
                              'An authorized team advisor assigned to your selected Category + Mode + Language branch will contact you within 24 hours via Call/WhatsApp to coordinate your enrollment discount credentials and finalize onboarding! 💙');

  Logger.log('==================================================');
  Logger.log('Success! Form ready on Google Drive.');
  Logger.log('Edit URL (For Ambassador): ' + form.getEditUrl());
  Logger.log('Published URL (For Students): ' + form.getPublishedUrl());
  Logger.log('==================================================');
}
