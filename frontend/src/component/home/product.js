import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const product = ({ product }) => {
  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 15 : 22,
    value: product.ratings,
    isHalf: true,
  };
  return (
    <Link
      className="m-10 max-w-sm rounded overflow-hidden shadow-lg cursor:pointer transform: hover:translate-y-[-1vmax] hover:transition-smooth"
      to={`/product/${product._id}`}
    >
      <img className="w-full" src={product.images[0].url} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.category}
        </span>
        <div className="flex items-center">
          <path
            fillRule="evenodd"
            d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
            clipRule="evenodd"
          ></path>
          <ReactStars {...options} />{' '}
          <span className="text-gray-700 text-base">
            {' '}
            ({product.numOfReviews} Reviews){' '}
          </span>
        </div>
        <div className="font-bold text-xl mb-2">{`₹${product.price} `}</div>
      </div>
    </Link>
  );
};

export default product;
