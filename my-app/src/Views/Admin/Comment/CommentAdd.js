import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../../Components/axiosClient";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  "./comment.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const CommentAdd = () => {
    const navigate = useNavigate();

    const [comment, setComment] = useState({  });

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
        axiosClient.post(`https://localhost:7104/api/Comments`, comment)
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
                    <Form.Label>Nội dung bình luận:</Form.Label>
                    <Form.Control type="text" name="commentText"  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ngày bình luận:</Form.Label>
                    <Form.Control type="date" name="commentDate"  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ParentCommentId:</Form.Label>
                    <Form.Control type="number" name="parentCommentId"  onChange={handleChange} />
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

export default CommentAdd;