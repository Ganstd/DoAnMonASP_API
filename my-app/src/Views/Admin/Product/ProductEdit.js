import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./product.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const ProductEdit = () => {
    const navigate = useNavigate();

    var { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        axiosClient.get(`/Products/${id}`)
            .then(res => setProduct(res.data))
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setProduct(prev => ({ ...prev, [name]: value }));
       // setProductTypeId(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/Products/${id}`, product)
            .then(() => navigate('/admin/products'));
    }

const handleFileChange = (e) => {
    let file = e.target.files[0];

    // Do something with the file if needed

    // Instead of setting the value to the file, set it to null or an empty string
    setProduct(prev => ({ ...prev, image: "" }));
};



    //const [productTypeId, setProductTypeId] = useState(product.productTypeId);
    const [productTypes, setProductTypes] = useState([]);
     useEffect(() => {
        axiosClient.get(`/ProductTypes`)
            .then(res => setProductTypes(res.data));
    }, []); 


    return (
        <>
            <div className="product">
          <Sidebar />
      <div className="productContainer">
        <Navbar />
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên sản phẩm:</Form.Label>
                    <Form.Control type="text" name="name" value={product.name} onChange={handleChange} />
                </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Ảnh sản phẩm:</Form.Label>
                    <Form.Control type="file" name="image" value={product.image} onChange={handleFileChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Giá:</Form.Label>
                    <Form.Control type="number" name="price" value={product.price} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Mô tả:</Form.Label>
                    <Form.Control type="text" name="description" value={product.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Loại sản phẩm: </Form.Label>
                    <Form.Select name="productTypeId" value={product.productTypeId} onChange={handleCheck} >
                                {
                                    productTypes.map(item => 
                                        <option key={item.id} value={item.id} > {item.name} </option>
                                )}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Số sao:</Form.Label>
                    <Form.Control type="number" name="averageStar"  min={1} max={5} value={product.averageStar} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="switch" label="Còn hoạt động" name="status" onChange={handleCheck} checked={product.status} />
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

export default ProductEdit;