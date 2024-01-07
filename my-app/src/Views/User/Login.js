import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form } from "react-bootstrap";
import axiosClient from './../../Components/axiosClient';
import { faFacebookF, faGithub, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Login = () => {
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
            <div style={{width:"80%",borderRadius:"30px",background:"#b3e6ff",margin:"auto",marginTop:"100px",display:"flex",boxShadow:"20px 20px 20px  #999999"}}>
                <div style={{width:"50%",borderRadius:"30px"}}>
                    <div  style={{textAlign:"center",marginTop:"10px"}}>
                        <h3 style={{paddingTop:"10px"}}>Sign In</h3>
                    </div>
                    <div  style={{textAlign:"center"}}>
                        <button style={{width:"40px",height:"40px",margin:"5px",borderRadius:"10px",border:"none",background:"#fff"}}>
                            <FontAwesomeIcon icon={faGooglePlusG} />
                        </button>
                        <button style={{width:"40px",height:"40px",margin:"5px",borderRadius:"10px",border:"none",background:"#fff"}}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>
                        <button style={{width:"40px",height:"40px",margin:"5px",borderRadius:"10px",border:"none",background:"#fff"}}>
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                        <button style={{width:"40px",height:"40px",margin:"5px",borderRadius:"10px",border:"none",background:"#fff"}}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </button>
                    </div>
                    <div >
                        <Form >
                            <Form.Group style={{margin:"auto",width:"80%",marginTop:"20px"}}>
                                <Form.Control type="text" name="username" placeholder="Username" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group style={{margin:"auto",width:"80%",marginTop:"20px"}}>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
                            </Form.Group>
                            <div style={{textAlign:"center",marginTop:"20px"}}>
                                <p style={{margin:"0px"}}><a href="/register" style={{textDecoration: "none",margin: "auto",color: "#000000"}}>Forget Your Password ?</a></p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <button style={{width:"150px",height:"40px",margin:"20px",borderRadius:"10px",border:"none",background:"#fff"}} onChange={handleChange}>Sign In</button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div style={{width:"50%",borderRadius:"30px",background:" #ffff4d"}}>
                    <div style={{textAlign:"center",marginTop:"100px"}}>
                        <h2 >Welcome, Friend!</h2>
                        <p style={{fontSize:"20px",width:"80%",margin:"auto"}}>Enter your personal details to use all of site features </p>
                        <div style={{textAlign:"center"}}>
                            <button style={{width:"150px",height:"40px",margin:"20px",borderRadius:"10px",border:"none",background:"#fff"}}><a href="/user/signup" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}>SIGN UP </a></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;