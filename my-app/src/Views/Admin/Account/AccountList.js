import { faCheck, faEdit, faPlus, faTimes, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);
    var i = 1;

    // Xử lý Modal thông tin tài khoản
    const [show, setShow] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState({});
    const handleShow = (id) => {
        setSelectedAccount(accounts.find(a => a.id == id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    // Xử lý Modal xóa tài khoản
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedAccount(accounts.find(a => a.id == id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

    useEffect(() => {
        axios.get(`https://localhost:7248/api/Accounts`)
            .then(res => setAccounts(res.data));
    }, []);

    const handleDelete = () => {
        axios.delete(`https://localhost:7248/api/Accounts/${selectedAccount.id}`);
        let list = accounts;
        list.splice(accounts.findIndex(a => a.id == selectedAccount.id), 1);
        setAccounts(list);
        setShowDelete(false);
    }

    return (
        <>
            <Link to="/admin/accounts/add" className="btn btn-success mb-2">
                <FontAwesomeIcon icon={faPlus} /> Thêm
            </Link>

            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Ảnh đại diện</th>
                        <th>Tên đăng nhập</th>
                        <th>Email</th>
                        <th>Họ tên</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map(item =>
                            <tr className="align-middle">
                                <td>{i++}</td>
                                <td>
                                    <img src={`https://localhost:7248/images/avatar/${item.avatar}`} style={{ width: "50px" }} />
                                </td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.fullName}</td>
                                <td>
                                    <Button variant="info" style={{ marginRight: "5px" }} onClick={() => handleShow(item.id)}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </Button>
                                    <Link to={`/admin/accounts/edit/${item.id}`} className="btn btn-warning" style={{ marginRight: "5px" }}>
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
                    <Modal.Title>Thông tin tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={4}>
                            <img src={`https://localhost:7248/images/avatar/${selectedAccount.avatar}`} style={{ width: "100%" }} />
                        </Col>
                        <Col md={4}>
                            <dl>
                                <dt>Tên đăng nhập:</dt>
                                <dd>{selectedAccount.username}</dd>

                                <dt>Email:</dt>
                                <dd>{selectedAccount.email}</dd>

                                <dt>SĐT:</dt>
                                <dd>{selectedAccount.phone}</dd>
                            </dl>
                        </Col>
                        <Col md={4}>
                            <dl>
                                <dt>Địa chỉ:</dt>
                                <dd>{selectedAccount.address}</dd>

                                <dt>Họ tên:</dt>
                                <dd>{selectedAccount.fullName}</dd>

                                <dt>Loại tài khoản:</dt>
                                <dd>{selectedAccount.isAdmin ? "Quản trị viên" : "Thành viên"}</dd>
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
                <Modal.Body>Bạn có chắc muốn xóa tài khoản <span style={{ fontWeight: "bold" }}>{selectedAccount.username}</span>?</Modal.Body>
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

export default AccountList;