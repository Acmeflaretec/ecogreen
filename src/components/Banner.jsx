import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
  };

  const bannerData = [
    {
      image: "https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?t=st=1720679629~exp=1720683229~hmac=ba75375330a775c647fff0e8459183bed52cb31bce358d46bd297a1b45c1f7cf&w=1380",
      link: "/summer-sale",
      alt: "Summer Sale - Up to 50% off"
    },
    {
      image: "https://img.freepik.com/free-vector/online-shopping-template-banner_23-2148795108.jpg?t=st=1720679814~exp=1720683414~hmac=54909e0fc639d3cd078b3171f8a50e4c2632f4ef7dc4bf28daba82e84608104c&w=996",
      link: "/tech-gadgets",
      alt: "Latest Tech Gadgets"
    },
    {
      image: "https://img.freepik.com/free-psd/banner-template-with-online-shopping_23-2148545455.jpg?t=st=1720679853~exp=1720683453~hmac=268f4a9add54c94303d2714a880847e454aa9f3a8fcad1a56ed4e0ee403a6ce9&w=1060",
      link: "/fashion-collection",
      alt: "New Fashion Collection"
    },
    {
      image: "https://img.freepik.com/free-vector/realistic-black-friday-social-media-promo-template_23-2149110140.jpg?t=st=1720679909~exp=1720683509~hmac=32ea186c7d7dc2d790fdb05d7f1ce876bd3b06a9746ba37bf266311d711a20d8&w=996",
      link: "/home-decor",
      alt: "Home Decor Essentials"
    }
  ];

  return (
    <div className="banner-carousel">
      <Slider {...settings}>
        {bannerData.map((slide, index) => (
          <div key={index} className="banner-slide">         
              <motion.img 
                src={slide.image} 
                alt={slide.alt}
                className="banner-image"
                style={{height:'70vh',objectFit:'cover'}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;