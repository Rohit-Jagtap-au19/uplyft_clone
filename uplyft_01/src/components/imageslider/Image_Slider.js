import React from "react";
import Slider from "react-slick";
import './slider.scss'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/Compnay_logo/image40.png";
import img2 from "../../assets/Compnay_logo/image42.png";
import img3 from "../../assets/Compnay_logo/image46.png";
import img4 from "../../assets/Compnay_logo/image48.jpg";
import img5 from "../../assets/Compnay_logo/image43.png";
import img6 from "../../assets/Compnay_logo/image44.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

const Image_Slider = () => {
    
    const imagesData = [
        img1,img2,img3,img4,img5,img6
    ]

  const settings = {
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
  };

  return (
    <div className="Image_Slider">
    <h3>Explore From A Broad Selection Of Internships Offered By World Leading Companies</h3>
    <div className="slider">
      <Slider {...settings}>
        {imagesData.map((item) => {
          return (
            <div className="card">
                <img src={item} alt="Loading..." />
            </div>
          );
        })}
      </Slider>
    </div>
    </div>
  );
};

export default Image_Slider