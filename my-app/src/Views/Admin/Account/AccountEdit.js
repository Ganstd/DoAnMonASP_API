import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const AccountEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [account, setAccount] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:7248/api/Accounts/${id}`)
            .then(res => setAccount(res.data))
    }, []);

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
        axios.put(`https://localhost:7248/api/Accounts/${id}`, account)
            .then(() => navigate('/accounts'));
    }

    return (
        <>
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên đăng nhập:</Form.Label>
                    <Form.Control type="text" name="username" value={account.username} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu:</Form.Label>
                    <Form.Control type="password" name="password" value={account.password} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={account.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>SĐT:</Form.Label>
                    <Form.Control type="text" name="phone" value={account.phone} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ:</Form.Label>
                    <Form.Control type="text" name="address" value={account.address} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Họ tên:</Form.Label>
                    <Form.Control type="text" name="fullName" value={account.fullName} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ảnh đại diện:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="switch" label="Là admin" name="isAdmin" onChange={handleCheck} checked={account.isAdmin} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="switch" label="Còn hoạt động" name="status" onChange={handleCheck} checked={account.status} />
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faCheck} /> Cập nhật
                </Button>
            </Form>
        </>
    );
}

export default AccountEdit;