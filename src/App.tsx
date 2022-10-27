import React, {useState, useEffect} from 'react';
import {nanoid} from "nanoid"
import './App.css';
import NotesList from './components/NotesList';
import {Note} from "./interfaces/noteInterface"
import SearchBar from './components/SearchBar';
import {Header} from './components/Header';

const App: React.FC = () => {

  const [notes, setNotes] = useState<Note[]>([])
  const [searchValue, setSearchValue] = useState<string>("")
  const [isDark, setIsDark] = useState<boolean>(false)


useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem("note") || "")
  
  console.log(savedNotes)
  
  if(savedNotes) {
    setNotes(savedNotes)
  }
}, [])

useEffect(() => {
  localStorage.setItem("note", JSON.stringify(notes))
},[notes])

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

  // const searchNote = (searchText: string) => {

  //   // const filteredText = notes.filter((note) => note.note.toLowerCase().includes(searchText))
  //   // console.log(filteredText)
  //   // setNotes(filteredText) 
  // }

  return (
    <div className={`${isDark && "dark"}`}>
    <div className='container'>
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <SearchBar
        searchNote={setSearchValue}
      />
      <NotesList
        notes={notes.filter((note) => note.note.toLowerCase().includes(searchValue))}
        addNotes={addNote}
        deleteNote={deleteNote}
      />
    </div>
    </div>
  )
}

export default App

