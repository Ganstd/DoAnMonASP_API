import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form } from "react-bootstrap";

import { faFacebookF, faGithub, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Signup = () => {
    
    return (
        <>
            <div style={{width:"80%",borderRadius:"30px",background:"#b3e6ff",margin:"auto",marginTop:"50px",display:"flex",boxShadow:"20px 20px 20px  #999999"}}>
                <div style={{width:"50%",borderRadius:"30px",background:" #ffff4d"}}>
                    <div style={{textAlign:"center",marginTop:"100px"}}>
                        <h2 >Welcome Back!</h2>
                        <p style={{fontSize:"20px",width:"80%",margin:"auto"}}>Enter your personal details to use all of site features </p>
                        <div style={{textAlign:"center"}}>
                            <button style={{width:"150px",height:"40px",margin:"20px",borderRadius:"10px",border:"none",background:"#fff"}}><a href="/user/Login" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}>SIGN IN</a></button>
                        </div>
                    </div>
                </div>
                <div style={{width:"50%",borderRadius:"30px"}}>
                    <div  style={{textAlign:"center",marginTop:"10px"}}>
                        <h3 style={{paddingTop:"10px"}}>Create Account</h3>
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
                        <div style={{textAlign:"center",marginTop:"20px"}}>
                            <p style={{margin:"0px"}}>Or use your email for registeration</p>
                        </div>
                    </div>
                    <div >
                        <Form >
                            <Form.Group style={{margin:"auto",width:"80%",marginTop:"20px"}}>
                                <Form.Control type="text" name="username" placeholder="Username"  />
                            </Form.Group>
                            <Form.Group style={{margin:"auto",width:"80%",marginTop:"20px"}}>
                                <Form.Control type="text" name="Email" placeholder="Email"  />
                            </Form.Group>
                            <Form.Group style={{margin:"auto",width:"80%",marginTop:"20px"}}>
                                <Form.Control type="password" name="password" placeholder="Password"  />
                            </Form.Group>
                            
                            <div style={{textAlign:"center"}}>
                                <button style={{width:"150px",height:"40px",margin:"20px",borderRadius:"10px",border:"none",background:"#fff"}} >Sign Up</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;