import {FC, useState} from 'react'
import './loginPage.css'
import Register from '../register/Register'
import Main from '../../views/main/Main'
import sailormoon from '../../img/mainSailor.png'

const InlogPage: FC = () => {
  const [openRegister, setOpenRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const openRegisterFunc = () => {
      setOpenRegister(!openRegister)
  }

  const LoginFunc = () => {
    console.log(email, password)
  }



  return (
    <>
    {openRegister === false ?
          <div className='login-div'>
          <img className='sailor-pic' src={sailormoon} alt="sailor moon"/>
          <section className='login-square'>
            <h1 className='signin-heading'>SIGN IN</h1>
            <div className='input-div'>
                <input
                  className="email-input"
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  className='password-input'
                  placeholder='Password'
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
         

              <div className='button-area'>
                  <button className='login-btn' onClick={() => LoginFunc()}>Go!</button>
                  <div className='register-div'>
                      <p className='not-a-member'>Not a member yet?</p>
                      <p onClick={() => openRegisterFunc()} className='register'><i>Register</i></p>
                  </div>
              </div>
          </section>
          </div>
          : <Register openRegisterFunc={openRegisterFunc}/>}
     
    </>
  )
}

export default InlogPage