import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Modal, Row  } from 'react-bootstrap';


const Productpromotional= () => {
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const handleShow = (id) => {
        setSelectedProduct(products.find((p) => p.id === id));
        setShow(true);
    }
    const handleClose = () => setShow(false);
    useEffect(() => {
        axios.get(`https://localhost:7104/api/Products`)
            .then(res => setProducts(res.data));
    }, []); 
    return (
        <>
        <h2 style={{marginLeft:"1%"}}>KHUYẾN MÃI</h2>
        <main style={{display: "flex",flexWrap: "wrap"}}>  
           {products.filter(item => item.id === 1 || item.id === 2 || item.id === 3 || item.id === 4).map(item => 
           < >
                <div>
                    <img src='/assets/img/relevant images/20.png' style={{position: "absolute",width:"100px",marginLeft:"0.5%"}}/>
                    {/* <p style={{position: "absolute",borderStyle:"dashed",borderWidth: "5px",borderRadius:"50%",padding:"10px",width:"55px",height:"55px",backgroundColor:"#e60000",color:"#fff"}}>10%</p> */}
                </div>
                <form style={{width:"23%",borderStyle:"solid", borderColor:"#f0f0f0",margin:"1%",float: "left",boxShadow:"15px 10px 10px  #999999",backgroundColor:"#fff"}} >
                <div onClick={() => handleShow(item.id)}>
                    <div style={{height:"300px"}}>
                        {item.productTypeId ==1 ?(<img src={`/assets/img/food/${item.image}`} style={{ width:"100%"}}/>):(item.productTypeId ==2 ?(<img src={`/assets/img/accompanying/${item.image}`} style={{ width: "100%" }}/>):(<img src={`/assets/img/water/${item.image}`} style={{ width: "100%" }}/>))}
                    </div>
                    <div style={{textAlign:"center"}}>
                        <h3 style={{height:"70px"}}>{item.name}</h3>
                    <div style={{display:"flex",justifyContent: "center"}}>
                        <div style={{width:"90px",height:"24px"}}>
                            {item.averageStar ==1 ?(<div style={{position: "relative",backgroundColor:"#ff6600",width:"18px",height:"24px"}}></div>):(item.averageStar ==2 ?(<div style={{position: "relative",backgroundColor:"#ff6600",width:"36px",height:"24px"}}></div>):(item.averageStar ==3 ?(<div style={{position: "relative",backgroundColor:"#ff6600",width:"54px",height:"24px"}}></div>):(item.averageStar ==4 ?(<div style={{position: "relative",backgroundColor:"#ff6600",width:"72px",height:"24px"}}></div>):(<div style={{position: "relative",backgroundColor:"#ff6600",width:"90px",height:"24px"}}></div>))))}
                        </div>
                        <div style={{width:"90px",margin:"auto",backgroundColor:"#000",mixBlendMode: "multiply", position: "absolute"}}>
                            <FontAwesomeIcon icon={faStar}style={{ color:"#fff"}}/>
                            <FontAwesomeIcon icon={faStar}style={{ color:"#fff"}}/>
                            <FontAwesomeIcon icon={faStar}style={{ color:"#fff"}}/>
                            <FontAwesomeIcon icon={faStar}style={{ color:"#fff"}}/>
                            <FontAwesomeIcon icon={faStar}style={{ color:"#fff"}}/>
                        </div>
                    </div>
                        <del style={{color:"red"}}><p style={{textAlign:"center",fontSize:"24px",margin:"10px",color:"black"}}> {item.price}.000 VND</p></del>
                        <p style={{textAlign:"center",fontSize:"24px",margin:"10px"}}>{item.price - (item.price * 0.2)}.000 VND</p>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>
                    <button style={{border:"none",backgroundColor:"#ff6600",color:"#fff",padding:"10px ",marginBottom:"10px",width:"90%"}}>
                        <span style={{height:"25px"}}>ADD TO CART</span>
                        <span style={{height:"25px",marginLeft:"10px"}}>
                            <img src="/assets/icon/system-solid-6-shopping.gif" style={{width:"30px"}}></img>
                        </span>  
                    </button>
                </div>
              </form> 
              </>
              
            )}
        </main>
        <Modal show={show} size="lg" onHide={handleClose} centered>
                <Modal.Header closeButton >
                    <Modal.Title>Thông tin sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Row>
                         <Col md={4}>
                            {selectedProduct.productTypeId ==2 ?(<img src={`/assets/img/food/${selectedProduct.image}`} style={{ width: "100%" }}/>):(selectedProduct.productTypeId ==3 ?(<img src={`/assets/img/accompanying/${selectedProduct.image}`} style={{ width: "100%" }}/>):(<img src={`/assets/img/water/${selectedProduct.image}`} style={{ width: "100%" }}/>))}
                        </Col> 
                        <Col md={4}>
                            <dl>
                                <dt>Tên sản phẩm:</dt>
                                <dd>{selectedProduct.name}</dd>

                                <dt>Giá gốc:</dt>
                                <dd>{selectedProduct.price}.000 VND</dd>

                                <dt>Giá giảm:</dt>
                                <dd>{selectedProduct.price - (selectedProduct.price * 0.2)}.000 VND</dd>

                                <dt>Mô tả:</dt>
                                <dd>{selectedProduct && selectedProduct.description ? (<p style={{ margin: "0" }}>{selectedProduct.description}</p>) : (<p style={{ margin: "0" }}>không có mô tả</p>)}</dd>
                            </dl>
                        </Col>
                        <Col md={4}>
                            <dl>
                                <dt>Loại sản phẩm:</dt>
                                <dd>{selectedProduct.productTypedId==2 ?(<p>food</p>):(selectedProduct.productTypeId ==1 ?(<p>waret</p>):(<p>accompanying</p>))}</dd>

                                <dt>Đánh giá:</dt>
                                <dd>{selectedProduct.averageStar}/5</dd>

                                <dt>Trạng thái:</dt>
                                <dd>{selectedProduct.status == 1 ?(<p>Hoạt động</p>):(<p>Không Hoạt động</p>)}</dd>
                            </dl>
                        </Col>
                        
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Productpromotional;
