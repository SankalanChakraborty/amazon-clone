import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { faker } from '@faker-js/faker';
import primeLogo from '../../Assets/Images/nav-prime-logo.png';
import navbarImage from '../../Assets/Images/navbar-image.jpg';

const Navbar = () => {
    const showPrimeFeatures = ()=>{
        console.log("Prime");
        console.log(faker.commerce);
        console.log(faker.image);
    }
  return (
    <>
        <div className="navbar-container">
            <ul className="navbar-items">
                <Link>
                    <i className="fa-solid fa-bars"/>
                    <span>All</span>
                </Link>
                <Link>
                    <span>Fresh</span>
                </Link>
                <Link>
                    <span>Amazon miniTV</span>
                </Link>
                <Link>
                    <span>Sell</span>
                </Link>
                <Link>
                    <span>Amazon Pay</span>
                </Link>
                <Link>
                    <span>Best Sellers</span>
                </Link>
                <Link>
                    <span>Buy Again</span>
                </Link>
                <Link onMouseEnter={showPrimeFeatures}>
                    <span>Prime</span>
                    <i className="fa-solid fa-triangle"/>
                </Link>
                <Link>
                    <span>Mobiles</span>
                </Link>
                <Link>
                    <span>Today's Deals</span>
                </Link>
            </ul>
            <img src={navbarImage} alt="New launches" />
        </div>
    </>
  )
}

export default Navbar;
