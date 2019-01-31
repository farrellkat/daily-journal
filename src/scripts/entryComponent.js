//Create HTML component
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