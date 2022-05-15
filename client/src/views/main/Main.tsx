import { useState, useEffect } from 'react'
import MessageService from '../../components/api/service/MessageService'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import { ReadMessage } from '../../components/interfaces/IMessage'
import './main.css'

const Main = () => {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState<Array<ReadMessage>>([])


    useEffect(() => {
      getAllMesages()
    }, [])

    const postMessageFunc = () => {

          const newMessage = {
            "message": text
          }

          MessageService.createMessage(newMessage)
          .then(response => {
             console.log(response.data)
             setText('')
             getAllMesages()
          })
          .catch(error => console.log(error))
    }


    const getAllMesages = () => {
      MessageService.getAllMessages()
      .then(response => {
        setMessages(response.data.sort((a:any ,b:any): any => {return 1}))
      })
    }

  

  return (
    <>
    <Header/>
    <div>
        <div className='input-div'>
        <textarea
          className='input-text'
          placeholder="write something..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='post-btn' onClick={() => postMessageFunc()}>POST</button>
        </div>
          {messages.map(msg => (
                <Card message={msg.message} />
          ))}
              
       
       
    </div>
    </>
  )
}

export default Main