import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './company.scss'

const Company = () => {
  return (
    <section className='Company'>
    <Navbar/>
    <div className="Company_page">
        <Sidebar/>
        <div className="company_data">
            <h1>Company data comming soon</h1>
        </div>
    </div>
    </section>
  )
}

export default Company