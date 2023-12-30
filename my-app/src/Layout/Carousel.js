import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

const Slideshow = () => {
  return (
    <Carousel style={{width:"90%", margin:"auto"}}>
      <Carousel.Item >
        <img src= "/assets/img/food/16.jpg" alt= "Image 1" style={{width:"100%"}}></img>
        <Carousel.Caption>
          <h3 style={{color:"black"}}>First slide label</h3>
          <p style={{color:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= "/assets/img/food/18.jpg" alt= "Image 2" style={{width:"100%"}}></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src= "/assets/img/food/21.jpg" alt= "Image 2" style={{width:"100%"}}></img>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
