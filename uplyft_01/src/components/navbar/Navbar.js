import React from 'react'
import './navbar.scss'
import logo from '../../assets/favicon_io/transparent.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
    <nav>
    <img src={logo} alt="loading.." />
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">about us</a></li>
            <li><a href="">contact us</a></li>
            <li><a href="">Join Us</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar