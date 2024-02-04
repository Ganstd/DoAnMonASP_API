import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./producttype.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const ProductTypeAdd = () => {
    const navigate = useNavigate();

    const [productType, setProductType] = useState();

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
        axiosClient.post(`/ProductTypes`, productType)
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
                    <Form.Control type="text" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tên Loại sản phẩm:</Form.Label>
                    <Form.Select name="paymentType" onChange={handleCheck} disabled>
                        <option value="0" selected>Còn hàng</option>
                        <option value="1">Hết hàng</option>
                    </Form.Select>
                </Form.Group>
                <br/>
                
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus} /> Thêm
                </Button>
                    </Form>
                </div>
                </div>
        </>
    );
}

export default ProductTypeAdd;