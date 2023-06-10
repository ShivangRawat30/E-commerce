import React from 'react';
import Header from './component/layout/header/Header';
import Footer from './component/layout/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import Home from './component/home/Home.js';
import ProductDetails from './component/product/ProductDetails';
import ProductPage from './component/product/ProductPage';
import Search from './component/product/Search';
import Navbar from './component/layout/header/Navbar';
import LoginSignup from './component/user/LoginSignup';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/header/UserOptions';
import { useSelector } from 'react-redux';

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navbar />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route extact path="/product/:id" element={<ProductDetails />} />
        <Route extact path="/products" element={<ProductPage />} />
        <Route path="/products/:keyword" element={<ProductPage />} />
        <Route extact path="/search" element={<Search />} />
        <Route extact path="/login" element={<LoginSignup />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
