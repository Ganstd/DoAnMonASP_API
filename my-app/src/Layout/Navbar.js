import React from 'react';
import { faBell, faCartShopping, faLocationDot, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

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
            <a href="/User/menu" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}>Menu</p></a>
            <a href="/User/IntroducingNewDishes" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}>Introducing New Dishes</p></a>
            <a href="/User/Restaurant" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}>Restaurant</p></a>
          </div>
          <div style={{width:"20%",marginTop:"13px"}}>
             <div style={{height: "24px",width: "100%",overflow: "hidden",borderRadius:"30px" ,boxShadow: "inset 0 5px 5px  #ced0df,0 -5px 10px #f3f3f3,inset 0 -5px 5px #eff1f0,0 10px 15px #ced0df"}} class="search">
              <input type="text" placeholder="Tìm Kiếm" required style={{backgroundColor:"transparent",border: "none",outline: "none",width: "90%",height: "24px",padding: "0 0 0 15px"}}></input>
              <button style={{border:"none",background:"transparent",margin:"0px",padding:"0px"}}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",float: "right"}} /></button>
          </div>
          </div>
         
          <div  style={{ width:"20%",display: "flex"}} class="function">
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
              <div class="cart">
                <a href="/User/Cart" style={{}}><FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} /></a>
                <small id="cart">1</small>
              </div>
            </div>
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
                <div class="appear">
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" icon={null} >
                      <FontAwesomeIcon icon={faBell} style={{color: "#000000",}} /><small id="notification">1</small> 
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>4</p>
                      <p>5</p>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                  
                </div>
            </div>
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
                <div class="setting">
                <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" icon={null} >
                    <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{width:"200px"}}>
                      <div>
                        <h5 style={{textAlign:"center"}}>Tài Khoản</h5>
                         <Accordion>
                          <Accordion.Item eventKey="0" className='bg-info '>  
                            <Accordion.Header as="div" bsPrefix=''><FontAwesomeIcon icon={faLocationDot} style={{ color: "#000000"}} />Địa Chỉ</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header as="p">Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <a href='/user/login' style={{ textDecoration: "none",margin: "5px",color: "#000000",display:"block"}}>ĐĂNG NHẬP</a>
                        <a href='/'style={{ textDecoration: "none",margin: "5px",color: "#000000",display:"block"}}>ĐĂNG XUẤT</a>
                      </div>
                      
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
