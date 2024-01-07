import React from 'react';
import CustomNavbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import ProductDetail from '../Admin/Product/ProductDetail';

const Menu = () => {
 

  

  return (
    <>
        <CustomNavbar />
        <div style={{borderBottom:" solid 2px",borderColor:"#f0f0f0"}}>
            <h1 style={{textAlign:"center"}}>MENU</h1>
            <div style={{textAlign:"center"}}>
                <button style={{margin:"10px",padding:"5px 10px 5px 10px",borderRadius:"10px",border:"none",fontSize:"20px"}}>Accompanying</button>
                <button style={{margin:"10px",padding:"5px 10px 5px 10px",borderRadius:"10px",border:"none",fontSize:"20px"}}>Food</button>
                <button style={{margin:"10px",padding:"5px 10px 5px 10px",borderRadius:"10px",border:"none",fontSize:"20px"}}>Water</button>
            </div>
        </div>
        <ProductDetail />

        <Footer />

    </>
  );
};

export default Menu;
