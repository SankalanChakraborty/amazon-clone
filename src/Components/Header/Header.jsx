import React from 'react';
import './Header.css';
import logo from '../../Assets/Images/amazon-logo.png';
import {Link, useNavigate} from 'react-router-dom';
import { prodOptions, fetchProducts } from '../Utils/Fetchdata';
import { useState, useContext } from 'react';
import { ProductContext } from '../Utils/context';


const Header = () => {
    const [search, setSearch] = useState('');
    const {cartItems, setSearchResults} = useContext(ProductContext);
    const Navigate = useNavigate();
    const onChangeHandler = (e)=>{
      setSearch(prevValue => prevValue = e.target.value);
    }

    const submitHandler = async(e)=>{
      e.preventDefault();
      if(search.trim() === ""){
        return
      }
      const searchProducts = await fetchProducts(`https://amazon23.p.rapidapi.com/product-search?query=${search}&country=IN`, prodOptions);
      console.log(searchProducts);

      setSearchResults(()=>{
        return [searchProducts.result]
      });

      searchProducts.result && Navigate("/results", {state: searchProducts.result});
    }

  return (
    <div className="header__container">
      <Link to="/">
        <img className="amazon-logo" src={logo} alt="amazon" />
      </Link>
      <form className="header-search__container" onSubmit={submitHandler}>
        <input type="text" placeholder="Search Amazon.in" value={search} onChange={onChangeHandler}/>
        <button className="btn-search" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="sign-in__section">
      <span>Hello</span>
        <Link to="/signin">
          <span><b>Sign In</b></span>
        </Link>
      </div>
      <div className="header__orders-section">
        <span>Returns</span>
        <span><b>& Orders</b></span>
      </div>
      <div className="header__prime-section">
          <span>Your</span>
          <span><b>Prime</b></span>
      </div>
      <div className="header-cart__container">
        <Link to="/cart">
            <span>Cart</span>
            <i className="fa-sharp fa-solid fa-cart-shopping"/>
            {cartItems.length ? <span className="number-of-cart-items">{cartItems.length}</span> : ""}
        </Link>
      </div>   
    </div>
  )
}

export default Header;
