import React, { useEffect, useState } from 'react';
import { faAddressCard, faBell, faCartShopping, faCheckSquare, faComments, faEnvelope, faLanguage, faLightbulb, faMagnifyingGlass, faMapMarkerAlt, faShieldAlt, faShoppingBasket, faTag, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

import axios from 'axios';

const CustomNavbar = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get(`https://localhost:7104/api/Products`)
          .then(res => setProducts(res.data));
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const [carts, setcarts] = useState([]);
  useEffect(() => {
    axios.get(`https://localhost:7104/api/Carts`)
        .then(res => setcarts(res.data));
}, []);
// đăng xuất
const [loggedIn, setLoggedIn] = useState(false);
function logout() {
  // Gửi yêu cầu HTTP POST tới API đăng xuất
  fetch("/api/logout", {
    method: "POST",
  })
    .then((response) => {
      // Nếu yêu cầu thành công, thì đăng xuất người dùng
      if (response.status === 200) {
        // Xóa token khỏi LocalStorage
        localStorage.removeItem("token");

        // Thay đổi trạng thái đăng nhập thành "false"
        setLoggedIn(false);
      }
    })
    .catch((error) => {
      // Xử lý lỗi
    });
}
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
          <div style={{width:"20%",marginTop:"13px"}} >
             <div className="search" style={{height: "24px",width: "100%",overflow: "hidden",borderRadius:"30px" ,boxShadow: "inset 0 5px 5px  #ced0df,0 -5px 10px #f3f3f3,inset 0 -5px 5px #eff1f0,0 10px 15px #ced0df"}} class="search">
              <input type="text" placeholder="Tìm Kiếm" value={searchTerm} onChange={handleSearch} required style={{backgroundColor:"transparent",border: "none",outline: "none",width: "90%",height: "24px",padding: "0 0 0 15px"}}></input>
              <button style={{border:"none",background:"transparent",margin:"0px",padding:"0px"}}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",float: "right"}} /></button>
             </div>
          </div>
          <div  style={{ width:"20%",display: "flex"}} class="function">
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
              <div class="cart">
                <a href="/User/Cart" style={{}}><FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} /></a>
                <small style={{color:"red"}}>{carts.length}</small>
              </div>
            </div>
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
                <div class="appear">
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic"  bsPrefix="no-arrow " >
                      <FontAwesomeIcon icon={faBell} style={{color: "#000000",}} /><small id="notification" style={{color:"red"}}>1</small> 
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{width:"300px"}}>
                      <div>
                        <div tyle={{textAlign:"center"}}>
                          <FontAwesomeIcon icon={faEnvelope} style={{width:"25%"}}/>
                          <FontAwesomeIcon icon={faShoppingBasket} style={{width:"25%"}}/>
                          <FontAwesomeIcon icon={faTruck} style={{width:"25%"}}/>
                          <FontAwesomeIcon icon={faCheckSquare} style={{width:"25%"}}/>
                        </div>
                        <div style={{display:"flex",fontSize:"10px",textAlign:"center"}}>
                          <p style={{width:"25%"}}>Chờ xác nhận</p>
                          <p style={{width:"25%"}}>Chờ lấy hàng</p>
                          <p style={{width:"25%"}}>Chờ giao hàng</p>
                          <p style={{width:"25%"}}>Nhận hàng</p>
                        </div>
                      </div>
                      <hr style={{width:"100%",height:"1px",backgroundColor:"#000000",margin:"0"}}/>
                      <h5 style={{textAlign:"center"}}>Thông Báo</h5>
                      <div>
                        <div style={{display:"flex"}}>
                          <div style={{width:"10%",verticalAlign: "middle",margin:"auto"}}>
                            <FontAwesomeIcon icon={faTag} />
                          </div>
                          <div style={{margin:"0",width:"80%"}}>
                            <h6 style={{margin:"0"}}>Khuyến mãi</h6>
                            <p style={{margin:"0",fontSize:"12px"}}>Bạn nhận được mã khuyến mã của SUSHI</p>
                          </div>
                        </div>
                        <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                        <div style={{display:"flex"}}>
                          <div style={{width:"10%",verticalAlign: "middle",margin:"auto"}}>
                            <FontAwesomeIcon icon={faTag} />
                          </div>
                          <div style={{margin:"0",width:"80%"}}>
                            <h6 style={{margin:"0"}}>Khuyến mãi</h6>
                            <p style={{margin:"0",fontSize:"12px"}}>Bạn nhận được mã khuyến mã của SUSHI</p>
                          </div>
                        </div>
                        <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                        <div style={{display:"flex"}}>
                          <div style={{width:"10%",verticalAlign: "middle",margin:"auto"}}>
                            <FontAwesomeIcon icon={faTag} />
                          </div>
                          <div style={{margin:"0",width:"80%"}}>
                            <h6 style={{margin:"0"}}>Khuyến mãi</h6>
                            <p style={{margin:"0",fontSize:"12px"}}>Bạn nhận được mã khuyến mã của SUSHI</p>
                          </div>
                        </div>
                        <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                  
                </div>
            </div>
            <div style={{width:"25%",margin: "auto",textAlign: "center"}} class="itemfuction">
                <div class="setting">
                <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" bsPrefix="no-arrow" >
                    <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{width:"220px"}}>
                      <div>
                        <h5 style={{textAlign:"center"}}>Tài Khoản</h5>
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="1"  >
                            <Accordion.Header style={{fontSize:"15px",margin:"0"}} ><FontAwesomeIcon icon={faShieldAlt} /> Tài Khoản & Bảo Mật </Accordion.Header>
                            <Accordion.Body style={{margin:"0"}}>
                              <button style={{display:"block",border:"none"}}>Tiếng Việt</button>
                              <button style={{display:"block",border:"none"}}>English</button>
                              <button style={{display:"block",border:"none"}}>한국</button>
                            </Accordion.Body>
                          </Accordion.Item>
                          <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                          <Accordion.Item eventKey="2" >
                            <Accordion.Header style={{fontSize:"15px",margin:"0"}}><FontAwesomeIcon icon={faMapMarkerAlt} /> Địa Chỉ </Accordion.Header>
                            <Accordion.Body style={{margin:"0"}}>
                              <button style={{display:"block",border:"none"}}>Tiếng Việt</button>
                              <button style={{display:"block",border:"none"}}>English</button>
                              <button style={{display:"block",border:"none"}}>한국</button>
                            </Accordion.Body>
                          </Accordion.Item>
                          <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                          <Accordion.Item eventKey="3" >
                            <Accordion.Header style={{fontSize:"15px",margin:"0"}}><FontAwesomeIcon icon={faAddressCard} /> Tài Khoản/Thẻ Ngân Hàng </Accordion.Header>
                            <Accordion.Body style={{margin:"0"}}>
                              <button style={{display:"block",border:"none"}}>Tiếng Việt</button>
                              <button style={{display:"block",border:"none"}}>English</button>
                              <button style={{display:"block",border:"none"}}>한국</button>
                            </Accordion.Body>
                          </Accordion.Item>
                          <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                          <Accordion.Item eventKey="4" >
                            <Accordion.Header style={{fontSize:"15px",margin:"0"}}><FontAwesomeIcon icon={faBell} /> Cài Đặt Thông Báo </Accordion.Header>
                            <Accordion.Body style={{margin:"0"}}>
                              <button style={{display:"block",border:"none"}}>Tiếng Việt</button>
                              <button style={{display:"block",border:"none"}}>English</button>
                              <button style={{display:"block",border:"none"}}>한국</button>
                            </Accordion.Body>
                          </Accordion.Item>
                          <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                          <Accordion.Item eventKey="5" >
                            <Accordion.Header style={{fontSize:"15px",margin:"0"}}><FontAwesomeIcon icon={faComments} /> Cài Đặt Chat </Accordion.Header>
                            <Accordion.Body style={{margin:"0"}}>
                              <button style={{display:"block",border:"none"}}>Tiếng Việt</button>
                              <button style={{display:"block",border:"none"}}>English</button>
                              <button style={{display:"block",border:"none"}}>한국</button>
                            </Accordion.Body>
                          </Accordion.Item>
                          <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                          <Accordion.Item eventKey="6" >
                            <Accordion.Header style={{fontSize:"15px",margin:"0"}}><FontAwesomeIcon icon={faLanguage} /> Language </Accordion.Header>
                            <Accordion.Body style={{margin:"0"}}>
                              <button style={{display:"block",border:"none"}}>Tiếng Việt</button>
                              <button style={{display:"block",border:"none"}}>English</button>
                              <button style={{display:"block",border:"none"}}>한국</button>
                            </Accordion.Body>
                          </Accordion.Item>
                          <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                          <Accordion.Item eventKey="77" >
                            <Accordion.Header style={{fontSize:"15px"}}><FontAwesomeIcon icon={faLightbulb} />Sáng & Tối</Accordion.Header>
                            <Accordion.Body>
                              <button style={{display:"block",border:"none"}}>Tiếng Việt</button>
                              <button style={{display:"block",border:"none"}}>English</button>
                              <button style={{display:"block",border:"none"}}>한국</button>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                         <button><a href='/user/login' style={{ textDecoration: "none",margin: "0px",color: "#000000",display:"block",textAlign:"center"}}>ĐĂNG NHẬP</a></button>
                        <hr style={{width:"100%",height:"0.1px",backgroundColor:"#f0f0f0",margin:"0"}}/>
                        <button onClick={logout} style={{ textDecoration: "none",margin: "0px",color: "#000000",display:"block",textAlign:"center"}}>ĐĂNG XUẤT</button>
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
