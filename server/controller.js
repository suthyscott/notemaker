let notes = [{note: 'Infiltrate a classroom and become the first homeschooler to teach code.', importance: 10, id: 0}, {note: 'After first note is achieved, learn how to code.', importance: 3, id: 1}]
let id = 2
module.exports ={
    getNotes: (req, res) => {
        res.status(200).send(notes)
    },
    addNote: (req, res) => {
        const {newNote, newImportance} = req.body

        notes.push({note: newNote, importance: newImportance, id})
        id++

        res.status(200).send(notes)
    },
    updateNote: (req, res) => {
        const {id} = req.params
        const {newNote, newImportance} = req.body
        
        notes.forEach(e => {
            if(e.id === +id){
                console.log(e.id, id)
                e.note = newNote 
                e.importance = newImportance
                console.log(e)
            } 
            
        })

        res.status(200).send(notes)
    }
}