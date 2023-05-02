import React from 'react';
import "./Cart.css";
import { useContext } from 'react';
import { ProductContext } from '../Utils/context';

const Cart = () => {
    const {cartItems} = useContext(ProductContext);
  return (
    <>
    <div className="heading">
      <h1>Shopping Cart</h1>
    </div>
      <div className="cart__container">
      {cartItems.map(cartItem=>{
          return (
              <div className="item-details__container">
                  <div className="cart-product-image__container">
                      <img src={cartItem.thumbnail} alt={cartItem.title.shortTitle} />
                  </div>
                  <div className="prod-details">
                      <h2>{cartItem.title.shortTitle}</h2> <span><strong>₹ {Number(cartItem.price.cost).toLocaleString("en-IN")}</strong></span>
                      <div className="delivery-details">
                        <span>Usually dispatched in 2-3 days</span>
                        <span>Eligible for FREE Shipping</span>
                      </div>
                  </div>
              </div>
          )
      })}
        <div className="checkout-section">
        </div>
      </div>
    </>
  )
}

export default Cart;
