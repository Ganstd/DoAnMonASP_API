import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = ({ match }) => {
  const [product, setProducts] = useState({});

  useEffect(() => {
    const productId = match.params.id;

    axios.get('https://dummyjson.com/products')
    .then(res=>setProducts(res.data.products))
  }, [match.params.id]);

  return (
    <div>
      <h2>Thông tin chi tiết sản phẩm</h2>
      <p>Tên sản phẩm: {product.title}</p>
      <p>Mô tả: {product.description}</p>
      <p>Giá tiền: ${product.price}</p>
      <p>{product.images}</p>
    </div>
  );
};

export default ProductDetail;
