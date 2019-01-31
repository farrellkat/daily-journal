// set button to variable
const button = document.getElementById("submitButton")
//click button
button.onclick = (e) => { 

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
}
//Post HTML component to DOM
let domFunction = (parsedEntries) => {
    console.table(parsedEntries)
    revEntries = parsedEntries.reverse()
    revEntries.forEach(entry => {
        let domEntry = makeJournalEntryComponent(entry)
        document.querySelector(".entryLog").innerHTML += domEntry
        document.getElementById("myForm").reset();
    })
}