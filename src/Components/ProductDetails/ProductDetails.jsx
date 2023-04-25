import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Utils/productData';
import './ProductDetails.css';
import { deliveryTimeline } from '../Utils/getDate';
import { ProductContext } from '../Utils/context';

const ProductDetails = () => {
    const {cartItems, setCartItems} = useContext(ProductContext);

    const {id} = useParams();
    const getProduct = (product)=>{
        return product.id === id
    }
    const product = products.find(getProduct);
    console.log(product);
    const savings =  (Number(product.price.mrp))-(Number(product.price.cost));

    const addToCartHandler = ()=>{
        setCartItems(prevValue=>{
            return [...prevValue, product];
        })
        console.log(cartItems);
    }

  return (
    <div className="product-details__container">
      <div className="product-image__container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-information">
        <h1>{product.title.longTitle}</h1>
        <div className="price-and-discount__details">
            <div>
                <sup>₹</sup> <span className="product-price">{Number(product.price.cost).toLocaleString("en-IN")}</span><span className="product-discount">-{product.price.discount}</span>
            </div>
            <div className="product-mrp">
                <label>M.R.P.:</label> <span>₹{Number(product.price.mrp).toLocaleString("en-IN")}</span>
            </div>
            <div className="savings">
                <label>You Save:</label> <span><strong>₹{savings.toLocaleString("en-IN")}</strong></span>
            </div>
            <div className="delivery-details">
                <label>FREE Delivery:</label> <span><strong>{deliveryTimeline}</strong></span>
            </div>
            <span><strong>Fastest delivery by 2pm Tomorrow</strong></span>
            <div className="action-buttons__container">
                <button className="btn buy-now">Buy Now</button>
                <button className="btn add-to-cart" onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
