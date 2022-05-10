import { useState, useEffect } from 'react'
import MessageService from '../../components/api/service/MessageService'
import Card from '../../components/card/Card'
import { ReadMessage } from '../../components/interfaces/IMessage'

const Main = () => {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState<Array<ReadMessage>>([])

    const postMessageFunc = () => {

          const newMessage = {
            "message": text
          }

          MessageService.createMessage(newMessage)
          .then(response => {
             console.log(response.data)
             setText('')
          })
          .catch(error => console.log(error))
    }


    const getAllMesages = () => {
      MessageService.getAllMessages()
      .then(response => {
        setMessages(response.data)
        console.log(messages)
      })
    }

    useEffect(() => {
      getAllMesages()
    }, [])

  return (
    <div>
        <input
          placeholder="write something..."
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
        />
        <button onClick={() => postMessageFunc()}>POST</button>
        <button onClick={() => getAllMesages()}>Get ALL</button>
          {messages.map(msg => (
                <Card message={msg.message} />
          ))}
              
       
       
    </div>
  )
}

export default Main