import { faCheck, faEdit, faPlus, faTimes, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./producttype.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const ProductTypeList = () => {
    
    const [productTypes, setProductTypes] = useState([]);
    
     // Xử lý Modal thông tin
    const [show, setShow] = useState(false);
    const [selectedProductType, setSelectedProductType] = useState({});
    const handleShow = (id) => {
        setSelectedProductType(productTypes.find(p => p.id == id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    // Xử lý Modal xóa 
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedProductType(productTypes.find(p => p.id == id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

    const handleDelete = () => {
        axiosClient.delete(`/ProductTypes/${selectedProductType.id}`);
        let list = productTypes;
        list.splice(productTypes.findIndex(p => p.id == selectedProductType.id), 1);
        setProductTypes(list);
        setShowDelete(false);
    }

    useEffect(() => {
        axiosClient.get(`/ProductTypes`)
            .then(res => setProductTypes(res.data));
    }, []); 

      

    return (     
        <>
            <div className="producttype">
          <Sidebar />
      <div className="producttypeContainer">
        <Navbar /> 
            <Link to="/admin/producttypes/add" className="btn btn-success mb-2">
                <FontAwesomeIcon icon={faPlus} /> Thêm
            </Link>
            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Tên Loại sản phẩm</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productTypes.map(item => 
                            <tr className="align-middle">
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.status ? ' Còn sản phẩm' : ' Hết hoặc đã không còn'}</td>
                                <td>
                                    <Button variant="info" style={{ marginRight: "4px" }} onClick={() => handleShow(item.id)}>
                                        <FontAwesomeIcon icon={ faUser} />
                                    </Button>
                                    <Link to={`/admin/producttypes/edit/${item.id}`} className="btn btn-warning"  >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <Button variant="danger" onClick={() => handleShowDelete(item.id)}>
                                        <FontAwesomeIcon icon={ faTrash} />
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <Modal show={show} size="sm-5" onHide={handleClose} centered>
                <Modal.Header closeButton x>
                    <Modal.Title>Thông tin Hóa đơn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <dl>
                                <dt>Tên loại sản phẩm:</dt>
                                <dd>{selectedProductType.name}</dd>

                                <dt>Trạng thái:</dt>
                                <dd>{selectedProductType.status ? ' Còn sản phẩm' : ' Hết hoặc đã không còn'}</dd>
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
                <Modal.Body>Bạn có chắc muốn xóa loại phẩm <span style={{ fontWeight: "bold" }}>{selectedProductType.name}</span>?</Modal.Body>
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
 
export default ProductTypeList;