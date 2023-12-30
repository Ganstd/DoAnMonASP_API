import React from 'react';
import { faBell, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomNavbar = () => {
  return (
    <>
      <div  style={{display: "flex",height: "50px" }}>
        <div style={{display: "flex", width: "20%" }} class="logo">
          <img src='/assets/img/logo/logo.png' alt="logo" style={{height: "50px",margin: "auto"}}></img>
        </div>
        <div style={{display: "flex", width: "80%" }}>
          <div style={{display: "flex",width: "60%"}} class="menu">
            <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}>Home</p></a>
            <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}>Menu</p></a>
            <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}>Introducing New Dishes</p></a>
            <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}>Restaurant</p></a>
          </div>
          <div style={{height: "26px",width: "25",overflow: "hidden",borderRadius:"30px" ,margin: "10px" ,boxShadow: "inset 0 5px 5px  #ced0df,0 -5px 10px #f3f3f3,inset 0 -5px 5px #eff1f0,0 10px 15px #ced0df"}} class="search">
              <input type="text" placeholder="Tìm Kiếm" required style={{backgroundColor: "transparent",border: "none",outline: "none",width: "70%",height: "26px",padding: "0 15px"}}></input>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",padding: "5px 8px", float: "right"}} />
          </div>
          <div  style={{ width:"25%",display: "flex"}} class="function">
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
              <div class="cart">
                <a href="/" style={{}}><FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} /></a>
                <small id="cart">1</small>
              </div>
            </div>
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
                <div class="appear">
                  <FontAwesomeIcon icon={faBell} style={{color: "#000000",}} /> 
                  <small id="notification">1</small> 
                </div>
            </div>
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
                <div class="setting">
                  <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
