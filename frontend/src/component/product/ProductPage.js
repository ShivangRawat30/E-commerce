import React, { Fragment, useEffect, useState } from 'react';
import './ProductPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from '../layout/loader/Loader';
import ProductCard from '../home/product';
import MetaData from '../layout/MetaData';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';

const ProductPage = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState('1');

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const params = useParams();
  const keyword = params.keyword;
  console.log(products);
  console.log(productsCount);


  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);
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

          {resultPerPage < productsCount && (
            <div className="pagination mb-4">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductPage;
