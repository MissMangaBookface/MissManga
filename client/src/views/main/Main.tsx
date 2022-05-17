import { useState, useEffect } from 'react'
import MessageService from '../../components/api/service/MessageService'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import { ReadMessage } from '../../components/interfaces/IMessage'
import './main.css'
import sailormoon from '../../img/mainSailor.png'
import OnlineUsers from '../../components/onlineUsers/OnlineUsers'

const Main = () => {
    const [text, setText] = useState<string>('')
    const [messages, setMessages] = useState<Array<ReadMessage>>([])
    const [username, setUsername] = useState<string | null>('')


    useEffect(() => {
      getAllMesages()
      setUsername(localStorage.getItem("username"))
    }, [])

    const postMessageFunc = () => {

          const newMessage = {
            "username": username,
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
    <img src={sailormoon} alt="" className='sailors'/>
    <OnlineUsers/>
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
                <Card message={msg.message} username={msg.username} id={msg._id} getAllMesages={getAllMesages}/>
          ))}
              
       
       
    </div>
    </>
  )
}

export default Main