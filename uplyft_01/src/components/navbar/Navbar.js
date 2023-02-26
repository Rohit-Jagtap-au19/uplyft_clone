import React from 'react'
import './navbar.scss'
import {Link} from 'react-router-dom'
import logo from '../../assets/favicon_io/transparent.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
    <nav>
    <Link to='/'><img src={logo} alt="loading.." /></Link>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/login'>Log in</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar