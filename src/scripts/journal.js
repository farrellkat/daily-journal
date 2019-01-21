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
    let domEntry = makeJournalEntryComponent(journalEntries)
    document.querySelector(".entryLog").innerHTML += domEntry
    document.getElementById("myForm").reset();
    console.log(journalArray)

}
const makeJournalEntryComponent = (journalEntries) => {
    
   return `
   <section class="printedJournalEntry">
    <div class="journalHeaderDiv">
        <section class="printedDate print">${journalEntries.date}</section>
        <section class="printedConcepts print">${journalEntries.concepts}</section>
        <section class="printedMood print">${journalEntries.mood}</section>
        </div>
        <section class="printedEntry print">${journalEntries.entry}</section>
        </section>
        `
}
