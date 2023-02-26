import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './dashboard.scss'

const Dashboard = () => {
  return (
    <section className='Dashboard'>
        <Navbar/>
        <div className="DashboardPage">
            <Sidebar/>
            <div className="dashboard_container">
                <h1>Comming soon</h1>
            </div>
        </div>
    </section>
  )
}

export default Dashboard