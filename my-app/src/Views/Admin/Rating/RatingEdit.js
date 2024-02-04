import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import  "./rating.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';


const RatingEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [rating, setRating] = useState({});
    // const handleStarClick = (selectedRating) => {
    //     setRating(selectedRating);
    //   };

    useEffect(() => {
        axiosClient.get(`/Ratings/${id}`)
            .then(res => setRating(res.data))
    }, []);

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
        axiosClient.put(`/Ratings/${id}`, rating)
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
                    <Form.Control type="text" name="userId" value={rating.userId} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã sản phẩm:</Form.Label>
                    <Form.Control type="number" name="productId" min={1} value={rating.productId} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã Combo:</Form.Label>
                    <Form.Control type="number" name="comboId" min={1} value={rating.comboId} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Số sao:</Form.Label>     
                    <Form.Control type="number" name="star" min={1} max={5} value={rating.star} onChange={handleChange} />             
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
                    </div> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nội dung đánh giá:</Form.Label>
                    <Form.Control type="text" name="reviewText" value={rating.reviewText} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ngày đánh giá:</Form.Label>
                    <Form.Control type="date" name="reviewDate" value={rating.reviewDate} onChange={handleChange} />                          
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Trạng thái:</Form.Label>
                    <Form.Check type="switch" label="Còn hoạt động" name="status" onChange={handleCheck} checked={rating.status} />
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

export default RatingEdit;
