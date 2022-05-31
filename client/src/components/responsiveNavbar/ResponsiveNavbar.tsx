import {useState} from 'react'
import './responsiveNavbar.css'
import { GrMenu } from 'react-icons/gr';

const ResponsiveNavbar = () => {
        const [toggleMenu, setToggleMenu] = useState(false)

const toggleMenuFunc = () => {
    setToggleMenu(!toggleMenu)
}

  return (
    <div>
        <GrMenu className='menu-icon' onClick={() => toggleMenuFunc()}/>

        <ul className={toggleMenu ? 'responsive-menu show': 'responsive-menu'}>
            <li className='responsive-list-item'>InfoMissManga</li>
            <li className='responsive-list-item'>Contact</li>
            <li className='responsive-list-item'>About Us</li>
            <li className='responsive-list-item'>My Page</li>
            <li className='responsive-list-item'>Log in</li>
          
        </ul>

    </div>
  )
}

export default ResponsiveNavbar