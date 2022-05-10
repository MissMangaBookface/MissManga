import {FC, useState} from 'react'
import './loginPage.css'
import Register from '../register/Register'
import Main from '../../views/main/Main'

const InlogPage: FC = () => {

  const [openRegister, setOpenRegister] = useState(false)

  const openRegisterFunc = () => {
      setOpenRegister(true)
  }

  return (
    <>
    {openRegister === false ?
          <section className='login-square'>
            <h1 className='signin-heading'>SIGN IN</h1>
            <div className='input-div'>
                <input
                  className="name-input"
                  placeholder='Username'
                />
                <input
                  className='password-input'
                  placeholder='Password'
                  type="password"
                />
              </div>
         

              <div className='button-area'>
                  <button className='login-btn'>Go!</button>
                  <div className='register-div'>
                      <p className='not-a-member'>Not a member yet?</p>
                      <p onClick={() => openRegisterFunc()} className='register'><i>Register</i></p>
                  </div>
              </div>
          </section>
          : <Register/>}
     
    </>
  )
}

export default InlogPage