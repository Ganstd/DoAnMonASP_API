import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
  }, [])

  return (
    <Container>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={3}>
            <Card style={{ margin: '10px' }}>
              <Link to={`/admin/products/${product.id}`}>
                <Card.Img variant="top" src={product.images} />
              </Link>
              <Card.Body>
                <Link to={`/admin/products/${product.id}`}>
                  <Card.Title>{product.title}</Card.Title>
                </Link>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Brand: ${product.brand}</Card.Text>
                <Card.Text>Category: ${product.category}</Card.Text>
                <Card.Text>Thumbnail: ${product.thumbnail}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
