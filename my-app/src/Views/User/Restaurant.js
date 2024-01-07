import React from 'react';
import CustomNavbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import Slideshow from "../../Layout/Carousel";

const Restaurant = () => {
  return (
    <>
        <CustomNavbar />
        <div style={{margin:"20px"}}>
            <div style={{display:"flex"}}>
                <div style={{width:"50%",float:"left"}}>
                        <p style={{width:"50%",fontSize:"25px",float:"right",margin:"10px"}}>The restaurant has a spacious, airy space, decorated in Japanese style. The restaurant can accommodate up to 
                            100 guests, suitable for parties, family gatherings, friends,...</p>
                </div>
                <div style={{width:"50%",float:"right"}}>
                    <img src='/assets/img/relevant images/nh1.jpg' alt="logo" style={{width:"100%"}}></img>
                </div>
            </div>
            <div style={{marginTop:"20px",display:"flex"}}>
                <div style={{width:"50%",float:"right"}}>
                    <img src='/assets/img/relevant images/nh5.jpg' alt="logo" style={{width:"100%"}}></img>
                </div>
                <div style={{width:"50%",float:"left"}}>
                        <p style={{width:"50%",fontSize:"25px",float:"left",margin:"10px"}}>The restaurant's staff is well-trained, professional, and always enthusiastic and thoughtful in serving customers.</p>
                </div> 
            </div>
            <div style={{marginTop:"20px",display:"flex"}}>
                <div style={{width:"50%",float:"left",display:"flex"}}>
                        <video src='/assets/img/relevant images/video (2160p).mp4'autoplay controls  loop style={{width:"50%"}}></video>
                        <p style={{width:"50%",fontSize:"30px",float:"right",margin:"20px"}}>The restaurant has a rich and diverse menu with many attractive dishes made from fresh, quality ingredients. Some typical dishes of the restaurant</p>
                </div>
                <div style={{width:"50%",float:"right"}}>
                    <Slideshow />
                    <div>
                        
                    </div>
                </div>
            </div>
            <div style={{marginTop:"20px",display:"flex"}}>
                <div style={{width:"50%",float:"right"}}>
                    <img src='/assets/img/relevant images/nh3.jpg' alt="logo" style={{width:"100%"}}></img>
                </div>
                <div style={{width:"50%",float:"left"}}>
                        <p style={{width:"50%",fontSize:"25px",float:"left",margin:"10px"}}>SUSHI Restaurant is an ideal place to enjoy JAPANESE cuisine. The restaurant will definitely bring you unforgettable culinary experiences.</p>
                </div> 
            </div>
            <div style={{marginTop:"15px",display:"flex"}}>
                
                    <img src='/assets/img/relevant images/nh2.jpg' alt="logo" style={{width:"24%",margin:"0.5%",borderRadius:"25px"}}></img>
                    <img src='/assets/img/relevant images/nh4.jpg' alt="logo" style={{width:"24%",margin:"0.5%",borderRadius:"25px"}}></img>
                    <img src='/assets/img/relevant images/nh6.jpg' alt="logo" style={{width:"24%",margin:"0.5%",borderRadius:"25px"}}></img>
                    <img src='/assets/img/relevant images/nh7.jpg' alt="logo" style={{width:"24%",margin:"0.5%",borderRadius:"25px"}}></img>
                
            </div>
            
        </div>
        <Footer />
    </>
  );
};

export default Restaurant;
