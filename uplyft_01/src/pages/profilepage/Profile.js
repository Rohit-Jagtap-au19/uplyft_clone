import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './profile.scss'

const Profile = () => {
  return (
    <section className='Profile'>
      <Navbar/>
      <div className="ProfilePage">
        <Sidebar/>
        <div className="Profile_data">
        <h1>Comming soon</h1>
        </div>
      </div>
    </section>
  )
}

export default Profile