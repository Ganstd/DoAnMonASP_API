import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Modal, Row } from 'react-bootstrap';


const Combo  = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7104/api/Products`)
            .then(res => setProducts(res.data));
    }, []);
    const [Comboes, setComboes] = useState([]);

    const [show, setShow] = useState(false);
    const [selectedComboes, setSelectedComboes] = useState({});
    const handleShow = (id) => {
        setSelectedComboes(Comboes.find((p) => p.id === id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    useEffect(() => {
        axios.get(`https://localhost:7104/api/Comboes`)
            .then(res => setComboes(res.data));
    }, []);
    const [ComboDetails, setComboDetails] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7104/api/ComboDetails`)
            .then(res => setComboDetails(res.data));
    }, []);
    return (
        <>
        <h2 style={{marginLeft:"1%"}}>COMBOES</h2>
        <main style={{display: "flex",flexWrap: "wrap"}}>
            { Comboes.map(item =>
              <form style={{width:"23%",borderStyle:"solid", borderColor:"#f0f0f0",margin:"1%",float: "left",boxShadow:"15px 10px 10px  #999999",backgroundColor:"#fff"}}>
                <div onClick={() => handleShow(item.id)}>
                    <div style={{height:"300px"}}>
                        <img src={`/assets/img/combo/${item.image}`} style={{ width:"100%"}}/>
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
                        <p style={{textAlign:"center",fontSize:"24px",margin:"10px"}}>{item.newPrice}.000 VND</p>
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
            )}
          </main> 
          { <Modal show={show} size="lg" onHide={handleClose} centered>
                <Modal.Header closeButton >
                    <Modal.Title>Thông tin sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Row>
                         <Col md={4}>
                            { <img src={`/assets/img/combo/${selectedComboes.image}`} style={{ width: "100%" }}/>}
                        </Col>

                        <Col md={3}>
                            <dl>
                                <dt>Tên sản phẩm:</dt>
                                <dd>{selectedComboes.name}</dd>

                                <dt>Giá gốc:</dt>
                                <dd>{selectedComboes.price}.000 VND</dd>

                                <dt>Giá còn:</dt>
                                <dd>{selectedComboes.newPrice }.000 VND</dd>

                                
                            </dl>
                        </Col>
                        <Col md={5}>
                            <dl>
                                <dt>Mô tả:</dt>
                                <dd>{selectedComboes && selectedComboes.description ? (<p style={{ margin: "0" }}>{selectedComboes.description}</p>) : (<p style={{ margin: "0" }}>không có mô tả</p>)}</dd>
                            </dl>
                        </Col>
                        <Col md={8}>
                            
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>   
             }
        </>
    );
};

export default Combo;
