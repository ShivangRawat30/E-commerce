import React from 'react';
import Header from './component/layout/header/Header';
import Footer from './component/layout/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import Home from './component/home/Home.js';
import ProductDetails from './component/product/ProductDetails';

const App = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
  });
  return (
    <Router>
      <Header />
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route extact path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
