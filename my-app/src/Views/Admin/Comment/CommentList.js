import { faCheck, faEdit, faPlus, faTimes, faTrash, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import  "./comment.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const CommentList = () => {
    const [comments, setComments] = useState([]);
    var i = 1;

    // Xử lý Modal thông tin tài khoản
    const [show, setShow] = useState(false);
    const [selectedComment, setSelectedComment] = useState({});
    const handleShow = (id) => {
        setSelectedComment(comments.find(c => c.id == id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    // Xử lý Modal xóa tài khoản
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedComment(comments.find(c => c.id == id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

    useEffect(() => {
        axiosClient.get(`https://localhost:7104/api/Comments`)
            .then(res => setComments(res.data));
    }, []);

    const handleDelete = () => {
        axiosClient.delete(`https://localhost:7104/api/Comments/${selectedComment.id}`);
        let list = comments;
        list.splice(comments.findIndex(c => c.id == selectedComment.id), 1);
        setComments(list);
        setShowDelete(false);
    }

    return (
            <>
                <div className="comment">
                    <Sidebar />
                <div className="commentContainer">
                    <Navbar /> 
            <Link to="/admin/comments/add" className="btn btn-success mb-2">
                <FontAwesomeIcon icon={faPlus} /> Thêm
            </Link>

            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Id Khách hàng</th>
                        <th>Mã sản phẩm</th>
                        <th>Mã Combo</th>
                        <th>Nội dung bình luận</th>
                        <th>Ngày bình luận</th>
                        <th>ParentCommentId</th>
                        <th>Chức năng</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        comments.map(item =>
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
                                <td>{item.commentText}</td>
                                <td>{item.commentDate}</td>
                                <td>{item.parentCommentId}</td>
                                <td>
                                    <Button variant="info" style={{ marginRight: "5px" }} onClick={() => handleShow(item.id)}>
                                        <FontAwesomeIcon icon={faComment} />
                                    </Button>
                                    <Link to={`/admin/comments/edit/${item.id}`} className="btn btn-warning" style={{ marginRight: "5px" }}>
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
                    <Modal.Title>Bình luận</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                         {/* <Col md={4}>
                            <img src={`https://localhost:7104/images/avatar/${selectedAccount.avatar}`} style={{ width: "100%" }} />
                        </Col>  */}
                         <Col md={4}>
                            <dl>
                                <dt>Id khách hàng:</dt>
                                <dd>{selectedComment.userId}</dd>

                                <dt>Mã sản phẩm:</dt>
                                <dd>{selectedComment.productId}</dd>

                                <dt>Mã Combo:</dt>
                                <dd>{selectedComment.comboId}</dd>
                               
                            </dl>
                        </Col>
                        <Col md={4}>
                            <dl>
                                <dt>Nội dung bình luận:</dt>
                                <dd>{selectedComment.commentText}</dd>

                                <dt>Ngày bình luận:</dt>
                                <dd>{selectedComment.commentDate}</dd>

                                <dt>ParentCommentId:</dt>
                                <dd>{selectedComment.parentCommentId}</dd>
                               
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
                <Modal.Body>Bạn có chắc muốn xóa bình luận <span style={{ fontWeight: "bold" }}>{selectedComment.UserId}</span>?</Modal.Body>
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

export default CommentList;