import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
  var navigate = useNavigate();

 const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    imageFile: null,
    productTypeId: 0,
    averageStar: 0,
    status: true,
 });

 const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setProduct({ ...product, [name]: value });
 };

 const handleFileUpload = (event) => {
    setProduct({ ...product, imageFile: event.target.files[0] });
 };

 const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('imageFile', product.imageFile);
    formData.append('productTypeId', product.productTypeId);
    formData.append('status', product.status);

    try {
      const response = await axios.post('https://localhost:7104/api/Products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      }).then(() => navigate('/admin/products'));

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
 };

 return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" onChange={handleInputChange} />
        </label>
        <label>
          Image File:
          <input type="file" onChange={handleFileUpload} />
        </label>
        <label>
          Product Type ID:
          <input type="number" name="productTypeId" onChange={handleInputChange} />
             </label>
             <label>
            Average Star:
            <input type="number"  min="0" max="5" name="averageStar" onChange={handleInputChange} />
            </label>
        <label>
          Status:
          <input type="checkbox" name="status" disabled checked={product.status} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
 );
};

export default ProductAdd;
