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

document.querySelector("#radioBox").addEventListener("click", (e) => {
    let clickedMood = document.querySelector("input[name='moodButton']:checked").value
    document.querySelector(".entryLog").innerHTML = ""
    API.getJournalEntries().then(parsedEntries => {
        domFunction(parsedEntries.filter(entry => entry.mood === clickedMood))
    })
})


document.querySelector("#searchField").addEventListener("keypress", event => {
    if (event.charCode === 13) {
        let entryCollection =[]
        let searchValue = document.querySelector("#searchField").value
        console.log(searchValue)
        API.getJournalEntries().then(parsedEntries => {
            parsedEntries.forEach(entry => {
                for (const value of Object.values(entry)) {
                    if (value.toString().toUpperCase().includes(searchValue.toUpperCase())) {
                    entryCollection.push(entry)
                    } 
                }
            })
            domFunction(entryCollection)
        })
    }
})