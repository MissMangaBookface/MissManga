import { FC, useState } from 'react'
import MessageService from '../api/service/MessageService'
import EditMessage from '../editMessage/EditMessage'
import Menu from '../menu/Menu'
import './card.css'

interface Props {
  message: string
  username: string
  id: string
  getAllMesages:() => void
}

const Card:FC<Props>=({message, username, id, getAllMesages}) => {
  const [menu, setMenu] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)

  const toggleMenu = () => {
      setMenu(!menu)
  }

  const deleteMessageFunc = () => {
    MessageService.deleteMessage(id)
    .then(res => {
      console.log(res.data)
      getAllMesages()
      toggleMenu()
    })
    .catch(error => console.log(error))
  }

  const toggleEditFunc = () => {
    setToggleEdit(!toggleEdit)
    toggleMenu()
  }

  const updateMessage = (_message: string) => {
    const _newMessage = {
        message:_message
    }

    MessageService.updateMessage(id, _newMessage)
    .then(res => {
      setToggleEdit(!toggleEdit)
      getAllMesages()     
    })
    .catch(error => console.log(error))

  }

  return (
    <div className='card'>
      <h3 className='card-name'>{username}:</h3>
        <p className='card-message'>{message}</p>
        <div className='circle' onClick={() => toggleMenu()}><span className='dots'>...</span></div>
        {menu && <Menu deleteMessageFunc={deleteMessageFunc} toggleEditFunc={toggleEditFunc}/>}
        {toggleEdit && <EditMessage message={message} updateMessage={updateMessage}/> }
    </div>
  )
}

export default Card