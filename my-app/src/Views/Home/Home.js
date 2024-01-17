import Slideshow from "../../Layout/Carousel";
import Footer from "../../Layout/Footer";
import CustomNavbar from "../../Layout/Navbar";
import React from 'react';
import Productpromotional from "../Admin/Product/Productpromotional";
import { Carousel } from "bootstrap";
import Combo from "../Admin/comboes/combo";


function Home() {
   
    return (
        <>
            <CustomNavbar />
            <Slideshow />
            <Productpromotional />
            <Combo/>
            <Footer />
        </>
    );
}

export default Home;
;