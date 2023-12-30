import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axiosClient from '../../Components/axiosClient';


const LoginAdmin = () => {
    const [account, setAccount] = useState({ username: "dhphuoc", password: "Dhphuoc@123" });

    const handleChange = (e) => {
        setAccount(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Users/login`, account)
            .then(res => localStorage.setItem("jwt", res.data.token));
    }

    return (
        <>

            <div className="container">
                <div class="row justify-content-center">
                    <h3>Đăng nhập</h3>
                </div>
                <div class="row justify-content-center">
                <Form className="col-md-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Tên đăng nhập:</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Username" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu:</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
                    </Form.Group>
                    <div class="row justify-content-center">
                        <Button type="submit" variant="success" onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faRightToBracket} size="xl" style={{ color: "#e0e3d4", }} /> Đăng nhập
                        </Button>
                    </div>
                </Form>
                </div>
            </div>
        </>
    );
}
export default LoginAdmin;