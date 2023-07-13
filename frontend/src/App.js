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
import Profile from './component/user/Profile.js';
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/user/UpdateProfile.js';
import UpdatePassword from './component/user/UpdatePassword.js';
import ForgotPassword from './component/user/ForgotPassword.js';
import ResetPassword from './component/user/ResetPassword.js';
import Cart from './component/Cart/Cart.js'

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
      <ProtectedRoute exact path="/account" element={<Profile />} />
      <ProtectedRoute exact path="/me/update" element={<UpdateProfile />} />
      <ProtectedRoute
        exact
        path="/password/update"
        element={<UpdatePassword />}
      />
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route extact path="/product/:id" element={<ProductDetails />} />
        <Route extact path="/products" element={<ProductPage />} />
        <Route path="/products/:keyword" element={<ProductPage />} />
        <Route extact path="/search" element={<Search />} />
        <Route extact path="/login" element={<LoginSignup />} />
        <Route extact path="/password/forgot" element={<ForgotPassword />} />
        <Route extact path="/password/reset/:token" element={<ResetPassword />} />
        <Route extact path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
