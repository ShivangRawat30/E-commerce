import React, { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import './ProductDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearErrors,
  getProductDetails,
  newReview, 
} from '../../actions/productAction';
import ReviewCard from './ReviewCard.js';
import Loader from '../layout/loader/Loader';
import { useAlert } from 'react-alert';
import MetaData from '../layout/MetaData';
import ReactStars from 'react-rating-stars-component';
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
// } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const params = useParams();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, error, alert]);

  const options = {
    size: 'large',
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} -- ECOMMERCE`} />
          <div className="ProductDetails mt-[70px]">
            <div>
              <Carousel className="mx-8">
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1 mb-4">
                <h2 className="text-xl lg:text-4xl">{product.name}</h2>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} classNames="mr-2" />
                <span className="detailsBlock-2-span ml-2">
                  {' '}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1 className='lg:text-3xl'>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input value="1" type="number" />
                    <button>+</button>
                  </div>{' '}
                  <button disabled={product.Stock < 1 ? true : false} className='lg:w-[150px] lg:h-[40px]'>
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:{' '}
                  <b className={product.Stock < 1 ? 'redColor' : 'greenColor'}>
                    {product.Stock < 1 ? 'OutOfStock' : 'InStock'}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4 flex flex-col ">
                <h1 className=' flex items-center justify-center mb-4 lg:justify-start'>Description</h1>
                <p>{product.description}</p>
              </div>

              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {/* <Dialog
            aria-labelledby="simple-dialog-title"
            
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button  color="secondary">
                Cancel
              </Button>
              <Button  color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog> */}

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard  key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews mb-10">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
