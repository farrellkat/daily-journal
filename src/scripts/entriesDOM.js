// set button to variable
const button = document.getElementById("submitButton")
//click button
button.addEventListener("click", event => { 

    let date = document.getElementById("journalDate").value
    let concepts = document.getElementById("conceptsInput").value
    let entry = document.getElementById("journalEntry").value
    let mood = document.getElementById("moodBox").value
//make object
    let journalEntries =
    {
        "date": date,
        "concepts": concepts,
        "entry": entry,
        "mood": mood
    }
//post object to JSON
    postEntry(journalEntries)
    .then(() => API.getJournalEntries().then(parsedEntries => {
        domFunction(parsedEntries)
        }))
    
    const inputs = document.querySelectorAll("input, textarea")
    inputs.forEach(input => {
        input.value = ""    
    })
    
})


//Post HTML component to DOM
let domFunction = (parsedEntries) => {
    document.querySelector(".entryLog").innerHTML = ""
    revEntries = parsedEntries.reverse()
    revEntries.forEach(entry => {
        let domEntry = makeJournalEntryComponent(entry)
        document.querySelector(".entryLog").innerHTML += domEntry
        // document.getElementById("myForm").reset();
    })

}