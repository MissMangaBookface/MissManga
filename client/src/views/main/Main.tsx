import { useState } from 'react'

const Main = () => {
    const [text, setText] = useState('')

    const postMessageFunc = () => {
          
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