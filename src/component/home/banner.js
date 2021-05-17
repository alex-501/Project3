import React, { Component } from 'react'
import Slider from "react-slick";

class Banner extends Component {
    render () {
        var settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <Slider {...settings}>
        <div>
        <img src="images/master-slide-01.jpg" className="heroimage" alt="" />
          
        </div>
        <div>
        <img src="images/master-slide-02.jpg" className="heroimage" alt="" />
          
        </div>
        <div>
        <img src="images/master-slide-03.jpg" className="heroimage" alt="" />
          
        </div>
        <div>
        <img src="images/master-slide-04.jpg" className="heroimage" alt=""/>
          
        </div>
      </Slider>
        )
    }
}

export default Banner