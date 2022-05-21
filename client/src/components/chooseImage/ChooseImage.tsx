import { FC, useEffect, useState } from 'react'
import './chooseImage.css'
import moon from '../../img/userSailorMoon.png'
import uranus from '../../img/userneptuneUranus.png'
import mercury from '../../img/userSailorMercury.png'
import venus from '../../img/userSailorVenus.png'
import magic from '../../img/userWandMagic.png'
import UserService from '../api/service/UserService'

interface Props {
  toggleImagesFunc: () => void
}


const ChooseImage:FC<Props> = ({toggleImagesFunc}) => {
  const [id, setId] = useState<string | null>('')


  useEffect(() => {
    setId(localStorage.getItem("userId"))
  })

  const clickedImage = (choice: string) => {
    console.log(id, choice)
        if (choice === 'moon') {
          const newImage = {
            image: "http://localhost:3000/static/media/userSailorMoon.cfd7d6d7bb97b1ac1432.png"
          }
           UserService.updateUserImage(id, newImage)
           .then(res => {
             console.log(res.data.image)
             localStorage.setItem("userImage", res.data.image)
             toggleImagesFunc()
           })
           .catch(error => console.log(error))
        }
         else if (choice === 'uranus') {
           const newImage = {
            image: "http://localhost:3000/static/media/userneptuneUranus.b1d177c363e6aaeaba64.png"
           }
           UserService.updateUserImage(id, newImage)
           .then(res => {
             console.log(res.data.image)
             localStorage.setItem("userImage", res.data.image)
             toggleImagesFunc()
           })
           .catch(error => console.log(error))
         }
       
        
      
  }


  return (
    <div className='container'>
        <div className='choose-image-container'>
          <img src={moon} alt="" onClick={() => clickedImage('moon')} />
          <img src={uranus} alt="" onClick={() => clickedImage('uranus')}/>
          <img src={mercury} alt="" onClick={() => clickedImage('mercury')}/>
          <img src={venus} alt="" onClick={() => clickedImage('venus')}/>
          <img src={magic} alt="" onClick={() => clickedImage('magic')}/>
        </div>
    </div>
  )
}

export default ChooseImage
