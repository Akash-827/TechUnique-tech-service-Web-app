import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/fullweb.jpg"
import img2 from "../assets/971.jpg"

const Services = () => {
  return (
    <div className='services'>

      <Carousel
      infiniteLoop
      autoPlay
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      interval={1000}
      >

    <div>
      <img src={img1} alt="item1" />
      <p className='legend'>Full Stack</p>
    </div>

    <div>
      <img src={img2} alt="item2" />
      <p className='legend'>Peer-to-peer Support</p>
    </div>

      </Carousel>
    </div>
  )
}

export default Services