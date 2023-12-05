import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AccountAdd = () => {
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
                    <Form.Label>Tên đăng nhập:</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu:</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>SĐT:</Form.Label>
                    <Form.Control type="text" name="phone" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ:</Form.Label>
                    <Form.Control type="text" name="address" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Họ tên:</Form.Label>
                    <Form.Control type="text" name="fullName" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ảnh đại diện:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="switch" label="Là admin" name="isAdmin" onChange={handleCheck} />
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

export default AccountAdd;