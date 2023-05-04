import React, {useState} from 'react';
import "./Cart.css";
import { useContext } from 'react';
import { ProductContext } from '../Utils/context';
import amazonOriginal from '../../Assets/Images/amazon-original.png'
import { useEffect } from 'react';

const Cart = () => {
    const [subTotal, setSubTotal] = useState(0);
    const {cartItems, setCartItems} = useContext(ProductContext);

    useEffect(()=>{
      setSubTotal(cartItems.reduce((acc, currentItem)=> acc+Number(currentItem.price.cost), 0))
    }, [cartItems])

  return (
    <>
    <div className="heading">
      <h1>Shopping Cart</h1>
    </div>
      {cartItems.length ? <div className="cart__container">
        <div className="cart-items">
      {cartItems.map(cartItem=>{
          return (
              <div key={cartItem.id} className="cart-item-details__container">
                  <div className="cart-product-image__container">
                      <img src={cartItem.thumbnail} alt={cartItem.title.shortTitle} />
                  </div>
                  <div className="prod-details">
                      <h2>{cartItem.title.shortTitle}</h2> <span><strong>₹ {Number(cartItem.price.cost).toLocaleString("en-IN")}</strong></span>
                      <div className="delivery-details">
                        <span>Usually dispatched in 2-3 days</span>
                        <span>Eligible for FREE Shipping</span>
                        <button className="btn-removeCartItem" onClick={()=>{
                          setCartItems(cartItems.filter((item)=> {
                              return item.id !== cartItem.id;
                            }))
                        }}>Remove</button>
                      </div>
                  </div>
              </div>
              )
            })}
        </div>
        <div className="checkout-section">
            <div className="amazon-original-image__container">
              <img src={amazonOriginal} alt="Amazon Original Logo" />
            </div>
            <div className="delivery-options">
              <span>Your order is eligible for FREE Delivery</span>
              <span>Select this option at checkout.</span>
              <div className="subtotal">
                <h3>Subtotal (1 items ): ₹ {subTotal}.00</h3>
                <button className="btn-checkout">Proceed to Buy</button>
              </div>
            </div>
        </div>
      </div> : <div className="empty-cart">Your cart is empty</div>}
    </>
  )
}

export default Cart;
