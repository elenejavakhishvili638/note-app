import React, { useState } from 'react'
import "./NewNote.css"
import {AddNoteProps} from "../interfaces/propsInterface"

export const NewNote: React.FC<AddNoteProps> = ({addNotes}) => {
  const [noteText, setNoteText] = useState<string>("")
  const length = 200
  // console.log(noteText)

  const handleClick = () => {
    // localStorage.setItem("note", JSON.stringify(noteText))
    if (noteText.trim().length > 0) {
      addNotes(noteText)
      setNoteText("")
    }
    // setLength(0)
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    
    if(length - event?.target.value.length >= 0) {
      setNoteText(event?.target.value)
    }
  }



  return (
    <div className='note new'>
        <textarea onChange={handleChange} rows={8} value={noteText}  placeholder="Type to add a note..." />
        <div className='note-footer' >
            <p>{length - noteText.length} Remaining</p>
            <button className='save-btn' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

  // try {
  //   const result = JSON.parse(localStorage.getItem("note") || "");

  //   console.log(result)
  // } catch (err) {
  //   console.log("error", err)
  // }

  // console.log(JSON.parse(localStorage.getItem("note") || ""))