import { FC, useState, useEffect } from 'react'
import CommentService from '../api/service/CommentService'
import { ReadComment } from '../interfaces/IComments'
import './commentCard.css'

interface Props {
  messageId: string
  updateCounter: (num: number) => void
}


const CommentCard:FC<Props> = ({messageId, updateCounter}) => {

  const [comment, setComment] = useState('')
  const [user, setUser] = useState<string | null>('')
  const [data, setData] = useState<Array<ReadComment>>([])


  useEffect(() => {
    setUser(localStorage.getItem("username"))
    getComments()
  }, [])

  const createCommentFunc = () => {
      const newComment = {
          text: comment,
          name: user,
          messagekey: messageId
      }
      CommentService.createComment(newComment)
      .then(res => {
          setComment('')
          getComments()
      })
  }


  const getComments = () => {
    const messageKey = {
        messagekey: messageId
      }
      CommentService.searchByKey(messageKey)
      .then(response => {
        setData(response.data)
        updateCounter(response.data.length)

      })
      .catch(error => console.log(error))
    }



  return (
    <div className='comment-card'>
               {data.map(item => (
                 <div className="item-card">
                    <p className='item-name'>{item.name} :</p>
                    <p className='item-text'>{item.text}</p>
                 </div>
               ))}
        <section className='comment-input-section'>
            <input 
                className='comment-input'
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <button onClick={() => createCommentFunc()} className='send-btn' data-testid='btnSendCard' >Send</button>
        </section>
    </div>
  )
}

export default CommentCard