import React from 'react';
import './Product.css';

const Product = ({product}) => {
  return (
    <div className="product-card__container">
      <div className="prod-img__container">
            <img src={product.thumbnail} alt={product.title.longTitle} />
      </div>
      <div className="prod-detail__container">
        <span className="prod-name">{product.title.longTitle}</span>
        <span className="prod-price">₹{Number(product.price.cost).toLocaleString("en-US")}<sup>00</sup>
            <span className="actual-mrp">₹{Number(product.price.mrp).toLocaleString("en-US")}</span>
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
