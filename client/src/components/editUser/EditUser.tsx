import { FC, useState } from 'react'
import './editUser.css'
import { GrClose } from "react-icons/gr";
import UserService from '../api/service/UserService';

interface Props {
    toggleEditFunc: () => void
    username: string | null
}

const EditUser:FC<Props> = ({toggleEditFunc, username}) => {

    const [newUsername, setNewUsername] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const updateUser = () => {
        const _updateUser = {
            username: newUsername,
            email: newEmail,
            password: newPassword,
            active: true
        }

        
    }

  return (
    <div className='edit-user-window'>
        <GrClose className='close' onClick={() => toggleEditFunc()}/>
        <h1 className='edit-user-headline'>Edit Profile</h1>
        <section className='edit-username-section'>
        <h2 className='edit-username'>Username:</h2>
            <input 
                type="text"
                className="edit-username-input" 
                onChange={e => setNewUsername(e.target.value)}
            />
        </section>
        <section className='edit-email-section'>
        <h2 className='edit-email'>Email:</h2>
            <input 
                type="text"
                className="edit-email-input" 
                onChange={e => setNewEmail(e.target.value)}
            />
        </section>
        <section className='edit-password-section'>
        <h2 className='edit-password'>Password:</h2>
            <input 
                type="password"
                className="edit-password-input" 
                onChange={e => setNewPassword(e.target.value) }
            />
        </section>
        <section className='edit-user-btn-area'>
            <button className='edit-user-cancel-btn' onClick={() =>toggleEditFunc()}>Cancel</button>
            <button className='edit-user-save-btn' onClick={() => updateUser() }>Save</button>
        </section>
    </div>
  )
}

export default EditUser