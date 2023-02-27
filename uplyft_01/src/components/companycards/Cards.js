import './cards.scss'
import { Link } from "react-router-dom";
import SectionData from '../../assets/section1.json'

const Cards = () => {

  return (

    <div className='companyCards'>
    {
      SectionData.map((item)=>{
        return (
          <div className="card">
            <img src={item.project_image} alt="loading.." />
            <div className="card_data">
            <span className='company_name'>{item.company_name}</span>
            <span className='Title'>{item.project_title}</span>
            <span className='Field'>{item.project_field}</span>
            <span className='time'>{item.eta}</span>
            <Link to='/company'>
            <button className='Apply'>Apply Now</button>
            </Link>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default Cards