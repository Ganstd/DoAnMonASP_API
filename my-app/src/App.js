import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomNavbar from './Layout/Navbar';
import Slideshow from './Layout/Carousel';
import Footer from './Layout/Footer';
import ProductList from './Product/ProductList';
function App() {
  return (
    <Router>
      <CustomNavbar />
      
      <Slideshow />
      <ProductList />
      <Footer />
    </Router>
  );
}

export default App;
