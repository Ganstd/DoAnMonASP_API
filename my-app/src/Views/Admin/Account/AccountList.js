import { faCheck, faEdit, faPlus, faTimes, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Pagination, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import  "./account.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import axiosClient from './../../../Components/axiosClient';

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);
    const [search, setSearch] = useState('');
    var i = 1;
    const [page, setPage] = useState(1);
    let totalProducts = 90; // Total number of products
    let pageSize = 5; // Number of products per page
    let totalPages = Math.ceil(totalProducts / pageSize); // Calculate total number

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
        axiosClient.get(`/Users/page?search=${search}&page=${page}`)
            .then(res => setAccounts(res.data));
    }, [page, search]);

    const handleDelete = () => {
        axiosClient.delete(`/Users/id?id=${selectedAccount.id}`);
        let list = accounts;
        list.splice(accounts.findIndex(a => a.id == selectedAccount.id), 1);
        setAccounts(list);
        setShowDelete(false);
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <div className="account">
            <Sidebar />
      <div className="accountContainer">
                    <Navbar /> 
                    
                    <div className="search">
                        <label>Tìm kiếm </label>
                        <input type="text" name="search" value={search} placeholder="Tên user" onChange={handleSearchChange} />
                    </div>

            
            <Link to="/admin/accounts/addadmin" className="btn btn-success mb-2">
                <FontAwesomeIcon icon={faPlus} /> Thêm Admin
            </Link>

            <Table>
                    <thead className="table-dark">
                            <tr>
                                <th>STT</th>
                                <th>ID</th>        
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
                                <td>{item.id}</td>
                                <td>{item.userName}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
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
                    <Modal.Title>Thông tin tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <Row>
                                {/*
                        <Col md={4}>
                            <img src={`https://localhost:7248/images/avatar/${selectedAccount.avatar}`} style={{ width: "100%" }} />
                        </Col>
                        */}
                        <Col md={4}>
                            <dl>
                                <dt>Tên đăng nhập:</dt>
                                <dd>{selectedAccount.userName}</dd>

                                <dt>Họ tên:</dt>
                                <dd>{selectedAccount.name}</dd>
                               
                            </dl>
                        </Col>
                        <Col md={4}>
                                    <dl>
                                        <dt>Email:</dt>
                                <dd>{selectedAccount.email}</dd>

                                <dt>SĐT:</dt>
                                <dd>{selectedAccount.phoneNumber}</dd>
                                    {/* 
                                <dt>Địa chỉ:</dt>
                                <dd>{selectedAccount.address}</dd>

                                

                                <dt>Loại tài khoản:</dt>
                                        <dd>{selectedAccount.isAdmin ? "Quản trị viên" : "Thành viên"}</dd>
                                        */}
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
                <Modal.Body>Bạn có chắc muốn xóa tài khoản <span style={{ fontWeight: "bold" }}>{selectedAccount.name}</span>?</Modal.Body>
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

export default AccountList;