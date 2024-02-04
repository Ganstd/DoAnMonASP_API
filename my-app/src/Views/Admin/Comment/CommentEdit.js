import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import  "./comment.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';


const CommentEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [comment, setComment] = useState({});
   

    useEffect(() => {
        axiosClient.get(`https://localhost:7104/api/Comments/${id}`)
            .then(res => setComment(res.data))
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setComment(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setComment(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`https://localhost:7104/api/Comments/${id}`, comment)
            .then(() => navigate('/admin/comments'));
    }
   
        
    return (
        <>
            <div className="comment">
                    <Sidebar />
                <div className="commentContainer">
                    <Navbar /> 
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Id Khách hàng:</Form.Label>
                    <Form.Control type="text" name="userId" value={comment.userId} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã sản phẩm:</Form.Label>
                    <Form.Control type="number" name="productId" min={1} value={comment.productId} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mã Combo:</Form.Label>
                    <Form.Control type="number" name="comboId" min={1} value={comment.comboId} onChange={handleChange} />
                </Form.Group>
               
                <Form.Group className="mb-3">
                    <Form.Label>Nội dung đánh giá:</Form.Label>
                    <Form.Control type="text" name="reviewText" value={comment.commentText} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ngày đánh giá:</Form.Label>
                    <Form.Control type="date" name="reviewDate" value={comment.commentDate} onChange={handleChange} />                          
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ParentCommentId:</Form.Label>     
                    <Form.Control type="text" name="parentCommentId" min={1} value={comment.parentCommentId} onChange={handleChange} />                              
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

export default CommentEdit;
