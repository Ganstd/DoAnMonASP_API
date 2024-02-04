import { faCheck, faEdit, faPlus, faTimes, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Pagination, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import  "./rating.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const RatingList = () => {
    const [ratings, setRatings] = useState([]);
    var i = 1;
    const [page, setPage] = useState(1);
    let totalProducts = 50; // Total number of products
    let pageSize = 5; // Number of products per page
    let totalPages = Math.ceil(totalProducts / pageSize); // Calculate total number

    // Xử lý Modal thông tin tài khoản
    const [show, setShow] = useState(false);
    const [selectedRating, setSelectedRating] = useState({});
    const handleShow = (id) => {
        setSelectedRating(ratings.find(r => r.id == id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    // Xử lý Modal xóa tài khoản
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedRating(ratings.find(r => r.id == id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

    useEffect(() => {
        axiosClient.get(`/Ratings/page?page=${page}`)
            .then(res => setRatings(res.data));
    }, [page]);

    const handleDelete = () => {
        axiosClient.delete(`/Ratings/${selectedRating.id}`);
        let list = ratings;
        list.splice(ratings.findIndex(r => r.id == selectedRating.id), 1);
        setRatings(list);
        setShowDelete(false);
    }

    return (
        <>
            <div className="rating">
          <Sidebar />
      <div className="ratingContainer">
        <Navbar />
            <Link to="/admin/ratings/add" className="btn btn-success mb-2">
                <FontAwesomeIcon icon={faPlus} /> Thêm
            </Link>

            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Id Khách hàng</th>
                        <th>Mã sản phẩm</th>
                        <th>Mã Combo</th>
                        <th>Số sao</th>
                        <th>Nội dung Đánh giá</th>
                        <th>Ngày đánh giá</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        ratings.map(item =>
                            <tr className="align-middle">
                                <td>{i++}</td>
                                {/*
                                <td>
                                    <img src={`https://localhost:7104/images/avatar/${item.avatar}`} style={{ width: "50px" }} />
                                </td>
                                 */}
                                <td>{item.userId}</td>
                                <td>{item.productId}</td>
                                <td>{item.comboId}</td>
                                <td>{item.star}</td>
                                <td>{item.reviewText}</td>
                                <td>{item.reviewDate}</td>
                                <td>{item.status ? ' Còn sản phẩm' : ' Hết hoặc đã không còn'}</td>
                                <td>
                                    <Button variant="info" style={{ marginRight: "5px" }} onClick={() => handleShow(item.id)}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </Button>
                                    <Link to={`/admin/ratings/edit/${item.id}`} className="btn btn-warning" style={{ marginRight: "5px" }}>
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
                    <Modal.Title>Thông tin Đánh giá</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                         {/* <Col md={4}>
                            <img src={`https://localhost:7104/images/avatar/${selectedAccount.avatar}`} style={{ width: "100%" }} />
                        </Col>  */}
                         <Col md={4}>
                            <dl>
                                <dt>Id khách hàng:</dt>
                                <dd>{selectedRating.userId}</dd>

                                <dt>Mã sản phẩm:</dt>
                                <dd>{selectedRating.productId}</dd>

                                <dt>Mã Combo:</dt>
                                <dd>{selectedRating.comboId}</dd>

                                <dt>Số sao đánh giá:</dt>
                                <dd>{selectedRating.star}</dd>
                            </dl>
                        </Col>
                        <Col md={4}>
                            <dl>
                                <dt>Nội dung đánh giá:</dt>
                                <dd>{selectedRating.reviewText}</dd>

                                <dt>Ngày đánh giá:</dt>
                                <dd>{selectedRating.reviewDate}</dd>

                                <dt>Loại tài khoản:</dt>
                                <dd>{selectedRating.status ? 'Hiển thị':'Chờ duyệt'}</dd>
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
                <Modal.Body>Bạn có chắc muốn xóa đánh giá <span style={{ fontWeight: "bold" }}>{selectedRating.UserId}</span>?</Modal.Body>
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

export default RatingList;