import React from "react";
import { AiFillStar } from "react-icons/ai";
import Image_Slider from "../../components/imageslider/Image_Slider";
import "./landingpage.scss";

import img1 from "../../assets/WorkLogo/image2.png";
import img2 from "../../assets/WorkLogo/image4.png";
import img3 from "../../assets/WorkLogo/image5.png";
import img4 from "../../assets/WorkLogo/image6.png";
import img5 from "../../assets/WorkLogo/image22.png";
import img6 from "../../assets/WorkLogo/image24.png";

import img10 from "../../assets/Compnay_logo/image40.png";
import img11 from "../../assets/Compnay_logo/image42.png";
import img12 from "../../assets/Compnay_logo/image46.png";
import img13 from "../../assets/Compnay_logo/image48.jpg";
import img14 from "../../assets/Compnay_logo/image43.png";
import img15 from "../../assets/Compnay_logo/image44.png";
import img16 from "../../assets/fallbackimage.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";


const Landingpage = () => {
  const learningPath = [
    {
      name:'sign up',
      img : img1
    },
    {
      name:'Select and enroll',
      img : img2
    },
    {
      name:'learn and practise',
      img : img3
    },
    {
      name:'submit assignment',
      img : img4
    },
    {
      name:'build resume and upload',
      img : img5
    },
    {
      name:'get visible get hired',
      img : img6
    },
]

  return (
    <div className="Landingpage">
    <Navbar/>
      <section className="Hero_Banner">
        <h1>
          Virtual Internship That Has A Promise Of @Office Internship And Job?
        </h1>
      </section>
        <Image_Slider/>
        <section className="Learning_Path">
        <h1>How Does It Work</h1>
        <div className="work">
          {
            learningPath.map((item)=>{
              return(
                <div className="work_buttons">
                <img src={item.img} alt="loading.." />
                <span>{item.name}</span>
                </div>
              )
            })
          }
        </div>
        </section>
        <section className="Partner">
          <div className="University_Partner">
            <h3>Institutions, College & University Partner</h3>
            <hr />
            <div className="partners">
              <img src={img10} alt="image" />
              <img src={img11} alt="image" />
              <img src={img12} alt="image" />
              <img src={img13} alt="image" />
              <img src={img14} alt="image" />
              <img src={img15} alt="image" />
            </div>
          </div>
          <div className="User_Review">
            <div className="view_profile">
              <span>User Review</span>
              <img src={img16} alt="" />
            </div>
            <div className="review">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis blanditiis quam cum totam eveniet reprehenderit est
                rerum repellendus.
              </span>
              <div className="rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  );
};

export default Landingpage;
