import React, { Fragment, useEffect, useState } from 'react';
import './ProductPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from '../layout/loader/Loader';
import ProductCard from '../home/product';
import MetaData from '../layout/MetaData';

const ProductPage = () => {
  const dispatch = useDispatch();

  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading lg:mt-[50px] mt-[60px]">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductPage;
