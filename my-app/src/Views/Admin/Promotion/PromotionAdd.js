import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  "./promotion.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const PromotionAdd = () => {
    const navigate = useNavigate();

    const [promotion, setPromotion] = useState();
   

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPromotion(prev => ({ ...prev, [name]: value }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Promotions`, promotion)
            .then(() => navigate('/admin/promotions'));
    }

    return (
        <>
            <div className="promotion">
            <Sidebar />
      <div className="promotionContainer">
        <Navbar />
            <Form className="col-md-3">
            <Form.Group className="mb-3">
                    <Form.Label>Chương trình Khuyến mãi:</Form.Label>
                    <Form.Control type="text" name="name"  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Giảm giá:</Form.Label>
                    <Form.Control type="number" name="discount" min={1}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã sản phẩm:</Form.Label>
                    <Form.Control type="number" name="productId" min={1}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã Loại sản phẩm:</Form.Label>     
                    <Form.Control type="number" name="productTypeId" min={1}  onChange={handleChange} />             
                   
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã hóa đơn:</Form.Label>
                    <Form.Control type="number" name="invoiceId"  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ngày bắt đầu:</Form.Label>
                    <Form.Control type="date" name="startDay"  onChange={handleChange} />                          
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Ngày Kết thúc:</Form.Label>
                    <Form.Control type="date" name="endDay"  onChange={handleChange} />                          
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus} /> Thêm
                </Button>
                    </Form>
                    </div>
                </div>
        </>
    );
}

export default PromotionAdd;