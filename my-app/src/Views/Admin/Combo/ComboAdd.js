import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./combo.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import axiosClient from "../../../Components/axiosClient";

const ComboAdd = () => {
    const navigate = useNavigate();

    const [combo, setCombo]  = useState();

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
        axiosClient.post(`/Comboes`, combo)
            .then(() => navigate('/admin/combos'));
    }

    return (
        <>
            <div className="combo">
            <Sidebar />
      <div className="comboContainer">
        <Navbar />
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên Combo: </Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ảnh sản phẩm: </Form.Label>
                    <Form.Control type="file" name="image"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Giá cũ: </Form.Label>
                    <Form.Control type="number" name="price" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Giá mới: </Form.Label>
                    <Form.Control type="tenumber" name="newPrice" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Mô tả:</Form.Label>
                    <Form.Control type="text" name="description" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Trạng thái:</Form.Label>
                    <Form.Select name="status" onChange={handleCheck} disabled>
                        <option disabled value="1" selected>Hoạt động</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus} /> Thêm
                </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default ComboAdd;