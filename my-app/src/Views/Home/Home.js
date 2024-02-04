import Footer from "../../Layout/Footer";
import CustomNavbar from "../../Layout/Navbar";
import React from 'react';
import SlideshowHome from './../Admin/Slideshow/Slideshow';
import Combo from './../User/Combo';
import Productpromotional from './../User/Productpromotional';


function Home() {
   
    return (
        <>
            <CustomNavbar />
            <SlideshowHome />
            <Productpromotional />
            <Combo/>
            <Footer />
        </>
    );
}

export default Home;
;