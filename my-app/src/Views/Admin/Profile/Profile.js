import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import  "./profile.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import axiosClient from './../../../Components/axiosClient';
import ChangePassword from './ChangePassword';
import { Col, Row } from 'react-bootstrap';

function Profile() {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
    const token = localStorage.getItem('jwt');
    const decodedToken = jwtDecode(token);

    setUserId(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
    setUsername(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
    setRole(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
 }, []);

      const [user, setUser] = useState({});
         useEffect(() => {
        axiosClient.get(`/Users/${userId}`)
            .then(res => setUser(res.data))
    }, [userId]);
      
   return (
         <div className="login">
               <Sidebar />
            <div className="loginContainer">
                     <Navbar />
                        <Row >
                           <Col md={5}>
                              <h4>Mã người dùng: {user.id}</h4>
                              <p>Họ tên: {user.name}</p>
                              <p>Username: {user.userName}</p>
                              <p>Email: {user.email}</p>
                              <p>Số điện thoại: {user.phoneNumber}</p>
                              <p>Role: {role}</p>    
                           </Col>
                           <Col md={7}>
                              <ChangePassword />
                           </Col>
                        </Row>
                     
                                
                           
                     

                     {/*
                     <p>User ID: {userId}</p>
                     <p>Username: {username}</p> 
                     <p>Name: { name}</p>
                     <p>Email: {email}</p>
                     <p>Role: {role}</p>
                     */}
 
            </div>
      </div>      
 );
}

export default Profile;
