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
const makeJournalEntryComponent = (entries) => {
    
    return `
    <section class="printedJournalEntry">
    <div class="journalHeaderDiv">
    <section class="printedDate print">${entries.date}</section>
    <section class="printedConcepts print">${entries.concepts}</section>
    <section class="printedMood print">${entries.mood}</section>
    </div>
    <section class="printedEntry print">${entries.entry}</section>
    </section>
    `
}

fetch("http://localhost:3000/entries")
.then(entries => entries.json())  // Parse as JSON
.then(parsedEntries => {
    console.table(parsedEntries)
    parsedEntries.forEach(entry => {
        let domEntry = makeJournalEntryComponent(entry)
        document.querySelector(".entryLog").innerHTML += domEntry
        document.getElementById("myForm").reset();
        console.log(journalArray)
    })
    
    })