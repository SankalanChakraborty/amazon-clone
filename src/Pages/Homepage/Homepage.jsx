import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Product from '../../Components/Product/Product';
import { products } from '../../Components/productData';
import './Homepage.css';
import Navbar from '../../Components/Navbar/Navbar';

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <div className="showcase-items__container">
       {products.map((product, i)=>{
          return <Product key={i} product={product}/>
       })}
      </div>
    </>
  )
}

export default Homepage;
