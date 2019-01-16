const button = document.getElementById("submitButton")

const makeJournalEntryComponent = (journalEntries) => {
    // main div
    const entry = document.createElement("section")
    entry.className = "printedJournalEntry"
    
    // header div
    const headerDiv = document.createElement("div")
    headerDiv.className = "journalHeaderDiv"
    entry.appendChild(headerDiv)
    
    // create date element
    const entryDate = document.createElement("div")
    entryDate.className = "printedDate print"
    entryDate.textContent = `${journalEntries.date}`
    headerDiv.appendChild(entryDate)
    
    // create concepts element
    const entryConcepts = document.createElement("div")
    entryConcepts.className = "printedConcepts print"
    entryConcepts.textContent = `${journalEntries.concepts}`
    headerDiv.appendChild(entryConcepts)
    
    //create mood element
    const entryMood = document.createElement("div")
    entryMood.className = "printedMood print"
    entryMood.textContent = `${journalEntries.mood}`
    headerDiv.appendChild(entryMood)
    
    // append to headerDiv
    // document.querySelector(".entryLog").appendChild(headerDiv)
    
    // create journal entry element
    const entryEntry = document.createElement("div")
    entryEntry.className = "printedEntry print"
    entryEntry.textContent = `${journalEntries.entry}`
    entry.appendChild(entryEntry)
    
    // append to DOM
    document.querySelector(".entryLog").appendChild(entry)
}

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

    makeJournalEntryComponent(journalEntries)
    document.getElementById("myForm").reset();

}
