import { FC, useState } from 'react'
import MessageService from '../api/service/MessageService'
import EditMessage from '../editMessage/EditMessage'
import Menu from '../menu/Menu'
import './card.css'
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import CommentCard from '../commentCard/CommentCard'

interface Props {
  message: string
  username: string
  id: string
  getAllMesages:() => void
}

const Card:FC<Props>=({message, username, id, getAllMesages}) => {
  const [menu, setMenu] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)
  const [toggleComments, setToggleComments] = useState(false)

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

  const foldCommentsFunc = () => {
      setToggleComments(!toggleComments)
  }

  return (
    <>
      <div className='card'>
        <h3 className='card-name'>{username}:</h3>
          <p className='card-message'>{message}</p>
          <p className='comments' onClick={() => foldCommentsFunc()}>Comments {toggleComments ? <IoMdArrowDropdown className='arrow'/> : <IoMdArrowDropright className='arrow'/>}</p>
          <div className='circle' onClick={() => toggleMenu()}><span className='dots'>...</span></div>
          {menu && <Menu deleteMessageFunc={deleteMessageFunc} toggleEditFunc={toggleEditFunc}/>}
          {toggleEdit && <EditMessage message={message} updateMessage={updateMessage}/> }
      </div>
  
        {toggleComments && <CommentCard/>}
    </>
  )
}

export default Card