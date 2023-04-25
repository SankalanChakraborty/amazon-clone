import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  return (
    <div className="product-card__container">
      <div className="prod-img__container">
            <img src={product.thumbnail} alt={product.title.longTitle} />
      </div>
      <div className="prod-detail__container">
      <Link to={`products/${product.id}`}>
        <span className="prod-name">{product.title.longTitle}</span>
      </Link>
        <span className="prod-price">₹{Number(product.price.cost).toLocaleString("en-IN")}<sup>00</sup>
            <span className="actual-mrp">₹{Number(product.price.mrp).toLocaleString("en-IN")}</span>
        </span>
        <span className="prod-rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </span>
      </div>
    </div>
  )
}

export default Product;
