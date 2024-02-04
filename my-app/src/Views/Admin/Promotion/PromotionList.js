import { faCheck, faEdit, faPlus, faTimes, faTrash, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Pagination, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import  "./promotion.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const PromotionList = () => {
    const [promotions, setPromotions] = useState([]);
    var i = 1;
    const [page, setPage] = useState(1);
    let totalProducts = 30; // Total number of products
    let pageSize = 5; // Number of products per page

    let totalPages = Math.ceil(totalProducts / pageSize); // Calculate total number

    // Xử lý Modal thông tin tài khoản
    const [show, setShow] = useState(false);
    const [selectedPromotion, setSelectedPromotion] = useState({});
    const handleShow = (id) => {
        setSelectedPromotion(promotions.find(pr => pr.id === id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    // Xử lý Modal xóa tài khoản
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedPromotion(promotions.find(pr => pr.id === id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

    useEffect(() => {
        axiosClient.get(`/Promotions/page?page=${page}`)
            .then(res => setPromotions(res.data));
    }, [page]);

    const handleDelete = () => {
        axiosClient.delete(`https://localhost:7104/api/Promotions/${selectedPromotion.id}`);
        let list = promotions;
        list.splice(promotions.findIndex(pr => pr.id === selectedPromotion.id), 1);
        setPromotions(list);
        setShowDelete(false);
    }

    return (
        <>
            <div className="promotion">
            <Sidebar />
      <div className="promotionContainer">
        <Navbar />
            <Link to="/admin/promotions/add" className="btn btn-success mb-2">
                <FontAwesomeIcon icon={faPlus} /> Thêm
            </Link>

            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Chương trình Khuyến mãi</th>
                        <th>Giảm giá</th>
                        <th>Mã sản phẩm</th>
                        <th>Mã Loại sản phẩm</th>
                        <th>Mã hóa đơn</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày Kết thúc</th>                       
                        <th>Chức năng</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        promotions.map(item =>
                            <tr className="align-middle">
                                <td>{i++}</td>
                                {/*
                                <td>
                                    <img src={`https://localhost:7104/images/avatar/${item.avatar}`} style={{ width: "50px" }} />
                                </td>
                                 */}
                                <td>{item.name}</td>
                                <td>{item.discount}</td>
                                <td>{item.productId}</td>
                                <td>{item.productTypeId}</td>
                                <td>{item.invoiceId}</td>
                                <td>{item.startDay}</td>
                                <td>{item.endDay}</td>
                                <td>
                                    <Button variant="info" style={{ marginRight: "5px" }} onClick={() => handleShow(item.id)}>
                                        <FontAwesomeIcon icon={faPercent} />
                                    </Button>
                                    <Link to={`/admin/promotions/edit/${item.id}`} className="btn btn-warning" style={{ marginRight: "5px" }}>
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
                    <Modal.Title>Thông tin Khuyến mãi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                         {/* <Col md={4}>
                            <img src={`https://localhost:7104/images/avatar/${selectedAccount.avatar}`} style={{ width: "100%" }} />
                        </Col>  */}
                         <Col md={4}>
                            <dl>
                                <dt>Chương trình khuyến mãi:</dt>
                                <dd>{selectedPromotion.name}</dd>

                                <dt>Giảm giá:</dt>
                                <dd>{selectedPromotion.discount}</dd>

                                <dt>Mã sản phẩm:</dt>
                                <dd>{selectedPromotion.productId}</dd>

                                <dt>Mã loại sản phẩm:</dt>
                                <dd>{selectedPromotion.productTypeId}</dd>
                            </dl>
                        </Col>
                        <Col md={4}>
                            <dl>
                                <dt>Mã hóa đơn:</dt>
                                <dd>{selectedPromotion.invoiceId}</dd>

                                <dt>Ngày bắt đầu:</dt>
                                <dd>{selectedPromotion.startDay}</dd>

                                <dt>Ngày kết thúc:</dt>
                                <dd>{selectedPromotion.endDay}</dd>
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
                <Modal.Body>Bạn có chắc muốn xóa đánh giá <span style={{ fontWeight: "bold" }}>{selectedPromotion.name}</span>?</Modal.Body>
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

export default PromotionList;