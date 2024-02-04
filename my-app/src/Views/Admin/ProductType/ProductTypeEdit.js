import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./producttype.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const ProductTypeEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [productType, setProductType] = useState({});

    useEffect(() => {
        axiosClient.get(`/ProductTypes/${id}`)
            .then(res => setProductType(res.data))
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProductType(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setProductType(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/ProductTypes/${id}`, productType)
            .then(() => navigate('/admin/producttypes'));
    }

    return (
        <>
             <div className="producttype">
          <Sidebar />
      <div className="producttypeContainer">
        <Navbar /> 
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên Loại sản phẩm:</Form.Label>
                    <Form.Control type="text" name="name" value={productType.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="switch" label="Còn hoạt động" name="status" onChange={handleCheck} checked={productType.status} />
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

export default ProductTypeEdit;