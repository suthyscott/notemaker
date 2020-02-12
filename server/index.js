const express = require('express')

const app = express()

const ctrl = require('./controller')

app.use(express.json())

app.get('/api/notes', ctrl.getNotes)
app.post('/api/notes', ctrl.addNote)
app.put('/api/notes/:id', ctrl.updateNote)

const port = 4545


app.listen(port, () => console.log(`Take us to warp ${port}`))