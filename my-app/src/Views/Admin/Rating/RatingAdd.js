import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  "./rating.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const RatingAdd = () => {
    const navigate = useNavigate();

    const [rating, setRating] = useState({});
    //const handleStarClick = (selectedRating) => {
   //     setRating(selectedRating);
   //   };

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setRating(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setRating(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Ratings`, rating)
            .then(() => navigate('/admin/ratings'));
    }

    return (
        <>
             <div className="rating">
          <Sidebar />
      <div className="ratingContainer">
        <Navbar />
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Id Khách hàng:</Form.Label>
                    <Form.Control type="text" name="userId" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã Sản phẩm:</Form.Label>
                    <Form.Control type="number" name="productId" min={1} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Mã Combo:</Form.Label>
                    <Form.Control type="number" name="comboId" min={1} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Số sao:</Form.Label>
                
                    <Form.Control type="number" name="star" min={1} onChange={handleChange} />
                    {/* <div>                      
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                            key={star}
                            onClick={() => handleStarClick(star)}
                            style={{
                                cursor: 'pointer',
                                color: star <= rating ? 'gold' : 'gray',
                            }}
                            >
                            ★
                            </span>
                        ))}
                    </div>                */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nội dung đánh giá:</Form.Label>
                    <Form.Control type="text" name="reviewText"  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ngày đánh giá:</Form.Label>
                    <Form.Control type="date" name="reviewDate"  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Trạng thái:</Form.Label>
                    <Form.Check type="switch" label="Còn hoạt động" name="status" onChange={handleCheck} />
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

export default RatingAdd;