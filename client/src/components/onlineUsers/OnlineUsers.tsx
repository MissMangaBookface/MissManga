import { useEffect, useState } from 'react'
import UserService from '../api/service/UserService'
import './onlineUsers.css'
import { ReadUser } from '../../components/interfaces/IUser'

const OnlineUsers = () => {
    const [onlineUsers, setOnlineUsers] = useState<Array<ReadUser>>([])

    useEffect(() => {
        getOnlineUsers()
    },[])

   const getOnlineUsers = () => {
       UserService.getOnlineUsers()
       .then(res => {
        setOnlineUsers(res.data)
        console.log(onlineUsers)
       })
       .catch(error => console.log(error))
   }
    
  return (
    <div className='online-users-container'>
        <h2> Online Users: </h2>
        <div>
            {onlineUsers.map(user => (
                <p>{user.username}</p>
            ))}
        </div>
    
    </div>
  )
} 

export default OnlineUsers