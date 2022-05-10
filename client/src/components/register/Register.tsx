import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='register-card'>
        <h1 className='join-bookface'>Join BookFace now!</h1>
        <h3 className='fill-in'>Please fill in the register form below ...</h3> 
        <div className='register-name-div'>
        <p className='register-name'>Name:</p>
        <input
            className='register-name-input'
        />
        </div>
        <div className='register-username-div'>
        <p className='register-username'>Username:</p>
        <input
            className='register-username-input'
        />
        </div>
        <div className='register-password-div'>
        <p className='register-password'>Password:</p>
        <input
            className='register-password-input'
            type="password"
        />
        </div>
        <button className='register-button'>Register Now!</button>

    </div>
  )
}

export default Register