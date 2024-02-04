import { faCheck, faEdit, faPlus, faTimes, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./slideshow.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const SlideshowList = () => {
    
    const [slideshows, setSlideshows] = useState([]);


     // Xử lý Modal thông tin
    const [show, setShow] = useState(false);
    const [selectedSlideshows, setSelectedSlideshows] = useState({});
    const handleShow = (id) => {
        setSelectedSlideshows(slideshows.find(s => s.id == id));
        setShow(true);
    }
    const handleClose = () => setShow(false);

    // Xử lý Modal xóa 
    const [showDelete, setShowDelete] = useState(false);
    const handleShowDelete = (id) => {
        setSelectedSlideshows(slideshows.find(s => s.id == id));
        setShowDelete(true);
    }
    const handleCloseDelete = () => setShowDelete(false);

    const handleDelete = () => {
        axiosClient.delete(`/Slideshows/${selectedSlideshows.id}`);
        let list = slideshows;
        list.splice(slideshows.findIndex(p => p.id == selectedSlideshows.id), 1);
        setSlideshows(list);
        setShowDelete(false);
    }

    useEffect(() => {
        axiosClient.get(`/Slideshows`)
            .then(res => setSlideshows(res.data));
    }, []); 

      

    return (        
        <div className="slideshow">
          <Sidebar />
      <div className="slideshowContainer">
        <Navbar />
            <Link to="/admin/slideshows/add" className="btn btn-success mb-2">
                <FontAwesomeIcon icon={faPlus} /> Thêm
            </Link>
            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Hình ảnh</th>
                        <th>Đường dẫn</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        slideshows.map(item => 
                            <tr className="align-middle">
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>
                                    <img src={`https://localhost:7104/images/slideshow/${item.image}`} alt={item.title} style={{ width: "50px" }} />
                                </td>
                                <td>{item.url}</td>
                                <td>{item.status ? ' Hoạt động' : ' không hoạt động'}</td>
                                <td>
                                    {/*
                                    <Button variant="info" style={{ marginRight: "4px" }} onClick={() => handleShow(item.id)}>
                                        <FontAwesomeIcon icon={ faUser} />
                                    </Button>
                                    */}
                                    <Link to={`/admin/slideshows/edit/${item.id}`} className="btn btn-warning" style={{ marginRight:"4px"}}>
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
           
                {/*
            <Modal show={show} size="sm-5" onHide={handleClose} centered>
                <Modal.Header closeButton >
                    <Modal.Title>Thông tin Slideshow</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <dl>
                                <dt>Tên :</dt>
                                <dd>{selectedSlideshows.title}</dd>

                                <dt>Đường dẫn :</dt>
                                <dd>{selectedSlideshows.url}</dd>

                                <dt>Trạng thái:</dt>
                                <dd>{selectedSlideshows.status ? ' Hoạt động' : ' không còn hoạt động'}</dd>
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
                */}


            <Modal show={showDelete} onHide={handleCloseDelete} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc muốn xóa loại phẩm <span style={{ fontWeight: "bold" }}>{selectedSlideshows.title}</span>?</Modal.Body>
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
     );
}
 
export default SlideshowList;