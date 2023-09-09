import React, { useState } from 'react';
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
import Cart from './component/Cart/Cart.js';
import Shipping from './component/Cart/Shipping';
import Confirm from './component/Cart/ConfirmOrder';
import axios from 'axios';
import Payment from './component/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess.js';
import MyOrders from './component/Orders/MyOrders.js';
import OrderDetails from './component/Orders/OrderDetails.js';
import Contact from './component/layout/Contact/Contact';
import About from './component/layout/About/About.js';

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState('');

  async function getStripeApiKey() {
    const { data } = await axios.get('/api/v1/stripeApiKey');

    setStripeApiKey(data.stripeApiKey);
  }
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Navbar />
      {isAuthenticated && <UserOptions user={user} />}
      <ProtectedRoute exact path="/account" element={<Profile />} />
      <ProtectedRoute exact path="/me/update" element={<UpdateProfile />} />
      <ProtectedRoute exact path="/login/shipping" element={<Shipping />} />
      <ProtectedRoute exact path="/order/confirm" element={<Confirm />} />
      <ProtectedRoute exact path="/success" element={<OrderSuccess />} />
      <ProtectedRoute exact path="/orders" element={<MyOrders />} />
      <ProtectedRoute exact path="/order/:id" element={<OrderDetails />} />
      {/* <Elements stripe={loadStripe(stripeApiKey)}>
        <ProtectedRoute exact path="/process/payment" element={<Payment />} />
      </Elements> */}
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

        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route
          extact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route extact path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
