import React from 'react'
import Note from './Note'
import "./NotesList.css"
import {Props} from "../interfaces/propsInterface"
import { NewNote } from './NewNote'

const NotesList: React.FC<Props> = ({notes, addNotes}) => {

  return (
    <div className='notes-list'>
        {
          notes.map((note, index) => (
              <Note 
                key={index}
                // title={note.title}
                note={note.note}
                date={note.date}
                id={note.id}
              />
          ))
        }
        <NewNote 
        addNotes={addNotes}
        />
    </div>
  )
}

export default NotesList