import React, {useState} from 'react'
import "./SearchBar.css"
import {BiSearchAlt} from "react-icons/bi"
import {SearchBarProps} from "../interfaces/propsInterface"

const SearchBar: React.FC<SearchBarProps> = ({searchNote}) => {

    // const [searchValue, setSearchValue] = useState<string>("")

    const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        // setSearchValue(event?.target.value)
        // console.log(event?.target.value)
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