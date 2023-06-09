import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/cg';
import './Home.css';
import Product from './product.js';
import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/loader/Loader';
import { useAlert } from 'react-alert';
import { clearErrors } from '../../actions/productAction';
import { Link } from 'react-scroll';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Home Page" />
          <div className="banner">
            <div className="flex flex-col items-center mt-[40px]">
              <p className="font-bold lg:text-4xl text-xl my-1">WE ARE</p>
              <h1 className="font-bold lg:text-8xl text-4xl lg:my-[20px] my-1">
                LAZY CART
              </h1>
              <p className="lg:my-[20px] lg:text-2xl w-50% text-xs my-2">
                Unleash your shopping desires with our exceptional products and
                unbeatable deals, making every purchase a memorable experience.
              </p>

              <Link to="container" smooth={true} duration={500}>
                <button className="border-[1px] border-solid px-[20px] my-2 text-xs lg:text-lg lg:px-5 py-2 lg:w-[200px] flex flex-col items-center justify-between hover:bg-[#ff6347] cursor:pointer">
                  Start Shopping <CgMouse className="items-center" />
                </button>
              </Link>
            </div>
          </div>

          <h2 className="homeHeading text-xl w-[200px] lg:text-3xl lg:w-[400px]">
            Featured Products
          </h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Home;
