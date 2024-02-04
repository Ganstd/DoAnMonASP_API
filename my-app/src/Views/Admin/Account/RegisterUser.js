import { useState } from "react";
import { Button, Form} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../Components/axiosClient';
import  "./account.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const RegisterUser = () => {

    const navigate = useNavigate();

    const [account, setAccount] = useState({});

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setAccount(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Users/register`, account)
            .then(() => navigate('/admin/accounts'));
    }
   
   
    return ( 
        <>
             <div className="account">
            <Sidebar />
      <div className="accountContainer">
                    <Navbar /> 
                    <div className="register-form">
                    <h2>Thêm User</h2>
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên đăng nhập:</Form.Label>
                    <Form.Control placeholder="Username" type="text" name="username" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu:</Form.Label>
                    <Form.Control placeholder="Password" type="password" name="password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control placeholder="Password" type="email" name="email" onChange={handleChange} />
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>Đăng ký</Button>
                    </Form>
                </div>
                </div>
                </div>
        </>
     );
}
 
export default RegisterUser; 

