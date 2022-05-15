import React, { useState, useEffect } from 'react'
import './header.css'

const Header = () => {
    const [username, setUsername] = useState<string | null>('')

    useEffect(() => {
        setUsername(localStorage.getItem("username"))
    }, [])

  return (
    <div className='header'>
        <h2 className='header-name'>{username}</h2>
    </div>
  )
}

export default Header