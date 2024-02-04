import { faCheck, faEdit, faHamburger, faPlus, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import  "./product.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Pagination from 'react-bootstrap/Pagination';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    let totalProducts = 90; // Total number of products
    let pageSize = 5; // Number of products per page

    let totalPages = Math.ceil(totalProducts / pageSize); // Calculate total number
    
    // Xử lý Modal thông tin tài khoản
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const handleShow = (id) => {
        setSelectedProduct(products.find((p) => p.id === id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    useEffect(() => {
        axios.get(`https://localhost:7104/api/Products/page?page=${page}`)
            .then(res => setProducts(res.data));
    }, [page]);

    // Xử lý Modal xóa tài khoản
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedProduct(products.find(p => p.id == id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

   

    const handleDelete = () => {
        axios.delete(`https://localhost:7104/api/Products/${selectedProduct.id}`);
        let list = products;
        list.splice(products.findIndex(p => p.id == selectedProduct.id), 1);
        setProducts(list);
        setShowDelete(false);
    }


    
    return (
        <>
             <div className="product">
          <Sidebar />
      <div className="productContainer">
        <Navbar />
           
            <Link to="/admin/products/add" className="btn btn-success mb-2" >
                <FontAwesomeIcon icon={faPlus} /> Thêm
            </Link>

                    <Table className="table">
                <thead className="table-dark">
                    <tr>
                        <th >ID</th>
                        <th className="image">Hình ảnh</th>
                        <th >Tên sản phẩm</th>
                        <th >Giá</th>
                        <th >Mô tả</th>
                        <th >Loại sản phẩm</th>
                        <th >Đánh giá</th>
                        <th >Trạng thái</th>
                        <th >Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item =>
                            <tr>
                                 <td>{item.id}</td>
                                {
                                    <td >
                                        {item.productType.id === 1 ? (<img src={`https://localhost:7104/assets/img/food/${item.image}`} alt={item.title} style={{ width: "100%" }} />) : (item.productType.id === 2 ? (<img src={`https://localhost:7104/assets/img/accompanying/${item.image}`} alt={item.title} style={{ width: "100%" }} />) : (<img src={`https://localhost:7104/assets/img/water/${item.image}`} alt={item.title} style={{ width: "100%" }} />))}
                                    </td>
                                 }
                                <td >{item.name}</td>
                                <td >{item.price}.000 VND</td>
                                <td >{item.description}</td>
                                <td >{item.productType.name}</td>
                                <td >{item.averageStar}</td>
                                <td >{item.status == 1 ? 'Còn hàng' : 'Hết hàng' }</td>
                                <td >
                                    <Button variant="info" style={{ margin: "5px" }} onClick={() => handleShow(item.id)}>
                                        <FontAwesomeIcon icon={faHamburger} />
                                    </Button>
                                    <Link to={`/admin/products/edit/${item.id}`} className="btn btn-warning" style={{ margin: "5px" }}>
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
                    


                     <Pagination className="pagination">
                        <Pagination.First onClick={() => setPage(1)} disabled={page === 1}/>
                        <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1}/>                       
                        <Pagination.Item onClick={() => setPage(page - 1)} disabled={page < 2}>{page - 1}</Pagination.Item>
                        
                        <Pagination.Item onClick={() => setPage(page)}   > { page }</Pagination.Item>
                                       
                        <Pagination.Item onClick={() => setPage(page + 1)} disabled={page >= totalPages} > {page + 1} </Pagination.Item>
                        <Pagination.Next onClick={() => setPage(page + 1)} disabled={page >= totalPages}/>
                        <Pagination.Last onClick={() => setPage(totalPages)} disabled={page === totalPages}/>
                    </Pagination>


            <Modal show={show} size="lg" onHide={handleClose} centered>
                <Modal.Header closeButton>
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

                                <dt>Giá:</dt>
                                <dd>{selectedProduct.price}.000 VND</dd>

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
                                <dd>{selectedProduct.status == 1 ?(<p>Còn hàng</p>):(<p>Hết hàng</p>)}</dd>
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
                <Modal.Body>Bạn có chắc muốn xóa sản phẩm <span style={{ fontWeight: "bold" }}>{selectedProduct.name}</span>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faCheck} /> Đồng ý
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        <FontAwesomeIcon icon={faTimes} /> Hủy bỏ
                    </Button>
                </Modal.Footer>
                    </Modal>
                </div>
                </div>
        </>
    );
}

export default ProductList;