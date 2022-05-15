import { FC } from 'react'
import './card.css'

interface Props {
  message: string
}

const Card:FC<Props>=({message}) => {
  return (
    <div className='card'>
        <p className='message'>{message}</p>
    </div>
  )
}

export default Card