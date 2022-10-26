import React, {useState} from 'react';
import {nanoid} from "nanoid"
import './App.css';
import NotesList from './components/NotesList';
import {Note} from "./interfaces/noteInterface"

const App: React.FC = () => {

  const [notes, setNotes] = useState<Note[]>([])

  const addNote = (text: string) => {
    // console.log(text)
    const date = new Date()
    setNotes([...notes, {id: nanoid(), note: text, date: date.toLocaleDateString()}])
  }

  const deleteNote = (id: string) => {
    // console.log(id)
    const filteredNotes = notes.filter((note) => note.id !== id)
    setNotes(filteredNotes)
  }

  return (
    <div className='container'>
      <NotesList
        notes={notes}
        addNotes={addNote}
        deleteNote={deleteNote}
      />
    </div>
  )
}

export default App

// {
//   id: nanoid(),
//   note: "asas",
//   title: "sasas",
//   date: "12/12/12"
// },
// {
//   id: nanoid(),
//   note: "asas",
//   title: "sasas",
//   date: "12/13/12"
// },
// {
//   id: nanoid(),
//   note: "asas",
//   title: "sasas",
//   date: "12/12/12"
// }