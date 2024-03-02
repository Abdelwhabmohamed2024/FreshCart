import React from "react";
import Slider from "react-slick";
import style from "./MainSlider.module.css";
import slide1 from "../../assets/images/slider-image-3.jpeg";
import slide2 from "../../assets/images/slider-image-2.jpeg";
import slide3 from "../../assets/images/blog-img-2.jpeg";
import slide4 from "../../assets/images/grocery-banner.png";
import slide5 from "../../assets/images/grocery-banner-2.jpeg";

export default function MainSilder() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className={`${style.imgees}`}>
        <div className="container">
          <div className="row my-3 gx-0">
            <div className="col-md-12">
              <Slider {...settings}>
                <img src={slide1} className="w-100" height={400} alt="" />
                <img src={slide2} className="w-100" height={400} alt="" />
                <img src={slide3} className="w-100" height={400} alt="" />
                <img src={slide4} className="w-100" height={400} alt="" />
                <img src={slide5} className="w-100" height={400} alt="" />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}