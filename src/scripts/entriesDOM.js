const button = document.getElementById("submitButton")
let journalArray = []

button.onclick = (e) => {
    e.preventDefault()



    let date = document.getElementById("journalDate").value
    let concepts = document.getElementById("conceptsInput").value
    let entry = document.getElementById("journalEntry").value
    let mood = document.getElementById("moodBox").value

    let journalEntries =
    {
        date: date,
        concepts: concepts,
        entry: entry,
        mood: mood
    }
    journalArray.push(journalEntries)
}

let domFunction = (parsedEntries) => {
    console.table(parsedEntries)
    console.log(parsedEntries)
    parsedEntries.forEach(entry => {
        let domEntry = makeJournalEntryComponent(entry)
        document.querySelector(".entryLog").innerHTML += domEntry
        document.getElementById("myForm").reset();
    })
}