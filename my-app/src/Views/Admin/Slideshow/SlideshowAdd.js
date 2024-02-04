import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./slideshow.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const SlideshowAdd = () => {
    const navigate = useNavigate();

    const [slideshow, setSlideshow] = useState({
        title: '',
        url: '',
        imageFile: null,
        status:true,
    });

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('title', slideshow.title);
        formData.append('url', slideshow.url);
        formData.append('imageFile', slideshow.imageFile);
        formData.append('status', slideshow.status);

        try {
            const respone = await axiosClient.post(`/Slideshows`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(() => navigate('/admin/slideshows'));
            alert("Thêm Slideshow thành công");
            console.log(respone.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="slideshow">
          <Sidebar />
      <div className="slideshowContainer">
        <Navbar />
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên :</Form.Label>
                    <Form.Control type="text" name="title" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ảnh :</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleFileUpload}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Đường dẫn:</Form.Label>
                    <Form.Control type="text" name="url" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Trạng thái:</Form.Label>
                    <Form.Select name="status" onChange={handleCheck} disabled>
                        <option disabled value="1" selected>Hoạt động</option>
                    </Form.Select>
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

export default SlideshowAdd;