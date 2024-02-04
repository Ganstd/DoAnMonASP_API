import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import  "./promotion.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';


const PromotionEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [promotion, setPromotion] = useState({});


    useEffect(() => {
        axiosClient.get(`https://localhost:7104/api/Promotions/${id}`)
            .then(res => setPromotion(res.data))
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPromotion(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setPromotion(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/Promotions/${id}`, promotion)
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
                    <Form.Control type="text" name="name" value={promotion.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Giảm giá:</Form.Label>
                    <Form.Control type="number" name="discount" min={1} value={promotion.discount} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã sản phẩm:</Form.Label>
                    <Form.Control type="number" name="productId" min={1} value={promotion.productId} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã Loại sản phẩm:</Form.Label>     
                    <Form.Control type="text" name="ProductTypeId" min={1} value={promotion.productTypeId} onChange={handleChange} />             
                   
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã hóa đơn:</Form.Label>
                    <Form.Control type="number" name="invoiceId" value={promotion.invoiceId} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ngày bắt đầu:</Form.Label>
                    <Form.Control type="date" name="startDay" value={promotion.startDay} onChange={handleChange} />                          
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Ngày Kết thúc:</Form.Label>
                    <Form.Control type="date" name="endDay" value={promotion.endDay} onChange={handleChange} />                          
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faCheck} /> Cập nhật
                </Button>
                    </Form>
                </div>
                </div>
        </>
    );
}

export default PromotionEdit;
