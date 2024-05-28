/*! Calendar.js v2.10.16 - Irish | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "Mon",
        "Dé Máirt",
        "Céad",
        "Thu",
        "Aoine",
        "Sath",
        "Ghrian"
    ],
    "dayNames": [
        "Dé Luain",
        "Dé Máirt",
        "Dé Céadaoin",
        "Déardaoin",
        "Dé hAoine",
        "Dé Sathairn",
        "Domhnach"
    ],
    "dayNamesAbbreviated": [
        "Mon",
        "Dé Máirt",
        "Céad",
        "Thu",
        "Aoine",
        "Sath",
        "Ghrian"
    ],
    "monthNames": [
        "Eanáir",
        "Feabhra",
        "Márta",
        "Aibreán",
        "Bealtaine",
        "Meitheamh",
        "Iúil",
        "Lúnasa",
        "Meán Fómhair",
        "Deireadh Fómhair",
        "Samhain",
        "Nollaig"
    ],
    "monthNamesAbbreviated": [
        "Ean",
        "Feabh",
        "Mar",
        "Aibreán",
        "Bealtaine",
        "Meitheamh",
        "Iúil",
        "Lúnasa",
        "Meán Fómhair",
        "Deireadh Fómhair",
        "Samhain",
        "Dec"
    ],
    "previousMonthTooltipText": "An Mhí Roimhe Seo",
    "nextMonthTooltipText": "An mhí seo chugainn",
    "previousDayTooltipText": "An Lá Roimhe Seo",
    "nextDayTooltipText": "An chéad lá eile",
    "previousWeekTooltipText": "Seachtain roimhe sin",
    "nextWeekTooltipText": "An tseachtain seo chugainn",
    "addEventTooltipText": "Cuir Imeacht leis",
    "closeTooltipText": "Dún",
    "exportEventsTooltipText": "Imeachtaí Easpórtála",
    "todayTooltipText": "Inniu",
    "refreshTooltipText": "Athnuaigh",
    "searchTooltipText": "Cuardach",
    "expandDayTooltipText": "Leathnaigh Lá",
    "viewAllEventsTooltipText": "Féach ar Gach Imeachtaí",
    "viewFullWeekTooltipText": "Féach ar an tSeachtain Iomlán",
    "fromText": "Ó:",
    "toText": "Chun:",
    "isAllDayText": "Tá an Lá Uile",
    "titleText": "Teideal:",
    "descriptionText": "Cur síos:",
    "locationText": "Suíomh:",
    "addText": "Cuir",
    "updateText": "Nuashonrú",
    "cancelText": "Cealaigh",
    "removeEventText": "Bain",
    "addEventTitle": "Cuir Imeacht leis",
    "editEventTitle": "Cuir Imeacht in Eagar",
    "exportStartFilename": "easpórtáilte_imeachtaí_",
    "fromTimeErrorMessage": "Roghnaigh am bailí 'Ó'.",
    "toTimeErrorMessage": "Roghnaigh am bailí 'Chuig'.",
    "toSmallerThanFromErrorMessage": "Roghnaigh dáta 'Chuig' atá níos mó ná an dáta 'Ó'.",
    "titleErrorMessage": "Cuir isteach luach sa réimse 'Teideal' (gan spás folamh).",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "Tá",
    "noText": "Níl",
    "allDayText": "Ar feadh an lae",
    "allEventsText": "Gach Imeachtaí",
    "toTimeText": "chun",
    "confirmEventRemoveTitle": "Deimhnigh Baint Imeachta",
    "confirmEventRemoveMessage": "Ní féidir an t-imeacht seo a bhaint a chealú. ",
    "okText": "ceart go leor",
    "exportEventsTitle": "Imeachtaí Easpórtála",
    "selectColorsText": "Roghnaigh Dathanna",
    "backgroundColorText": "Dath an Chúlra:",
    "textColorText": "Dath an Téacs:",
    "borderColorText": "Dath na Teorann:",
    "searchEventsTitle": "Imeachtaí Cuardaigh",
    "previousText": "Roimhe Seo",
    "nextText": "Ar aghaidh",
    "matchCaseText": "Cás Meaitseála",
    "repeatsText": "Athdhéantar seo:",
    "repeatDaysToExcludeText": "Laethanta Athdhéanta chun Eisiamh:",
    "daysToExcludeText": "Laethanta Eisiamh:",
    "seriesIgnoreDatesText": "Dátaí Neamhaird na Sraithe:",
    "repeatsNever": "Riamh",
    "repeatsEveryDayText": "Gach lá",
    "repeatsEveryWeekText": "Gach seachtain",
    "repeatsEvery2WeeksText": "Gach 2 Sheachtain",
    "repeatsEveryMonthText": "Gach mí",
    "repeatsEveryYearText": "Gach bhliain",
    "repeatsCustomText": "Saincheaptha:",
    "repeatOptionsTitle": "Roghanna Athdhéanta",
    "moreText": "Tuilleadh",
    "includeText": "Cuir san áireamh:",
    "minimizedTooltipText": "Íoslaghdaigh",
    "restoreTooltipText": "Athchóirigh",
    "removeAllEventsInSeriesText": "Bain Gach Imeacht Sa tSraith",
    "createdText": "Cruthaithe:",
    "organizerNameText": "Eagraí:",
    "organizerEmailAddressText": "Ríomhphost Eagraí:",
    "enableFullScreenTooltipText": "Cuir Mód Lánscáileáin ar siúl",
    "disableFullScreenTooltipText": "Múch Mód Lánscáileáin",
    "idText": "ID:",
    "expandMonthTooltipText": "Leathnaigh Mí",
    "repeatEndsText": "Críoch Athchraolta:",
    "noEventsAvailableText": "Níl aon imeachtaí ar fáil.",
    "viewFullWeekText": "Féach ar an tSeachtain Iomlán",
    "noEventsAvailableFullText": "Níl aon imeachtaí ar fáil le féachaint orthu.",
    "clickText": "Cliceáil",
    "hereText": "anseo",
    "toAddANewEventText": "chun imeacht nua a chur leis.",
    "weekText": "Seachtain",
    "groupText": "Grúpa:",
    "configurationTooltipText": "Cumraíocht",
    "configurationTitleText": "Cumraíocht",
    "groupsText": "Grúpaí",
    "eventNotificationTitle": "Féilire.js",
    "eventNotificationBody": "Cuireadh tús leis an imeacht '{0}'.",
    "optionsText": "Roghanna:",
    "startsWithText": "Tosaíonn Le",
    "endsWithText": "Críochnaíonn Le",
    "containsText": "Tá",
    "displayTabText": "Taispeáin",
    "enableAutoRefreshForEventsText": "Cumasaigh uath-athnuachan le haghaidh imeachtaí",
    "enableBrowserNotificationsText": "Cumasaigh fógraí brabhsálaí",
    "enableTooltipsText": "Cumasaigh leideanna uirlisí",
    "dayText": "lá",
    "daysText": "laethanta",
    "hourText": "uair",
    "hoursText": "uair an chloig",
    "minuteText": "nóiméad",
    "minutesText": "nóiméad",
    "enableDragAndDropForEventText": "Cumasaigh tarraing",
    "organizerTabText": "Eagraí",
    "removeEventsTooltipText": "Bain Imeachtaí",
    "confirmEventsRemoveTitle": "Deimhnigh Baint Imeachtaí",
    "confirmEventsRemoveMessage": "Ní féidir deireadh a chur leis na teagmhais neamh-athdhéanta seo. ",
    "eventText": "Imeacht",
    "optionalText": "Roghnach",
    "urlText": "URL:",
    "openUrlText": "Oscail URL",
    "thisWeekTooltipText": "An tseachtain seo",
    "dailyText": "laethúil",
    "weeklyText": "Seachtainiúil",
    "monthlyText": "go míosúil",
    "yearlyText": "Bliantúil",
    "repeatsByCustomSettingsText": "De réir Socruithe an Chustaim",
    "lastUpdatedText": "Nuashonraithe Deiridh:",
    "advancedText": "Casta",
    "copyText": "Cóip",
    "pasteText": "Greamaigh",
    "duplicateText": "Dúblach",
    "showAlertsText": "Taispeáin Foláirimh",
    "selectDatePlaceholderText": "Roghnaigh dáta...",
    "hideDayText": "Folaigh Lá",
    "notSearchText": "Ní (os coinne)",
    "showHolidaysInTheDisplaysText": "Taispeáin laethanta saoire sna príomhbharraí taispeántais agus teidil",
    "newEventDefaultTitle": "* Ócáid Nua",
    "urlErrorMessage": "Cuir URL bailí isteach sa réimse 'Url' (nó fág bán).",
    "searchTextBoxPlaceholder": "Teideal cuardaigh, tuairisc, etc...",
    "currentMonthTooltipText": "An Mhí Reatha",
    "cutText": "Gearr",
    "showMenuTooltipText": "Taispeáin Roghchlár",
    "eventTypesText": "Cineálacha Imeachtaí",
    "lockedText": "Faoi ghlas:",
    "typeText": "Cineál:",
    "sideMenuHeaderText": "Féilire.js",
    "sideMenuDaysText": "Laethanta",
    "visibleDaysText": "Laethanta Infheicthe",
    "previousYearTooltipText": "An Bhliain Roimhe Seo",
    "nextYearTooltipText": "An bhliain seo chugainn",
    "showOnlyWorkingDaysText": "Taispeáin Laethanta Oibre Amháin",
    "exportFilenamePlaceholderText": "Ainm (roghnach)",
    "errorText": "Earráid",
    "exportText": "Easpórtáil",
    "configurationUpdatedText": "Nuashonraíodh an chumraíocht.",
    "eventAddedText": "{0} imeacht curtha leis.",
    "eventUpdatedText": "Nuashonraíodh {0} imeacht.",
    "eventRemovedText": "Baineadh {0} imeacht.",
    "eventsRemovedText": "Baineadh {0} imeacht.",
    "eventsExportedToText": "Easpórtáladh imeachtaí chuig {0}.",
    "eventsPastedText": "{0} imeacht curtha i leataobh.",
    "eventsExportedText": "Imeachtaí easpórtáilte.",
    "copyToClipboardOnlyText": "Cóipeáil chuig an ngearrthaisce amháin",
    "workingDaysText": "Laethanta oibre",
    "weekendDaysText": "Laethanta Deireadh Seachtaine",
    "showAsBusyText": "Taispeáin Chomh Gnóthach",
    "selectAllText": "Roghnú go léir",
    "selectNoneText": "Roghnaigh Dada",
    "importEventsTooltipText": "Imeachtaí Iompórtáil",
    "eventsImportedText": "Iompórtáladh {0} imeacht.",
    "viewFullYearTooltipText": "Féach Bliain Iomlán",
    "currentYearTooltipText": "An Bhliain Reatha",
    "alertOffsetText": "Fritháireamh Foláirimh (nóiméid):",
    "viewFullDayTooltipText": "Féach Lá Iomlán",
    "confirmEventUpdateTitle": "Deimhnigh Nuashonrú Imeachta",
    "confirmEventUpdateMessage": "Ar mhaith leat an t-imeacht a nuashonrú ón bpointe seo ar aghaidh, nó an tsraith iomlán?",
    "forwardText": "Ar aghaidh",
    "seriesText": "Sraith",
    "viewTimelineTooltipText": "Féach ar Amlíne",
    "nextPropertyTooltipText": "Maoin Eile",
    "noneText": "(aon cheann)",
    "shareText": "Comhroinn",
    "shareStartFilename": "imeachtaí_roinnte_",
    "previousPropertyTooltipText": "Maoin Roimhe Seo",
    "jumpToDateTitle": "Léim Go Dáta",
    "goText": "Téigh"
};