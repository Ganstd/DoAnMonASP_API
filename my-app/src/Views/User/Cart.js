import React, { useState, useEffect } from 'react';
import {  faArrowLeft, faCheck, faMinus, faPlus, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {  Button, Modal} from "react-bootstrap";
import CustomNavbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";


const Cart = () => {
    const [carts, setcarts] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7104/api/Products`)
            .then(res => setProducts(res.data));    
    }, []);
    useEffect(() => {
        axios.get(`https://localhost:7104/api/Carts`)
            .then(res => setcarts(res.data));
    }, []);
    useEffect(() => {
        axios.get(`https://localhost:7104/api/Users`)
            .then(res => setUsers(res.data));
    }, []);
    // xóa sản phẩm khỏi giỏ hàng
    const [showDelete, setShowDelete] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const handleShowDelete = (id) => {
        setSelectedProduct(products.find(p => p.id === id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);
    const handleDelete = () => {
        axios.delete(`https://localhost:7104/api/Products/${selectedProduct.id}`);
        let list = products;
        list.splice(products.findIndex(p => p.id === selectedProduct.id), 1);
        setProducts(list);
        setShowDelete(false);
    }
    // sử lý cilck tất cả sản phẩm
    const handleHeaderCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        const tbodyCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');
        tbodyCheckboxes.forEach((checkbox) => {
          checkbox.checked = isChecked;
        });
      };
    // tăng giảm số lượng sản phẩm
    function handleQuantityChange(productId, changeAmount) {
        // Update the quantity state locally
        const updatedCarts = [...carts];
        const cartItem = updatedCarts.find((cart) => cart.id === productId);
        cartItem.quantity += changeAmount;
      
        // Validate quantity (e.g., prevent negatives)
        if (cartItem.quantity < 1) {
          cartItem.quantity = 1;
          // Provide feedback to the user (e.g., alert or message)
        }
      
        setcarts(updatedCarts);
      
        // Update the cart on the server
        const updatedCart = {
          id: cartItem.id,
          quantity: cartItem.quantity,
        };
        axios.put(`/api/Carts/${productId}`, updatedCart)
          .then(() => {
            axios.get(`https://localhost:7104/api/Carts`)
              .then(res => setcarts(res.data));
          })
          .catch((error) => {
            // Handle any errors
          });
      }
    // tổng tiền
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const tienElements = document.querySelectorAll('.tien');
        let total = 0;
        for (const tienElement of tienElements) {
          const tienValue = Number(tienElement.textContent.replace('.000 VND', ''));
          total += tienValue;
        }
        setTotalPrice(total);
      }, [carts]);
      // show hóa đơn
      const [show, setShow] = useState(false);
      const handleShow = () => {
        setShow(true);
    }
    const thoat = () => setShow(false);
    return (
        <>
            <CustomNavbar />
            <table>
                <thead style={{height:"50px",backgroundColor: "aliceblue"}}>
                    <tr >
                        <th style={{width:"10%",textAlign:"center",verticalAlign: "middle"}}><input type="checkbox"  onChange={handleHeaderCheckboxChange} style={{margin:"auto"}}></input></th>
                        <th style={{width:"20%", textAlign:"center",verticalAlign: "middle"}}>Hình ảnh</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Sản Phẩm</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Đơn giá</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Số Lượng</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Số tiền</th>
                        <th style={{width:"10%",textAlign:"center",verticalAlign: "middle"}}>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                { 
                       products.filter((product) => {
                        const cartIds = carts.map((carts) => carts.id);
                        return cartIds.includes(product.id);
                      }).map(item =>
                            <tr className="align-middle" style={{borderBlockEnd: " 1px solid"}}>
                                 <td style={{textAlign:"center",verticalAlign: "middle"}}><input type="checkbox"    style={{margin:"auto"}}></input></td>
                                {
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.productTypeId ===1 ?(<img src={`/assets/img/food/${item.image}`} alt='' style={{ width:"100%"}}/>):(item.productTypeId ===2 ?(<img src={`/assets/img/accompanying/${item.image}`} alt='' style={{ width: "100%" }}/>):(<img src={`/assets/img/water/${item.image}`} alt='' style={{ width: "100%" }}/>))} </td>
                                 }
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.name}</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.price}.000 VND</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}> 
                                    <div>
                                        <button onClick={() => handleQuantityChange(item.id, -1)} style={{border:"none",backgroundColor:"transparent"}}><FontAwesomeIcon icon={faMinus} /></button>
                                        <span style={{margin:"0 10px"}}> {carts.find((cart) => cart.id === item.id)?.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, 1)} style={{border:"none",backgroundColor:"transparent"}}><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                </td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}} class="tien">{carts.find((cart) => cart.id === item.id)?.quantity* item.price}.000 VND</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>
                                    <Button variant="danger" onClick={() => handleShowDelete(item.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button></td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot style={{position: "sticky", bottom:"0px",backgroundColor: "aliceblue",height:"50px"}}>
                    <tr >
                        <th style={{width:"10%",textAlign:"center",verticalAlign: "middle"}}><input type="checkbox" onChange={handleHeaderCheckboxChange} style={{margin:"auto"}}></input></th>
                        <th style={{width:"20%", textAlign:"center",verticalAlign: "middle"}}>Chọn tất cả sản phẩm ({carts.length} sản phẩm)</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Xóa</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Bỏ Sản phẩm không hoạt động</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Tổng thanh toán ({carts.length} sản phẩm)</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>{totalPrice}.000 VND</th>
                        <th style={{width:"10%",textAlign:"center",verticalAlign: "middle"}}><button onClick={() => handleShow()} style={{border:"none",backgroundColor:"#ff6600",color:"#fff",padding:"10px ",width:"100%"}}>Mua hàng</button></th>
                    </tr>
                </tfoot>
            </table> 
            <Footer />
            <Modal show={showDelete} onHide={handleCloseDelete} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc muốn xóa sản phẩm <span style={{ fontWeight: "bold" }}>{selectedProduct.Name}</span>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faCheck} /> Đồng ý
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        <FontAwesomeIcon icon={faTimes} /> Hủy bỏ
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show} onHide={handleCloseDelete} centered>
                <Modal.Header  style={{display:"block"}}>
                    <div>
                        <button style={{border:"none",backgroundColor:"transparent"}} onClick={thoat}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    </div>
                    <div style={{display: "flex"}} class="logo">
                        <img src='/assets/img/logo/logo.png' alt="logo" style={{height: "50px",margin: "auto"}}></img>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <p>202 Lý Chính Thắng, Phường 09, Quận 3, TP. Hồ Chí Minh</p>
                        <h2>Hóa Đơn</h2>
                    </div>
                    
                </Modal.Header>
                <Modal.Body>
                    <table>
                        <thead style={{height:"50px"}}>
                            <tr >
                                <th style={{width:"40%",textAlign:"center",verticalAlign: "middle"}}>tên món</th>
                                <th style={{width:"20%",textAlign:"center",verticalAlign: "middle"}}>Số Lượng</th>
                                <th style={{width:"20%",textAlign:"center",verticalAlign: "middle"}}>Đơn giá</th>
                                <th style={{width:"20%",textAlign:"center",verticalAlign: "middle"}}>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                products.filter((product) => {
                                    const cartIds = carts.map((carts) => carts.id);
                                    return cartIds.includes(product.id);
                                }).map(item =>
                                        <tr className="align-middle" style={{borderBlockEnd: " 1px dashed"}}>
                                            <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.name}</td>
                                            <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.price}.000</td>
                                            <td style={{textAlign:"center",verticalAlign: "middle"}}>{carts.find((cart) => cart.id === item.id)?.quantity}</td>
                                            <td style={{textAlign:"center",verticalAlign: "middle"}} class="tien">{carts.find((cart) => cart.id === item.id)?.quantity* item.price}.000</td>
                                        </tr>
                                    )
                                }
                        </tbody>
                    </table>
                    <div style={{display:"flex"}}>
                        <div style={{width:"30%"}}>
                            <p style={{margin:"0"}}>Địa Chỉ:</p>
                            <p style={{margin:"0"}}>Số điện thoại:</p>
                        </div>
                        <div style={{width:"70%"}}>
                            <p style={{margin:"0"}}>{users.userName}</p>
                            <p style={{margin:"0"}}>{users.phoneNumber}</p>
                        </div>
                    </div>
                    
                    <div style={{display:"flex",width:"100%",marginTop:"10px"}}>
                        <div style={{width:"40%"}}>
                            <div >
                                <p style={{margin:"0px"}}>Phương thức thanh toán</p>
                                <label style={{display:"block"}}>Tiền mặt 
                                    <input type="radio" name="newsletter" value="Tiền mặt" style={{marginLeft:"71px"}}></input>
                                </label>
                                <label style={{display:"block"}}>Chuyển Khoản 
                                    <input type="radio" name="newsletter" value="Chuyển Khoản" style={{marginLeft:"30px"}}></input>
                                </label>
                            </div>
                            
                            <img src="/assets/img/logo/l1.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l2.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l3.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l4.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l5.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l6.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l7.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l8.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l9.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                            <img src="/assets/img/logo/l10.png" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                        </div>
                        <div style={{width:"60%",display:"flex"}}>
                            <div style={{width:"60%",paddingLeft:"20px",borderLeft:" 1px solid"}}>
                                <p style={{}}>Tổng tiền hàng</p>
                                <p style={{}}>Phí Vận Chuyển</p>
                                <p style={{}}>Giảm giá</p>
                                <p style={{}}>Tổng thanh toán</p>
                            </div>
                            <div style={{width:"40%",textAlign:"right"}}>
                                <p style={{}}>{totalPrice}.000 VND</p>
                                <p style={{}}>15.000 VND</p>
                                <p style={{}}>0%</p>
                                <p style={{}}>{totalPrice + 15}.000 VND</p>
                            </div>
                       
                        
                        </div>
                        
                    </div>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faCheck} /> Đặt hàng
                    </Button>
                    <Button variant="secondary" onClick={thoat}>
                        <FontAwesomeIcon icon={faTimes} /> Hủy bỏ
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cart;