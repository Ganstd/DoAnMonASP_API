import React, { useState } from 'react';
import axios from 'axios';
import  "./login.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

function LoginAdmin() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = async event => {
 event.preventDefault();

 try {
   const response = await axios.post('https://localhost:7104/api/Users/login', { username, password });
   
   if (response.data.token) {
     localStorage.setItem('jwt', response.data.token);
     // Redirect to user profile page
     window.location.href = '/admin';
     alert('Đăng nhập thành công')
   } else {
     alert('Nhập tài khoản hoặc mật khẩu');
   }
 } catch (error) {
   alert('Đăng nhập thất bại', error);
 }
 };

  
  return (
   <div className="login">
          <Sidebar />
      <div className="loginContainer">
        <Navbar />

        <div className="login-form">
          <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
              <label className="login-form_label">
                Username: 
                <input className="login-form_input" type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <br/>
              <label className="login-form_label">
                Password:
                <input className="login-form_input" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <br/>
              <button className="login-form_button" type="submit">Log in</button>
            </form>
          </div>
      </div>
    </div>
 );
}

export default LoginAdmin;
