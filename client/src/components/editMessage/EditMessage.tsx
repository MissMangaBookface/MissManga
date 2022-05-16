import {useState, FC } from 'react'
import './editMessage.css'

interface Props {
    message: string
    updateMessage: (_message: string) => void
}

const EditMessage:FC<Props> = ({message, updateMessage}) => {
    const [editMessage, setEditMessage] = useState(message)

  return (
    <div className='edit-window'>
    <h3 className='edit-text'>Edit your post:</h3>
    <textarea
        className='edit-message-input'
        value={editMessage}
        onChange={e => setEditMessage(e.target.value) }
    />
    <button className='done-btn' onClick={() => updateMessage(editMessage)}>Done</button>
</div>
  )
}

export default EditMessage