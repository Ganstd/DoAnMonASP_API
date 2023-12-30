import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSquareFacebook, faSquareInstagram, faSquareTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <>
      <footer>
        <div style={{display:"flex"}}>
          <div style={{ width: "25%"}} class="footer1">
                  <h4 style={{ margin: "20px"}}>POLICIES</h4>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}>Group Buy & Pre-order Policy</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}>Refund & Return Policy</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}>Order Modìication & Merging Policy</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}>Privacy Policy</a>
          </div>
          <div style={{ width: "25%"}}class="footer2">
                  <h4 style={{ margin: "20px"}}>IFNORMATION</h4>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}>Terms & Conditions</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}>Frequently Asked & Questions</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}>Contact Us</a>
          </div>
          <div style={{ width: "25%"}}class="footer3">
                  <h4 style={{ margin: "20px"}}>SOCIAL MADIA</h4>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}><FontAwesomeIcon icon={faDiscord} style={{color: "#000000",}} /> Discord</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}><FontAwesomeIcon icon={faSquareInstagram} style={{color: "#000000",}} /> Intagram</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}><FontAwesomeIcon icon={faSquareTwitter} style={{color: "#000000",}} /> Twitter</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#000000",}} /> Faceboock</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}><FontAwesomeIcon icon={faYoutube} style={{color: "#000000",}} /> Youtube</a>
                  <a href="/" style={{color: "#000000",textDecoration: "none",display: "block",margin: "5px 20px"}}><FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} /> Gmail</a>
          </div>
          <div style={{ width: "25%"}}class="footer4">
                  <h4 style={{ margin: "20px"}}>NEWSLETTER SIGNUP</h4>
                  <div style={{ margin: "20px"}} class="guiemail">
                      <input type="email" placeholder="Your email" style={{width: "100px",height: "30px",backgroundColor: "rgb(35, 35, 35)",margin:"0",border: "none",color: "#ffffff"}} ></input><button style={{ height:"30px",border: "none",backgroundColor: "rgb(255, 94, 0)",color: "#ffffff" }}>SUBCRIBE</button>
                  </div>
                  <img src="/assets/img/logo/l1.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l2.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l3.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l4.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l5.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l6.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l7.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l8.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l9.jpg" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
                  <img src="/assets/img/logo/l10.png" alt="logo" style={{width: "50px",height: "20px",margin:"5px"}}></img>
          </div>
        </div>
        <div style={{margin:"20px",display:"flex"}}>
          <div style={{ width: "50%"}}>
            <h4>SHOP FASTFOOD VIETNAM</h4>
            <p><FontAwesomeIcon icon={faLocationDot} style={{ color: "#000000" }} />  202 Lý Chính Thắng, Phường 09, Quận 3, TP. Hồ Chí Minh</p>
            <p><FontAwesomeIcon icon={faPhone} style={{ color: "#000000" }} />  (028) 393 11&nbsp;039</p>
            <p><FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />  info.texaschicken@fb.mesa.vn</p>
            <p><FontAwesomeIcon icon={faGlobe} style={{ color: "#000000" }} />  www.texaschickenvn.com</p>
            <div className="aamap">
              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#000000" }} /><a href="https://www.google.com/maps/search/kfc/@10.8075025,106.7259463,11.75z?hl=vi-VN&entry=ttu" style={{color: "#000000",textDecoration: "none",}}> Xem Bản đồ</a>
            </div>
          </div>
          <div style={{ width: "50%"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d250819.18334002775!2d106.7259463!3d10.8075025!3m2!1i1024!2i768!4f13.1!2m1!1skfc!5e0!3m2!1svi!2s!4v1703402679117!5m2!1svi!2s" style={{ width:"100%", height:"250px" ,style:"border:0;", allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
          </div>
        </div>
        <div style={{display:"flex",margin:"20px"}}>
          <p style={{marginRight:"20px"}}>Copyright © 2023 Texas Chicken Vietnam</p>
          <p>Số GCNĐKDN: 4001215xxx - Ngày cấp: 0x/0x/20xx. Nơi cấp: Sở Kế hoạch và Đầu tư Tỉnh ABC</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
