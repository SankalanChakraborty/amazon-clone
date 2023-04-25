import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Utils/productData';
import './ProductDetails.css';

const ProductDetails = () => {
    const {id} = useParams();
    const getProduct = (product)=>{
        return product.id === id
    }
    const product = products.find(getProduct);
    console.log(product);
  return (
    <div className="product-details__container">
      <div className="product-image__container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-information">
        <h1>{product.title.longTitle}</h1>
        <div className="price-and-discount__details">
            <div>
                <sup>₹</sup><span className="product-price">{Number(product.price.cost).toLocaleString("en-IN")}</span><span className="product-discount">-{product.price.discount}</span>
            </div>
            <div className="product-mrp">
                <label>M.R.P.:</label> <span>₹{Number(product.price.mrp).toLocaleString("en-IN")}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
