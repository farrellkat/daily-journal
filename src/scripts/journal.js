const button = document.getElementById("submitButton")

button.onclick = (e) => {
    e.preventDefault()
    let date = document.getElementById("journalDate").value
    let concepts = document.getElementById("conceptsInput").value
    let entry = document.getElementById("journalEntry").value
    let mood = document.getElementById("moodBox").value
    
    let dailyEntryArray = {
        date: date,
        concepts: concepts,
        entry: entry,
        mood: mood
    }
    
    console.log(dailyEntryArray)
}



