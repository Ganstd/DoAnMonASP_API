import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

const Slideshow = () => {
  return (
    <Carousel style={{width:"90%", margin:"auto"}} controls={false} indicators={false} interval={3000}>
      <Carousel.Item >
        <img src="/assets/img/food/16.jpg" alt= "Image 1" style={{width:"100%",transition: "2s"}}></img>
        <Carousel.Caption style={{ height:"200px"}}>
          <h3 style={{color:"black"}}>Bento gà nướng mật ong</h3>
          <p style={{color:"black"}}>Gà nướng mật ong, cơm, rong biển, các món ăn kèm.</p>
          <div style={{textAlign:"center"}}>
                    <button style={{border:"none",backgroundColor:"#ff6600",color:"#fff",padding:"10px ",marginBottom:"10px",width:"30%"}}>
                        <span style={{height:"25px"}}>ADD TO CART</span>
                        <span style={{height:"25px",marginLeft:"10px"}}>
                            <img src="/assets/icon/system-solid-6-shopping.gif" style={{width:"30px"}}></img>
                        </span>  
                    </button>
                </div>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
        <img src="/assets/img/food/18.jpg" alt= "Image 2" style={{width:"100%",transition: "2s"}}></img>
        <Carousel.Caption  style={{ height:"200px"}}>
          <h3 style={{color:"black"}}>Bento gà nướng mật ong cá hồi</h3>
          <p style={{color:"black"}}>Gà nướng mật ong, cá hồi, cơm, rong biển, các món ăn kèm.</p>
          <div style={{textAlign:"center"}}>
                    <button style={{border:"none",backgroundColor:"#ff6600",color:"#fff",padding:"10px ",marginBottom:"10px",width:"30%"}}>
                        <span style={{height:"25px"}}>ADD TO CART</span>
                        <span style={{height:"25px",marginLeft:"10px"}}>
                            <img src="/assets/icon/system-solid-6-shopping.gif" style={{width:"30px"}}></img>
                        </span>  
                    </button>
                </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img src="/assets/img/food/19.jpg" alt= "Image 2" style={{width:"100%",transition: "2s"}}></img>
        <Carousel.Caption  style={{ height:"200px"}}>
          <h3 style={{color:"black"}}>Bento trứng cá ngáo</h3>
          <p style={{color:"black"}}>Trứng cá ngáo, 1/2 trứng gà, cơm, rong biển, các món ăn kèm</p>
          <div style={{textAlign:"center"}}>
                    <button style={{border:"none",backgroundColor:"#ff6600",color:"#fff",padding:"10px ",marginBottom:"10px",width:"30%"}}>
                        <span style={{height:"25px"}}>ADD TO CART</span>
                        <span style={{height:"25px",marginLeft:"10px"}}>
                            <img src="/assets/icon/system-solid-6-shopping.gif" style={{width:"30px"}}></img>
                        </span>  
                    </button>
                </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
