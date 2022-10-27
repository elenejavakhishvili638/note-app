import React from 'react'
import "./SearchBar.css"
import {BiSearchAlt} from "react-icons/bi"
import {SearchBarProps} from "../interfaces/propsInterface"

const SearchBar: React.FC<SearchBarProps> = ({searchNote}) => {

    const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        searchNote(event?.target.value)
    }

  return (
    <div className='search-bar'>
        <BiSearchAlt className='search-icon' />
        <input className='search' placeholder='search...' type="text" onChange={handleChange} />
    </div>
  )
}

export default SearchBar