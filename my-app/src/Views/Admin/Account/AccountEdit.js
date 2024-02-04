import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import  "./account.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import axiosClient from "../../../Components/axiosClient";

const AccountEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [account, setAccount] = useState({});

    useEffect(() => {
        axiosClient.get(`/Users/${id}`)
            .then(res => setAccount(res.data))
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setAccount(prev => ({ ...prev, [name]: value }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/Users/${id}`, account)
            .then(() => navigate('/admin/accounts'));
    }

    return (
        <>
            <div className="account">
            <Sidebar />
      <div className="accountContainer">
        <Navbar />
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên đăng nhập:</Form.Label>
                    <Form.Control type="text" name="username" value={account.userName} onChange={handleChange} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={account.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Số điện thoại:</Form.Label>
                    <Form.Control type="text" name="phoneNumber" value={account.phoneNumber} onChange={handleChange} />
                </Form.Group>         
                <Form.Group className="mb-3">
                    <Form.Label>Họ tên:</Form.Label>
                    <Form.Control type="text" name="name" value={account.name} onChange={handleChange} />
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

export default AccountEdit;