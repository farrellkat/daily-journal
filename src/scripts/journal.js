/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
//show saved entries on page load
API.getJournalEntries().then(parsedEntries => {
    domFunction(parsedEntries)
    })


