import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./combo.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const ComboEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [combo, setCombo] = useState({});

    useEffect(() => {
        axiosClient.get(`/Comboes/${id}`)
            .then(res => setCombo(res.data))
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setCombo(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setCombo(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/Comboes/${id}`, combo)
            .then(() => navigate('/admin/combos'));
    }

    const [productTypes, setProductTypes] = useState([]);
     useEffect(() => {
        axiosClient.get(`/Comboes`)
            .then(res => setCombo(res.data));
    }, []); 


    return (
        <>
            <div className="combo">
            <Sidebar />
      <div className="comboContainer">
        <Navbar />
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên sản phẩm:</Form.Label>
                    <Form.Control type="text" name="name" value={combo.name} onChange={handleChange} />
                </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ảnh sản phẩm:</Form.Label>
                    <Form.Control type="file" name="image" value={combo.image}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Giá cũ:</Form.Label>
                    <Form.Control type="number" name="price"  value={combo.price} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                    <Form.Label>Giá mới:</Form.Label>
                    <Form.Control type="number" name="newPrice" value={combo.price} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Mô tả:</Form.Label>
                    <Form.Control type="text" name="description" value={combo.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Trạng thái:</Form.Label>
                    <Form.Check type="switch" label="Còn hoạt động" name="status" onChange={handleCheck} checked={combo.status} />
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faCheck} /> Cập nhật
                </Button>
                    </Form>
                </div>
                </div>
        </>
    );
}

export default ComboEdit;