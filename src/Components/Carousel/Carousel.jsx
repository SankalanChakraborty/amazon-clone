import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';

const Carousel = () => {
    const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_Hunter_V7._CB592913261_.jpg" onDragStart={handleDragStart} alt="banner" />,
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Sports/April/Getfitdays/GW/Hero/Unrec/Graphic-6-3000X1200-unrec._CB590412541_.jpg" onDragStart={handleDragStart} alt="banner" />,
    <img src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg" onDragStart={handleDragStart} alt="banner" />,
    <img src="https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg" onDragStart={handleDragStart} alt="banner" />,
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_TRUST-ISSUES_V3._CB595300702_.jpg" onDragStart={handleDragStart} alt="banner" />,
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GWUnrec_BOB/MA3000._CB592961919_.jpg" onDragStart={handleDragStart} alt="banner" />,
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MARCHGTM/IPL2023/1percentCB/D11_HeroPC_3000x1200._CB592814868_.jpg" onDragStart={handleDragStart} alt="banner" />,
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg" onDragStart={handleDragStart}carousel-image alt="banner" />
];

  return (
    <AliceCarousel 
    mouseTracking 
    items={items}
    infinite 
    autoPlay 
    autoPlayInterval={1000}
    animationDuration={1500} 
    disableDotsControls
    disableButtonsControls
    
    />
  )
}

export default Carousel
