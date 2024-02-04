import React, { useEffect, useState } from 'react';
import {faCheck, faEdit, faEye, faStar, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Modal, Row, Table } from 'react-bootstrap';
import axiosClient from '../../../Components/axiosClient';
import "./combo.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const ComboList  = () => {

    const [combo, setCombo] = useState([]);

    useEffect(() => {
        axiosClient.get(`/Comboes`)
            .then(res => setCombo(res.data));
    
    }, []);

         // Xử lý Modal thông tin
    const [show, setShow] = useState(false);
     const [selectedCombo, setSelectedCombo] = useState({});
    const handleShow = (id) => {
        setSelectedCombo(combo.find(p => p.id == id));
        setShow(true);
    }
    const handleClose = () => setShow(false);
    // Xử lý Modal xóa 
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedCombo(combo.find(p => p.id == id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

    const handleDelete = () => {
        axiosClient.delete(`/Comboes/${selectedCombo.id}`);
        let list = combo;
        list.splice(combo.findIndex(p => p.id == selectedCombo.id), 1);
        setCombo(list);
        setShowDelete(false);
    }

    return (
        <>
            <div className='combo'>
                <Sidebar />
                <div className='comboContainer'>
                    <Navbar />
            
                    <Link to={'/admin/combos/add'} className='btn btn-success md-2'>
                        Thêm
                    </Link>
            <Table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Tên Combo</th>
                        <th>Hình ảnh</th>
                        <th>Giá cũ</th>
                        <th>Giá mới</th>
                        <th>Mô tả </th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                      {
                    combo.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td >
                                <img src={`https://localhost:7104/assets/img/accompanying/${item.image}`} alt={item.title} style={{ width: "100%" }} />
                            </td>
                            <td>{item.price}</td>
                            <td>{item.newPrice}</td>
                            <td>{item.description}</td>
                            <td>{item.status ? 'Hoạt động' : 'Không hoạt động'}</td>
                            <td>
                                <Link to={`/admin/combos/detail/${item.id}`} className='btn btn-info md-2'>
                                    <FontAwesomeIcon icon={ faEye} />
                                </Link>
                                <Link to={`/admin/combos/edit/${item.id}`} className='btn btn-success md-2' >
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>
                                <Button  variant="danger" onClick={() => handleShowDelete(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                        
                            )
                        }
                </tbody>
            </Table>
            
                    
                                <Modal show={showDelete} onHide={handleCloseDelete} centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Xác nhận xóa</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Bạn có chắc muốn xóa loại phẩm <span style={{ fontWeight: "bold" }}>{selectedCombo.name}</span>?</Modal.Body>
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
};

export default ComboList;