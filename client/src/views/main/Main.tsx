import { useState } from 'react'
import MessageService from '../../components/api/service/MessageService'

const Main = () => {
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')

    const postMessageFunc = () => {
          const newMessage = {
            "message": text
          }

          MessageService.createMessage(newMessage)
          .then(response => {
             setMessage(response.data.message)
          })
          .catch(error => console.log(error))
    }

  return (
    <div>
        <input
          placeholder="write something..."
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
        />
        <button onClick={() => postMessageFunc()}>POST</button>
        <h1>{message}</h1>
    </div>
  )
}

export default Main