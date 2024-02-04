import React, { useState, useEffect } from 'react';
import axiosClient from '../../../Components/axiosClient';
import { useNavigate } from 'react-router-dom';
import  "./profile.scss";
import { Button, Form } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';

const ChangePassword = () => {
    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [newPassword, setNewPassword] = useState('');
 
    useEffect(() => {
      const token = localStorage.getItem('jwt');
      const decodedToken = jwtDecode(token);

      setUserId(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
 }, []);
  
    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axiosClient.post(`/Users/ChangePassword?userId=${userId}&newPassword=${newPassword}`, {
            userId: userId,
            newPassword: newPassword,
        }).then(() => navigate(`/admin/accounts`));   
        alert('Đổi mật khẩu thành công');
        
      if (response.status === 200) {
        alert('Đổi mật khẩu thành công');
      } else {
        alert('Có lỗi xảy ra trong quá trình đổi mật khẩu');
      }
    } catch (error) {
      console.error(error);
    }
 };

    return (
      <>       
         <div className="changepassword">
            <h2>Thay đổi mật khẩu</h2>
              <Form className="col-md-3" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                      <Form.Label >Mật khẩu mới:</Form.Label>
                      <Form.Control placeholder="New Password" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                  </Form.Group>
                  <Button type="submit" variant="success" >Thay đổi mật khẩu</Button>
              </Form>
          </div>
      </>
 );
};

export default ChangePassword;
