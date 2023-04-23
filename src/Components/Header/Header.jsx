import React from 'react';
import './Header.css';
import logo from '../../Assets/Images/amazon-logo.png';
import {Link} from 'react-router-dom';
import { prodOptions, fetchProducts } from '../Utils/Fetchdata';
import { useState, useContext } from 'react';
import { SearchContext } from '../Utils/context';


const Header = () => {
    const [search, setSearch] = useState('');
    const {setSearchResults} = useContext(SearchContext);

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

      window.open("/results", "_blank")
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
      <Link to="/cart">
        <div className="header-cart__container">
          <span>Cart</span>
          <i className="fa-sharp fa-solid fa-cart-shopping"/>
        </div>   
      </Link>
    </div>
  )
}

export default Header;
