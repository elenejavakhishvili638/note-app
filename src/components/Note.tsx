import React, {useEffect, useState} from 'react'
import "./Note.css"
import {BsTrash} from "react-icons/bs"
import {NoteProps} from "../interfaces/propsInterface"

const Note: React.FC<NoteProps> = ({date, id, note}) => {
  return (
    <div className='note'>
      <div className='note-content'>
        {/* <h3>{title}</h3> */}
        <p>{note}</p>
      </div>
      <div className='note-footer'>
        <p className='date'>{date}</p>
        <button className='delete-icon'><BsTrash /></button>
      </div>
    </div>
  )
}

export default Note


  // const [date, setDate] = useState<string>("")

  // const padTo2Digits = (num: number) => {
  //   return num.toString().padStart(2, '0');
  // }
  
  // const formatDate = (date: Date) => {
  //   return (
  //     [
  //       date.getFullYear(),
  //       padTo2Digits(date.getMonth() + 1),
  //       padTo2Digits(date.getDate()),
  //     ].join('/') 
  //   );
  // }

  // useEffect(() => {
  //   currentDate()
  // })

  // const currentDate = () => {
  //   setDate(formatDate(new Date()))
  // }
  
  // console.log(typeof(formatDate(new Date())));
  // console.log(typeof(new Date()))