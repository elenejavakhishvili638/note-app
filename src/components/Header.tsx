import React from 'react'
import "./Header.css"
import {HeaderProps} from "../interfaces/propsInterface"

export const Header:React.FC<HeaderProps> = ({isDark, setIsDark}) => {

    const handleClick = () => {
        setIsDark((prevValue) => !prevValue)
    }

  return (
    <div className="header">
        <h2 className={`${isDark ? "dark-mode" : ""}`} >Notes</h2>
        <button onClick={handleClick} className='toggle-btn' >Toggle Mode</button>
    </div>
  )
}
