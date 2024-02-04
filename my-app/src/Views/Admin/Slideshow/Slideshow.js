import React, { useState, useEffect } from 'react';
import axiosClient from '../../../Components/axiosClient';
import  "./slideshow.scss";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



const SlideshowHome = () => {
 const [slideshowItems, setSlideshowItems] = useState([]);


    useEffect(() => {
        axiosClient.get(`/Slideshows`)
            .then(res => setSlideshowItems(res.data));
    }, []); 



    return (
        <>         
        <Carousel className='slideshowHome'>
            {slideshowItems.map((item) => (
                <Carousel.Item key={item.id} >
                    <Link to={item.url} >
                    <img className='image' src={`https://localhost:7104/images/slideshow/${item.image}`} alt={item.title} />
                        <Carousel.Caption>
                            <h3>{ item.title}</h3>
                        {/* <p> { item.description}</p>   */}
                             
                        </Carousel.Caption>
                        </Link>
                </Carousel.Item>
            ))}
            </Carousel>
 
    </>
    );
};

export default SlideshowHome;
