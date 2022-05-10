import { useState } from 'react'
import MessageService from '../../components/api/service/MessageService'

const Main = () => {
    const [text, setText] = useState('')

    const postMessageFunc = () => {
          const newMessage = {
            "message": text
          }

          MessageService.createMessage(newMessage)
          .then(response => {
            console.log(response.data)
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

    </div>
  )
}

export default Main