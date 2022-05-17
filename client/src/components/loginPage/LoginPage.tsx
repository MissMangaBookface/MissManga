import {FC, useState} from 'react'
import './loginPage.css'
import Register from '../register/Register'
import Main from '../../views/main/Main'
import sailormoon from '../../img/mainSailor.png'
import UserService from '../api/service/UserService'
import { useNavigate } from 'react-router-dom'

const InlogPage: FC = (id, active) => {
  const [openRegister, setOpenRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const openRegisterFunc = () => {
      setOpenRegister(!openRegister)

  }

  const LoginFunc = () => {
    const user = {
      username: username,
      password: password
    }

    UserService.verifyUser(user)
    .then(response => {
      console.log(response.data.message)
      if (response.data.message === true) {
        localStorage.setItem("username", username)
        navigate('/main')
      } else {
        alert('Wrong password or username!')
      }
    })
    .catch(error => console.log(error))
  }



  return (
    <>
    {openRegister === false ?
          <div className='login-div'>
          <img className='sailor-pic' src={sailormoon} alt="sailor moon"/>
          <section className='login-square'>
            <h1 className='signin-heading'>SIGN IN</h1>
            <div className='login-input-div'>
                <input
                  className="username-input"
                  placeholder='Username'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
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