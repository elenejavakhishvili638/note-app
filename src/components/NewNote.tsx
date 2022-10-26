import React, { useState } from 'react'
import "./NewNote.css"
import {AddNoteProps} from "../interfaces/propsInterface"

export const NewNote: React.FC<AddNoteProps> = ({addNotes}) => {
  const [noteText, setNoteText] = useState<string>("")
  // console.log(noteText)

  const handleClick = () => {
    // localStorage.setItem("note", JSON.stringify(noteText))
    addNotes(noteText)
  }

  // try {
  //   const result = JSON.parse(localStorage.getItem("note") || "");

  //   console.log(result)
  // } catch (err) {
  //   console.log("error", err)
  // }

  // console.log(JSON.parse(localStorage.getItem("note") || ""))


  return (
    <div className='note new'>
        <textarea onChange={(event) => setNoteText(event?.target.value)} rows={8}  placeholder="Type to add a note..." />
        <div className='note-footer' >
            <p>words</p>
            <button className='save-btn' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}
