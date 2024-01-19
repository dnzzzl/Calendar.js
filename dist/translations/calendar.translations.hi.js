/*! Calendar.js v2.10.4 | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
  "dayHeaderNames": [
    "सोमवार",
    "मंगल",
    "बुध",
    "गुरु",
    "शुक्र",
    "बैठा",
    "सूरज"
  ],
  "dayNames": [
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "शुक्रवार",
    "शनिवार",
    "रविवार"
  ],
  "dayNamesAbbreviated": [
    "सोमवार",
    "मंगल",
    "बुध",
    "गुरु",
    "शुक्र",
    "बैठा",
    "सूरज"
  ],
  "monthNames": [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितम्बर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर"
  ],
  "monthNamesAbbreviated": [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितम्बर",
    "अक्टूबर",
    "नवंबर",
    "दिसम्बर"
  ],
  "previousMonthTooltipText": "पिछला महीना",
  "nextMonthTooltipText": "अगले महीने",
  "previousDayTooltipText": "पिछले दिन",
  "nextDayTooltipText": "अगले दिन",
  "previousWeekTooltipText": "पिछला सप्ताह",
  "nextWeekTooltipText": "अगले सप्ताह",
  "addEventTooltipText": "कार्यक्रम जोड़ें",
  "closeTooltipText": "बंद करना",
  "exportEventsTooltipText": "निर्यात घटनाएँ",
  "todayTooltipText": "आज",
  "refreshTooltipText": "ताज़ा करना",
  "searchTooltipText": "खोज",
  "expandDayTooltipText": "दिन का विस्तार करें",
  "viewAllEventsTooltipText": "सभी घटनाएँ देखें",
  "viewFullWeekTooltipText": "पूरा सप्ताह देखें",
  "fromText": "से:",
  "toText": "को:",
  "isAllDayText": "ऑल-डे है",
  "titleText": "शीर्षक:",
  "descriptionText": "विवरण:",
  "locationText": "जगह:",
  "addText": "जोड़ना",
  "updateText": "अद्यतन",
  "cancelText": "रद्द करना",
  "removeEventText": "निकालना",
  "addEventTitle": "कार्यक्रम जोड़ें",
  "editEventTitle": "इवेंट संपादित करें",
  "exportStartFilename": "निर्यात_घटनाएँ_",
  "fromTimeErrorMessage": "कृपया एक वैध 'प्रेषक' समय चुनें।",
  "toTimeErrorMessage": "कृपया एक वैध 'टू' समय चुनें।",
  "toSmallerThanFromErrorMessage": "कृपया ऐसी 'प्रति' तिथि चुनें जो 'प्रेषक' तिथि से बड़ी हो।",
  "titleErrorMessage": "कृपया 'शीर्षक' फ़ील्ड में एक मान दर्ज करें (कोई खाली स्थान नहीं)।",
  "stText": "",
  "ndText": "",
  "rdText": "",
  "thText": "",
  "yesText": "हाँ",
  "noText": "नहीं",
  "allDayText": "पूरे दिन",
  "allEventsText": "सभी कार्यक्रम",
  "toTimeText": "को",
  "confirmEventRemoveTitle": "ईवेंट हटाने की पुष्टि करें",
  "confirmEventRemoveMessage": "इस ईवेंट को हटाकर पूर्ववत नहीं किया जा सकता. ",
  "okText": "ठीक है",
  "exportEventsTitle": "निर्यात घटनाएँ",
  "selectColorsText": "रंग चुनें",
  "backgroundColorText": "पृष्ठभूमि का रंग:",
  "textColorText": "पाठ का रंग:",
  "borderColorText": "सीमा रंग:",
  "searchEventsTitle": "घटनाएँ खोजें",
  "previousText": "पहले का",
  "nextText": "अगला",
  "matchCaseText": "मामले मिलाएं",
  "repeatsText": "दोहराता है:",
  "repeatDaysToExcludeText": "बहिष्कृत करने के लिए दिन दोहराएँ:",
  "daysToExcludeText": "बहिष्कृत करने योग्य दिन:",
  "seriesIgnoreDatesText": "शृंखला अनदेखा तिथियाँ:",
  "repeatsNever": "कभी नहीं",
  "repeatsEveryDayText": "रोज रोज",
  "repeatsEveryWeekText": "हर हफ्ते",
  "repeatsEvery2WeeksText": "प्रत्येक 2 हफ्ते",
  "repeatsEveryMonthText": "प्रत्येक माह",
  "repeatsEveryYearText": "प्रत्येक वर्ष",
  "repeatsCustomText": "रिवाज़:",
  "repeatOptionsTitle": "विकल्प दोहराएँ",
  "moreText": "अधिक",
  "includeText": "शामिल करना:",
  "minimizedTooltipText": "छोटा करना",
  "restoreTooltipText": "पुनर्स्थापित करना",
  "removeAllEventsInSeriesText": "शृंखला के सभी ईवेंट हटाएँ",
  "createdText": "बनाया था:",
  "organizerNameText": "व्यवस्था करनेवाला:",
  "organizerEmailAddressText": "आयोजक ईमेल:",
  "enableFullScreenTooltipText": "फ़ुल-स्क्रीन मोड चालू करें",
  "disableFullScreenTooltipText": "फ़ुल-स्क्रीन मोड बंद करें",
  "idText": "पहचान:",
  "expandMonthTooltipText": "माह का विस्तार करें",
  "repeatEndsText": "दोहराएँ अंत:",
  "noEventsAvailableText": "कोई ईवेंट उपलब्ध नहीं है.",
  "viewFullWeekText": "पूरा सप्ताह देखें",
  "noEventsAvailableFullText": "देखने के लिए कोई इवेंट उपलब्ध नहीं है.",
  "clickText": "क्लिक",
  "hereText": "यहाँ",
  "toAddANewEventText": "एक नया ईवेंट जोड़ने के लिए.",
  "weekText": "सप्ताह",
  "groupText": "समूह:",
  "configurationTooltipText": "विन्यास",
  "configurationTitleText": "विन्यास",
  "groupsText": "समूह",
  "eventNotificationTitle": "Calendar.js",
  "eventNotificationBody": "इवेंट '{0}' शुरू हो गया है.",
  "optionsText": "विकल्प:",
  "startsWithText": "इसके साथ आरंभ होता है",
  "endsWithText": "इसी के साथ समाप्त होता है",
  "containsText": "रोकना",
  "displayTabText": "प्रदर्शन",
  "enableAutoRefreshForEventsText": "ईवेंट के लिए ऑटो-रीफ्रेश सक्षम करें",
  "enableBrowserNotificationsText": "ब्राउज़र सूचनाएं सक्षम करें",
  "enableTooltipsText": "टूलटिप्स सक्षम करें",
  "dayText": "दिन",
  "daysText": "दिन",
  "hourText": "घंटा",
  "hoursText": "घंटे",
  "minuteText": "मिनट",
  "minutesText": "मिनट",
  "enableDragAndDropForEventText": "खींचें सक्षम करें",
  "organizerTabText": "व्यवस्था करनेवाला",
  "removeEventsTooltipText": "ईवेंट हटाएँ",
  "confirmEventsRemoveTitle": "इवेंट हटाने की पुष्टि करें",
  "confirmEventsRemoveMessage": "इन गैर-दोहराई जाने वाली घटनाओं को हटाकर पूर्ववत नहीं किया जा सकता। ",
  "eventText": "आयोजन",
  "optionalText": "वैकल्पिक",
  "urlText": "यूआरएल:",
  "openUrlText": "यूआरएल खोलें",
  "thisWeekTooltipText": "इस सप्ताह",
  "dailyText": "दैनिक",
  "weeklyText": "साप्ताहिक",
  "monthlyText": "महीने के",
  "yearlyText": "सालाना",
  "repeatsByCustomSettingsText": "कस्टम सेटिंग्स द्वारा",
  "lastUpdatedText": "आखरी अपडेट:",
  "advancedText": "विकसित",
  "copyText": "प्रतिलिपि",
  "pasteText": "पेस्ट करें",
  "duplicateText": "डुप्लिकेट",
  "showAlertsText": "अलर्ट दिखाएँ",
  "selectDatePlaceholderText": "तारीख़ चुनें...",
  "hideDayText": "छुपे दिन",
  "notSearchText": "नहीं (विपरीत)",
  "showHolidaysInTheDisplaysText": "मुख्य प्रदर्शन और शीर्षक पट्टियों में छुट्टियाँ दिखाएँ",
  "newEventDefaultTitle": "* नई इवैंट",
  "urlErrorMessage": "कृपया 'यूआरएल' फ़ील्ड में एक वैध यूआरएल दर्ज करें (या खाली छोड़ दें)।",
  "searchTextBoxPlaceholder": "शीर्षक, विवरण, आदि खोजें...",
  "currentMonthTooltipText": "अभी चल रहा माह",
  "cutText": "काटना",
  "showMenuTooltipText": "मेनू दिखाओ",
  "eventTypesText": "घटना के प्रकार",
  "lockedText": "बंद:",
  "typeText": "प्रकार:",
  "sideMenuHeaderText": "Calendar.js",
  "sideMenuDaysText": "दिन",
  "visibleDaysText": "दर्शनीय दिन",
  "previousYearTooltipText": "पिछले वर्ष",
  "nextYearTooltipText": "अगले वर्ष",
  "showOnlyWorkingDaysText": "केवल कार्य दिवस दिखाएँ",
  "exportFilenamePlaceholderText": "नाम: (वैकल्पिक)",
  "errorText": "गलती",
  "exportText": "निर्यात",
  "configurationUpdatedText": "कॉन्फ़िगरेशन अद्यतन किया गया.",
  "eventAddedText": "{0} ईवेंट जोड़ा गया.",
  "eventUpdatedText": "{0} इवेंट अपडेट किया गया.",
  "eventRemovedText": "{0} ईवेंट हटा दिया गया.",
  "eventsRemovedText": "{0} इवेंट हटा दिए गए.",
  "eventsExportedToText": "इवेंट {0} पर निर्यात किए गए.",
  "eventsPastedText": "{0} इवेंट चिपकाए गए.",
  "eventsExportedText": "इवेंट निर्यात किए गए.",
  "copyToClipboardOnlyText": "केवल क्लिपबोर्ड पर कॉपी करें",
  "workingDaysText": "काम कर दिन",
  "weekendDaysText": "सप्ताहांत के दिन",
  "showAsBusyText": "व्यस्त के रूप में दिखाएँ",
  "selectAllText": "सबका चयन करें",
  "selectNoneText": "कुछ मत चुनिए",
  "importEventsTooltipText": "घटनाएँ आयात करें",
  "eventsImportedText": "{0} इवेंट आयातित.",
  "viewFullYearTooltipText": "पूरा वर्ष देखें",
  "currentYearTooltipText": "चालू वर्ष",
  "alertOffsetText": "अलर्ट ऑफसेट (मिनट):",
  "viewFullDayTooltipText": "पूरा दिन देखें",
  "confirmEventUpdateTitle": "इवेंट अपडेट की पुष्टि करें",
  "confirmEventUpdateMessage": "क्या आप इस बिंदु से आगे की घटना को अद्यतन करना चाहेंगे, या पूरी शृंखला को?",
  "forwardText": "आगे",
  "seriesText": "शृंखला",
  "viewTimelineTooltipText": "समयसीमा जरूर देख लें",
  "nextPropertyTooltipText": "अगली संपत्ति",
  "noneText": "(कोई नहीं)",
  "shareText": "शेयर करना",
  "shareStartFilename": "साझा_घटनाएँ_",
  "previousPropertyTooltipText": "पिछली संपत्ति",
  "jumpToDateTitle": "तिथि पर जाएँ",
  "goText": "जाना"
};