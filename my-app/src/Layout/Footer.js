import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={4}>
            <h3>Shop FastFood VIETNAM</h3>
            <p><FontAwesomeIcon icon={faLocationDot} style={{ color: "#cad954", }} />  202 Lý Chính Thắng, Phường 09, Quận 3, TP. Hồ Chí Minh</p>
            <p><FontAwesomeIcon icon={faPhone} style={{ color: "#d5e873", }} />  (028) 393 11&nbsp;039</p>
            <p><FontAwesomeIcon icon={faEnvelope} style={{ color: "#d5d66b", }} />  info.texaschicken@fb.mesa.vn</p>
            <p><FontAwesomeIcon icon={faGlobe} style={{ color: "#e6f05c", }} />  www.texaschickenvn.com</p>
            <div className="aamap">
              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#c03535", }} /> <p>Xem bản đồ</p>
            </div>

          </Col>
          <Col md={4}>
            <h3>Thông tin</h3>
            <p>Thực đơn</p>
            <p>Khuyến mãi</p>
            <p>Tin tức</p>

          </Col>
          <Col md={4}>
            <h4>Đăng ký nhận thông tin ưu đãi</h4>
            <FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#f3ee5e", marginRight: '10px' }} />
            <FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: "#eed52f", }} />


          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <img className="d-block w-50" src="/assets/images/congthuong.png" alt="Bộ công thương" />

          </Col>
          <Col md={3}>
            <p>Chính sách quy định</p>

          </Col>
          <Col md={3}>
            <p>Chính sách bảo mật</p>

          </Col>
          <Col md={3}>
            <p>Copyright © 2023 Texas Chicken Vietnam</p>

          </Col>
        </Row>
        <Row>
          <p>Số GCNĐKDN: 4001215xxx - Ngày cấp: 0x/0x/20xx. Nơi cấp: Sở Kế hoạch và Đầu tư Tỉnh ABC</p>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;
