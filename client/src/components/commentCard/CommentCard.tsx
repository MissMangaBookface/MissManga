import React from 'react'
import './commentCard.css'

const CommentCard = () => {
  return (
    <div className='comment-card'>
        
        CommentCard
        <section className='comment-input-section'>
            <input 
                className='comment-input'
            />
            <button className='send-btn' data-testid='btnSendCard' >Send</button>
        </section>
    </div>
  )
}

export default CommentCard