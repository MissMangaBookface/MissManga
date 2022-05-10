import { FC } from 'react'

interface Props {
  message: string
}

const Card:FC<Props>=({message}) => {
  return (
    <div>
        <p>{message}</p>
    </div>
  )
}

export default Card