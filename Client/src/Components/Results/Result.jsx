import React from 'react';
import './Result.css';
import { Link, useLocation } from 'react-router-dom';
import {products} from '../Utils/productData';

const Result = () => {
  const loc = useLocation();
  console.log(loc);
  const searchData = loc.state;
  console.log(searchData);
  // eslint-disable-next-line
  searchData.map((resultItem)=>{
    products.push({
      id: resultItem.asin,
        url: resultItem.url,
        thumbnail:resultItem.thumbnail,
        title: {
            shortTitle: resultItem.title.substr(0,50),
            longTitle: resultItem.title
        }, 
        price: {
            mrp: resultItem.price.before_price,
            cost: resultItem.price.current_price,
            discount: resultItem.price.savings_percent
        } 
    })
  })
  console.log(products);
  return (
    <div className="search-results__container">
      <h2>Results</h2>
      {searchData?.map(item=>{
        return (
          <div key={item.asin} className="search-result__item">
            <div className="item-image__container">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="item-details__container">
              <Link to={`/products/${item.asin}`}><h2>{item.title}</h2></Link>
              <div className="price-breakup">
                <sup>₹</sup><span>{Number(item.price.current_price).toLocaleString("en-IN", {maximumFractionDigits: 2})}</span>
                {item.price.discounted &&
                  <>
                  <h4>₹ {Number(item.price.before_price).toLocaleString("en-IN", {maximumFractionDigits: 2})}</h4>
                  <h4>({item.price.savings_percent}% off)</h4>
                  </> 
                }
              </div>
              <span className="bank-cards-offer">Flat INR 3000 Off on HDFC BankCards</span>
            </div>
          </div>)
      })}
      
        
    </div>
  )
}

export default Result;
