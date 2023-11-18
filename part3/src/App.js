import { Note } from './Note.js'
import { useEffect, useState } from 'react'
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNote";

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then((response) => response.json())
      //   .then((json) => {
      //     setNotes(json);
      //     setLoading(false) })
      getAllNotes().then((notes) => {
        setNotes(notes)
        setLoading(false)
      })
    }, 2000);
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userID: 1
    }

    createNote(noteToAddToState).then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote))
      })
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      {loading ? 'Cargando...' : ''}
      <ol>
        {
          notes
            .map((note) => (
              <Note key={note.id} {...note} />
            ))
        }
      </ol>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={newNote} />
          <button>Crear notas</button>
        </form>
      </div>
    </div>
  )
}