import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slide-1.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slide-2.jpg"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slide-3.jpg"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
