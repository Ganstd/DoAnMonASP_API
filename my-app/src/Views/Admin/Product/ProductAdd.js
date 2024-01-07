import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const navigate = useNavigate();

    const [account, setAccount] = useState({ isAdmin: false, avatar: "customer.jpg", status: true });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setAccount(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setAccount(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://localhost:7248/api/Accounts`, account)
            .then(() => navigate('/accounts'));
    }

    return (
        <>
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên sản phẩm:</Form.Label>
                    <Form.Control type="text" name="Tên sản phẩm" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Giá:</Form.Label>
                    <Form.Control type="number" name="giá" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Mô tả:</Form.Label>
                    <Form.Control type="text" name="Mô tả" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Loại sản phẩm:</Form.Label>
                    <Form.Control type="number" name="Loại sản phẩm" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Trạng thái:</Form.Label>
                    <Form.Control type="number" name="Trạng thái" value={1}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ảnh sản phẩm:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="switch" label="Còn hoạt động" name="status" onChange={handleCheck} />
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus} /> Thêm
                </Button>
            </Form>
        </>
    );
}

export default ProductAdd;