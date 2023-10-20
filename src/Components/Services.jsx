import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img2 from "../assets/3.jpg";
import img3 from "../assets/4.jpg";



const Services = () => {
  return (
   <Carousel 
   infiniteLoop
   autoPlay
   showThumbs= {false}
   showStatus = {false}
   showArrows = {false}
   interval={1000} 
   >
    
    <div>
        <img src={img2} alt="imga" />
        <p className='legend' style={{backgroundColor : "white" , color : "black"}}>Full Stack</p>
    </div>
    <div>
        <img src={img3} alt="imga" />
        <p className='legend' style={{backgroundColor : "white" , color : "black"}}>Full Stack</p>
    </div>
   </Carousel>
  )
}

export default Services;
