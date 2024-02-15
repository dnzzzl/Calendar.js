/*! Calendar.js v2.10.12 - Armenian | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "Երկ",
        "Երք",
        "ամուսնացնել",
        "Հինգշ",
        "Ուրբ",
        "Շաբաթ",
        "Արև"
    ],
    "dayNames": [
        "Երկուշաբթի",
        "Երեքշաբթի",
        "չորեքշաբթի",
        "հինգշաբթի",
        "Ուրբաթ",
        "շաբաթ օրը",
        "Կիրակի"
    ],
    "dayNamesAbbreviated": [
        "Երկ",
        "Երք",
        "ամուսնացնել",
        "Հինգշ",
        "Ուրբ",
        "Շաբաթ",
        "Արև"
    ],
    "monthNames": [
        "հունվար",
        "փետրվար",
        "մարտ",
        "ապրիլ",
        "մայիս",
        "հունիս",
        "հուլիս",
        "օգոստոս",
        "սեպտեմբեր",
        "հոկտեմբեր",
        "նոյեմբեր",
        "դեկտեմբեր"
    ],
    "monthNamesAbbreviated": [
        "հուն",
        "փետր",
        "Մարտ",
        "ապր",
        "մայիս",
        "հուն",
        "հուլ",
        "օգ",
        "սեպտ",
        "հոկտ",
        "նոյ",
        "դեկտ"
    ],
    "previousMonthTooltipText": "Նախորդ ամիս",
    "nextMonthTooltipText": "Հաջորդ ամիս",
    "previousDayTooltipText": "Նախորդ օրը",
    "nextDayTooltipText": "Հաջորդ օրը",
    "previousWeekTooltipText": "Նախորդ շաբաթ",
    "nextWeekTooltipText": "Հաջորդ շաբաթ",
    "addEventTooltipText": "Ավելացնել իրադարձություն",
    "closeTooltipText": "փակել",
    "exportEventsTooltipText": "Արտահանման իրադարձություններ",
    "todayTooltipText": "Այսօր",
    "refreshTooltipText": "Թարմացնել",
    "searchTooltipText": "Որոնում",
    "expandDayTooltipText": "Ընդլայնել օր",
    "viewAllEventsTooltipText": "Դիտել բոլոր իրադարձությունները",
    "viewFullWeekTooltipText": "Դիտել ամբողջ շաբաթը",
    "fromText": "From:",
    "toText": "Դեպի՝",
    "isAllDayText": "Ամբողջօրյա է",
    "titleText": "Կոչում:",
    "descriptionText": "Նկարագրություն:",
    "locationText": "Գտնվելու վայրը:",
    "addText": "Ավելացնել",
    "updateText": "Թարմացնել",
    "cancelText": "Չեղարկել",
    "removeEventText": "Հեռացնել",
    "addEventTitle": "Ավելացնել իրադարձություն",
    "editEventTitle": "Խմբագրել Իրադարձությունը",
    "exportStartFilename": "արտահանվող_իրադարձություններ_",
    "fromTimeErrorMessage": "Խնդրում ենք ընտրել վավեր «From» ժամանակ:",
    "toTimeErrorMessage": "Խնդրում ենք ընտրել վավեր «To» ժամանակը:",
    "toSmallerThanFromErrorMessage": "Խնդրում ենք ընտրել «Մինչև» ամսաթիվը, որն ավելի մեծ է, քան «Սկսած» ամսաթիվը:",
    "titleErrorMessage": "Խնդրում ենք «Վերնագիր» դաշտում մուտքագրել արժեք (դատարկ տարածք չկա):",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "Այո՛",
    "noText": "Ոչ",
    "allDayText": "Ամբողջ օրը",
    "allEventsText": "Բոլոր իրադարձությունները",
    "toTimeText": "դեպի",
    "confirmEventRemoveTitle": "Հաստատեք իրադարձության հեռացումը",
    "confirmEventRemoveMessage": "Այս իրադարձության հեռացումը հնարավոր չէ հետարկել: ",
    "okText": "լավ",
    "exportEventsTitle": "Արտահանման իրադարձություններ",
    "selectColorsText": "Ընտրեք Գույներ",
    "backgroundColorText": "Ֆոնի գույնը:",
    "textColorText": "Տեքստի գույնը.",
    "borderColorText": "Սահմանի գույնը:",
    "searchEventsTitle": "Որոնել իրադարձություններ",
    "previousText": "Նախորդ",
    "nextText": "Հաջորդը",
    "matchCaseText": "Match Case",
    "repeatsText": "Կրկնում է.",
    "repeatDaysToExcludeText": "Կրկնել օրերը բացառելու համար.",
    "daysToExcludeText": "Բացառելու օրեր.",
    "seriesIgnoreDatesText": "Series Ignore Dates:",
    "repeatsNever": "Երբեք",
    "repeatsEveryDayText": "Ամեն օր",
    "repeatsEveryWeekText": "Ամեն շաբաթ",
    "repeatsEvery2WeeksText": "Յուրաքանչյուր 2 շաբաթ",
    "repeatsEveryMonthText": "Ամեն ամիս",
    "repeatsEveryYearText": "Ամեն տարի",
    "repeatsCustomText": "Պատվերով:",
    "repeatOptionsTitle": "Կրկնել Ընտրանքներ",
    "moreText": "Ավելին",
    "includeText": "Ներառում:",
    "minimizedTooltipText": "Փոքրացնել",
    "restoreTooltipText": "Վերականգնել",
    "removeAllEventsInSeriesText": "Հեռացնել բոլոր իրադարձությունները շարքից",
    "createdText": "Ստեղծվել է:",
    "organizerNameText": "Կազմակերպիչ:",
    "organizerEmailAddressText": "Կազմակերպչի էլ.",
    "enableFullScreenTooltipText": "Միացնել ամբողջ էկրանի ռեժիմը",
    "disableFullScreenTooltipText": "Անջատեք լիաէկրան ռեժիմը",
    "idText": "ID:",
    "expandMonthTooltipText": "Ընդլայնել ամիսը",
    "repeatEndsText": "Կրկնել ավարտը.",
    "noEventsAvailableText": "Միջոցառումներ չկան:",
    "viewFullWeekText": "Դիտել ամբողջ շաբաթը",
    "noEventsAvailableFullText": "Դիտելու համար հասանելի իրադարձություններ չկան:",
    "clickText": "Սեղմել",
    "hereText": "այստեղ",
    "toAddANewEventText": "նոր իրադարձություն ավելացնելու համար:",
    "weekText": "Շաբաթ",
    "groupText": "Խումբ:",
    "configurationTooltipText": "Կոնֆիգուրացիա",
    "configurationTitleText": "Կոնֆիգուրացիա",
    "groupsText": "Խմբեր",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "«{0}» միջոցառումը մեկնարկել է:",
    "optionsText": "Ընտրանքներ:",
    "startsWithText": "Սկսվում է",
    "endsWithText": "Ավարտվում է",
    "containsText": "Պարունակում է",
    "displayTabText": "Ցուցադրել",
    "enableAutoRefreshForEventsText": "Միացնել իրադարձությունների ավտոմատ թարմացումը",
    "enableBrowserNotificationsText": "Միացնել բրաուզերի ծանուցումները",
    "enableTooltipsText": "Միացնել գործիքի հուշումները",
    "dayText": "օր",
    "daysText": "օրեր",
    "hourText": "ժամ",
    "hoursText": "ժամեր",
    "minuteText": "րոպե",
    "minutesText": "րոպե",
    "enableDragAndDropForEventText": "Միացնել քաշելը",
    "organizerTabText": "Կազմակերպիչ",
    "removeEventsTooltipText": "Հեռացնել իրադարձությունները",
    "confirmEventsRemoveTitle": "Հաստատեք իրադարձությունների հեռացումը",
    "confirmEventsRemoveMessage": "Այս չկրկնվող իրադարձությունների հեռացումը հնարավոր չէ հետարկել: ",
    "eventText": "Իրադարձություն",
    "optionalText": "Ընտրովի",
    "urlText": "URL:",
    "openUrlText": "Բացեք URL-ը",
    "thisWeekTooltipText": "Այս շաբաթ",
    "dailyText": "Ամենօրյա",
    "weeklyText": "Շաբաթական",
    "monthlyText": "Ամսական",
    "yearlyText": "Տարեկան",
    "repeatsByCustomSettingsText": "Հատուկ կարգավորումների միջոցով",
    "lastUpdatedText": "Վերջին անգամ թարմացվել է:",
    "advancedText": "Ընդլայնված",
    "copyText": "Պատճենել",
    "pasteText": "Կպցնել",
    "duplicateText": "Կրկնօրինակեք",
    "showAlertsText": "Ցույց տալ ծանուցումները",
    "selectDatePlaceholderText": "Ընտրեք ամսաթիվը...",
    "hideDayText": "Թաքցնել օր",
    "notSearchText": "Ոչ (հակառակ)",
    "showHolidaysInTheDisplaysText": "Ցուցադրել արձակուրդները հիմնական ցուցադրման և վերնագրի տողերում",
    "newEventDefaultTitle": "* Նոր իրադարձություն",
    "urlErrorMessage": "Խնդրում ենք «Url» դաշտում մուտքագրեք վավեր URL (կամ թողեք դատարկ):",
    "searchTextBoxPlaceholder": "Որոնել վերնագիր, նկարագրություն և այլն...",
    "currentMonthTooltipText": "Ընթացիկ ամիս",
    "cutText": "Կտրել",
    "showMenuTooltipText": "Ցուցադրել ընտրացանկը",
    "eventTypesText": "Միջոցառումների տեսակները",
    "lockedText": "Կողպված է՝",
    "typeText": "Տիպ:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "Օրեր",
    "visibleDaysText": "Տեսանելի օրեր",
    "previousYearTooltipText": "Նախորդ տարի",
    "nextYearTooltipText": "Հաջորդ տարի",
    "showOnlyWorkingDaysText": "Ցույց տալ միայն աշխատանքային օրերը",
    "exportFilenamePlaceholderText": "Անուն (ըստ ցանկության)",
    "errorText": "Սխալ",
    "exportText": "Արտահանում",
    "configurationUpdatedText": "Կազմաձևը թարմացվել է:",
    "eventAddedText": "Ավելացվեց {0} միջոցառում:",
    "eventUpdatedText": "{0} միջոցառումը թարմացվել է:",
    "eventRemovedText": "{0} իրադարձություն հեռացվեց:",
    "eventsRemovedText": "{0} իրադարձություն հեռացվել է:",
    "eventsExportedToText": "Իրադարձությունները արտահանվեցին {0}:",
    "eventsPastedText": "{0} իրադարձություն տեղադրվեց:",
    "eventsExportedText": "Միջոցառումներ արտահանվել.",
    "copyToClipboardOnlyText": "Պատճենել միայն սեղմատախտակին",
    "workingDaysText": "Աշխատանքային օրեր",
    "weekendDaysText": "Հանգստյան օրեր",
    "showAsBusyText": "Ցույց տալ որպես զբաղված",
    "selectAllText": "Ընտրել բոլորը",
    "selectNoneText": "Ընտրեք Ոչ մեկը",
    "importEventsTooltipText": "Իրադարձություններ ներմուծել",
    "eventsImportedText": "Ներմուծվել է {0} իրադարձություն:",
    "viewFullYearTooltipText": "Դիտել ամբողջ տարին",
    "currentYearTooltipText": "Ընթացիկ տարի",
    "alertOffsetText": "Զգուշացման օֆսեթ (րոպե).",
    "viewFullDayTooltipText": "Դիտել ամբողջ օրը",
    "confirmEventUpdateTitle": "Հաստատեք իրադարձության թարմացումը",
    "confirmEventUpdateMessage": "Կցանկանա՞ք թարմացնել իրադարձությունն այս պահից հետո, թե՞ ամբողջ շարքը:",
    "forwardText": "Առաջ",
    "seriesText": "Սերիա",
    "viewTimelineTooltipText": "Դիտել ժամանակացույցը",
    "nextPropertyTooltipText": "Հաջորդ գույքը",
    "noneText": "(ոչ ոք)",
    "shareText": "Կիսվել",
    "shareStartFilename": "կիսված_իրադարձություններ_",
    "previousPropertyTooltipText": "Նախորդ Գույք",
    "jumpToDateTitle": "Անցնել դեպի ամսաթիվ",
    "goText": "Գնա"
};