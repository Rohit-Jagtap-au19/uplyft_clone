import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Cards from "../../components/companycards/Cards";
import Spinner from '../../components/spinner/Spinner'


import "./home.scss";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const careerData = ["Civil","Mechanical","Electric","Chemical","Solar Engineering",];
  const companyData = ["TCS","Wipro","Airtel","Coc Cola","Infosys",'Infosys',];

  return (
    
    <div className="HomePage">
      <Navbar />
      {loading?(<Spinner/>):
      (<div className="homeContiner">
        <Sidebar />
        <div className="homedata">
          <div className="search">
            <select name="" id="">
              {careerData.map((item) =><option value="">{item}</option>)}
            </select>
            <select name="" id="">
              {companyData.map((item) =><option value="">{item}</option>)}
            </select>
          </div>
          <Cards/>
        </div>
      </div>)
    }
    </div>
  );
};

export default Home;
