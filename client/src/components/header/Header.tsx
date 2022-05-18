import React, { FC, useState, useEffect } from 'react'
import './header.css'

interface Props {
  getOnlineUsers: () => void
}

const Header:FC<Props> = ({getOnlineUsers}) => {
    const [username, setUsername] = useState<string | null>('')

    useEffect(() => {
        setUsername(localStorage.getItem("username"))
        
    }, [getOnlineUsers])

  

  return (
    <div className='header'>
        <h2 className='header-name'>Hi {username}!</h2>
      
    </div>
  )
}

export default Header