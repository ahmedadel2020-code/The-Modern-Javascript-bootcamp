const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }

    })
}

const findNote = function(note, noteTitle) {
    return notes.find(function(note, index) {
        return note.title === noteTitle
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    })

}


// console.log(findNotes(notes, 'spain'))


// const note = findNote(notes, 'Habits to work on')
// console.log(note)
sortNotes(notes)
console.log(notes)