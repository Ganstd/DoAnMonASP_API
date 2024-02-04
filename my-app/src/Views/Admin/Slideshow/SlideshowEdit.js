import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./slideshow.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';


const SlideshowEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [slideshow, setSlideshow] = useState({});

    useEffect(() => {
        axiosClient.get(`/Slideshows/${id}`)
            .then(res => setSlideshow(res.data))
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setSlideshow(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setSlideshow(prev => ({ ...prev, [name]: value }));
    }

        const handleFileUpload = (e) => {
        setSlideshow({ ...slideshow, imageFile: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/Slideshows/${id}`, slideshow)
            .then(() => navigate('/admin/slideshows'));
    }

    return (
        <>
            <div className="slideshow">
                <Sidebar />
                <div className="slideshowContainer">
                <Navbar />
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên :</Form.Label>
                    <Form.Control type="text" name="title" value={slideshow.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ảnh :</Form.Label>
                    <Form.Control type="file" name="image" value={slideshow.imageFile} onChange={handleFileUpload}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Đường dẫn :</Form.Label>
                    <Form.Control type="text" name="url" value={slideshow.url} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="switch" label="Còn hoạt động" name="status" onChange={handleCheck} checked={slideshow.status} />
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

export default SlideshowEdit;