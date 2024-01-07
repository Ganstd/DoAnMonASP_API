import { faCheck, faEdit, faHamburger, faPlus, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../Layout/Navabaradmin";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    var i = 1;

    // Xử lý Modal thông tin tài khoản
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const handleShow = (id) => {
        setSelectedProduct(products.find(p => p.id == id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    // Xử lý Modal xóa tài khoản
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedProduct(products.find(p => p.id == id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

    useEffect(() => {
        axios.get(`https://localhost:7104/api/Products`)
            .then(res => setProducts(res.data));
    }, []);

    const handleDelete = () => {
        axios.delete(`https://localhost:7104/api/Products/${selectedProduct.id}`);
        let list = products;
        list.splice(products.findIndex(p => p.id == selectedProduct.id), 1);
        setProducts(list);
        setShowDelete(false);
    }


    
    return (
        <>
            <AdminNavbar/>
            <Link to="/admin/product/add" className="btn btn-success mb-2" >
                <FontAwesomeIcon icon={faPlus} /> Thêm
            </Link>

            <Table>
                <thead className="table-dark">
                    <tr>
                        <th style={{width:"5%",textAlign:"center"}}>STT</th>
                        <th style={{width:"11%",textAlign:"center"}}>Hình ảnh</th>
                        <th style={{width:"11%",textAlign:"center"}}>Tên sản phẩm</th>
                        <th style={{width:"10%",textAlign:"center"}}>Giá</th>
                        <th style={{width:"22%",textAlign:"center"}}>Mô tả</th>
                        <th style={{width:"11%",textAlign:"center"}}>Loại sản phẩm</th>
                        <th style={{width:"10%",textAlign:"center"}}>Đánh giá</th>
                        <th style={{width:"10%",textAlign:"center"}}>Trạng thái</th>
                        <th style={{width:"10%",textAlign:"center"}}>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item =>
                            <tr className="align-middle">
                                 <td style={{textAlign:"center",verticalAlign: "middle"}}>{i++}</td>
                                {
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.productTypeId ==2 ?(<img src={`/assets/img/food/${item.image}`} style={{ width: "100%" }}/>):(item.productTypeId ==3 ?(<img src={`/assets/img/accompanying/${item.image}`} style={{ width: "100%" }}/>):(<img src={`/assets/img/water/${item.image}`} style={{ width: "100%" }}/>))}
                                    
                                        
                                       
                                      
                                </td>
                                 }
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.name}</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.price}.000 VND</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.description.length < 1 ?(<p style={{margin:"0"}}>không có mô tả</p>):(<p style={{margin:"0"}}>{item.description}</p>)}</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.productTypeId ==2 ?(<p>food</p>):(item.productTypeId ==1 ?(<p>waret</p>):(<p>accompanying</p>))}</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.averageStar}</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.status.toString() == true ?(<p>Không Hoạt động</p>):(<p>Hoạt động</p>)}</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>
                                    <Button variant="info" style={{ margin: "5px" }} onClick={() => handleShow(item.id)}>
                                        <FontAwesomeIcon icon={faHamburger} />
                                    </Button>
                                    <Link to={`/admin/accounts/edit/${item.id}`} className="btn btn-warning" style={{ margin: "5px" }}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <Button variant="danger" onClick={() => handleShowDelete(item.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <Modal show={show} size="lg" onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Row>
                       
                        {/* <Col md={4}>
                            <img src={`https://localhost:7248/images/avatar/${selectedProduct.avatar}`} style={{ width: "100%" }} />
                        </Col> */}
                        <Col md={4}>
                            <dl>
                                <dt>Tên sản phẩm:</dt>
                                <dd>{selectedProduct.Name}</dd>

                                <dt>Giá:</dt>
                                <dd>{selectedProduct.Price}</dd>

                                <dt>Mô tả:</dt>
                                <dd>{selectedProduct.Description}</dd>
                            </dl>
                        </Col>
                        <Col md={4}>
                            <dl>
                                <dt>Loại sản phẩm:</dt>
                                <dd>{selectedProduct.ProductTypedId}</dd>

                                <dt>Đánh giá:</dt>
                                <dd>{selectedProduct.AverageStar}</dd>

                                <dt>Trạng thái:</dt>
                                <dd>{selectedProduct.status}</dd>
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
        </>
    );
}

export default ProductList;