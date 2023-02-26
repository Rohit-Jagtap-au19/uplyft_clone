import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './assignment.scss'

const Assignment = () => {
  return (
    <section className='Assignment'>
        <Navbar/>
        <div className="Assignment_Page">
          <Sidebar/>
          <div className="Assignment_Container">
          <h1> Assignments Comming soon</h1>
          </div>
        </div>
    </section>
  )
}

export default Assignment