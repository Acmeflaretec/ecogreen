import React from 'react';
import '../App.css';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';
import FeaturedProducts from '../components/FeaturedProducts';
import HomeProducts from '../components/HomeProducts';
import ProductCarousel from '../components/ProductCarousel';
import RecommendationPanel from '../components/RecommendationPanel';

const featuredProductsData1 = [
  { id: 9, name: 'Ear Buds', price: 15.99, image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072194.jpg?size=626&ext=jpg&ga=GA1.1.1794837574.1691059421&semt=ais_user', rating: 4.7 },
  { id: 10, name: 'HeadPhones', price: 5.99, image: 'https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg?size=626&ext=jpg&ga=GA1.1.1794837574.1691059421&semt=ais_user', rating: 4.5 },
  { id: 11, name: 'Cases', price: 3.99, image: 'https://images.unsplash.com/photo-1566793474285-2decf0fc182a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D', rating: 4.8 },
  { id: 12, name: 'PowerBanks', price: 6.99, image: 'https://images.unsplash.com/photo-1596207891316-23851be3cc20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D', rating: 4.6 },
  { id: 13, name: 'Cables', price: 9.99, image: 'https://images.unsplash.com/photo-1599226335946-faf96a7cc10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D', rating: 4.9 },
  { id: 14, name: 'Magsafe', price: 7.99, image: 'https://images.unsplash.com/photo-1496142958257-bb62cac8603f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww', rating: 4.4 },
  { id: 15, name: 'Power Adaptor', price: 8.99, image: 'https://images.pexels.com/photos/4526431/pexels-photo-4526431.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.5 },
  { id: 16, name: 'Mic', price: 4.99, image: 'https://images.pexels.com/photos/4334074/pexels-photo-4334074.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.6 },
];

const featuredProductsData2 = [
  { id: 1, name: 'MacBook', price: 199.99, image: 'https://t3.ftcdn.net/jpg/02/59/92/64/240_F_259926474_sxspfsrYvVT7h1Jmvq7QYng5rVI99KQs.jpg', rating: 4.5 },
  { id: 2, name: 'Smart Fitness Tracker', price: 89.99, image: 'https://t4.ftcdn.net/jpg/02/54/78/33/240_F_254783304_kh2cIrfFRuN7Hqs7ANR1QzHTEBU7Z79A.jpg', rating: 4.2 },
  { id: 3, name: 'Ultra-Thin Laptop', price: 1299.99, image: 'https://t3.ftcdn.net/jpg/04/92/65/80/240_F_492658046_QF1ZFiT44c1qMvjQcRbRBQDOaGgTWXL3.jpg', rating: 4.8 },
  { id: 4, name: 'Noise-Canceling Earbuds', price: 149.99, image: 'https://t4.ftcdn.net/jpg/04/46/03/99/240_F_446039921_5Epaw51JWery3Zxx6mZ6DXAv08NRshAr.jpg', rating: 4.6 },
  { id: 5, name: 'PowerBanks', price: 799.99, image: 'https://t4.ftcdn.net/jpg/07/52/24/75/240_F_752247535_01aNWzbU2QN8I83VkiIg83g6qoK56eLH.jpg', rating: 4.7 },
  { id: 6, name: 'Wireless Gaming Mouse', price: 59.99, image: 'https://t3.ftcdn.net/jpg/07/50/58/46/240_F_750584613_WJcsS42Yh5YRyBQ6fzllkopTkEb5sgvT.jpg', rating: 4.4 },
  { id: 7, name: 'Portable Bluetooth Speaker', price: 79.99, image: 'https://t4.ftcdn.net/jpg/01/99/21/51/240_F_199215173_Bu3MTEbuNO3Lsi8OPnwHvGTBgzGXDVqF.jpg', rating: 4.3 },
  { id: 8, name: 'Type C cables', price: 49.99, image: 'https://t3.ftcdn.net/jpg/04/82/97/88/240_F_482978838_lP7K7XSupoI7LkhKm12KbZnYQX0ojTEM.jpg', rating: 4.1 },
];


const officeSupplies = [
  { name: "Kurti", image: "https://img.freepik.com/premium-photo/portrait-gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-wild-grape_144962-18080.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_user", label: "New Collection" },
  { name: "Kurti", image: "https://t4.ftcdn.net/jpg/06/53/63/39/240_F_653633945_L0tE4JRRnnSLxMm42AFrGh3D0QwRSnmz.jpg", label: "Special offer" },
  { name: "Kurti", image: "https://t4.ftcdn.net/jpg/06/53/63/37/240_F_653633778_EG6iC6iZeRY5o298Zy38REOpjy9Uerd0.jpg", label: "Best Seller" },
  { name: "Kurti", image: "https://t3.ftcdn.net/jpg/02/93/30/34/240_F_293303423_gVRO6aMDHuaN3rYPQMQA3VkIvvcCd36A.jpg", label: "Top Rated" },
];
const homeFashion = [
  { name: "Kurti", image: "https://t4.ftcdn.net/jpg/08/36/29/95/240_F_836299570_sHobXHeEbrbdQz2Fg70X6mFbi6abY95j.jpg", label: "New Collection" },
  { name: "Kurti", image: "https://t4.ftcdn.net/jpg/08/16/05/01/240_F_816050183_DihXljXmnxwez2LC4svniU2Dga5EmJAr.jpg", label: "Special Offer" },
  { name: "Kurti", image: "https://t4.ftcdn.net/jpg/07/10/85/01/240_F_710850103_16VQxHXVohAGTM87GkmXvM32FX0D1GaN.jpg", label: "Best Seller" },
  { name: "Kurti", image: "https://t4.ftcdn.net/jpg/06/53/63/37/240_F_653633762_UchZHULgax4yl1BaJQHTMZ1e76gHCEld.jpg", label: "Top Rated" },
];

const deals = [
  { name: "Keyboards", image: "https://t4.ftcdn.net/jpg/06/87/46/81/240_F_687468135_W1HSFpNSiABMRKYuNLf6vfaWSYuyIUCB.jpg", text: "Starting ₹199 | Keyboards" },
  { name: "Mice", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91c2V8ZW58MHx8MHx8fDA%3D", text: "Starting ₹99 | Mice" },
  { name: "Headphones", image: "https://t3.ftcdn.net/jpg/03/85/26/44/240_F_385264488_a5wl4sxDQOP6O4ked9Ul6PA75GxzJPqj.jpg", text: "Up to 75% off | Headphones" },
  { name: "Laptop Bags", image: "https://t3.ftcdn.net/jpg/02/26/29/44/240_F_226294442_bdtxjCbimLBxfqbi7GnAaUOBBjFQIdGk.jpg", text: "Up to 80% off | Laptop Bags" },
];

const fashionDeals = [
  { name: "Kurti", image: "https://t3.ftcdn.net/jpg/02/79/26/14/240_F_279261467_3kwXehBm6gv3TUQGKTtUSpqm2Yz57XY1.jpg", text: "Starting ₹499 | Kurti" },
  { name: "Kurti", image: "https://t3.ftcdn.net/jpg/08/52/47/78/240_F_852477875_SCFbPQ3EHCdzcs5EzjZv6OZQjA1NZRdv.jpg", text: "Starting ₹299 | Kurti" },
  { name: "Kurti", image: "https://t3.ftcdn.net/jpg/08/52/47/78/240_F_852477842_FVlORDTX1H76KF9VcYs99WV4q4G9iJf0.jpg", text: "Up to 50% off | Kurti" },
  { name: "Kurti", image: "https://t4.ftcdn.net/jpg/07/90/04/25/240_F_790042518_EGl1AXqD6xJzOmuC17KPKDCRjPKGtHIN.jpg", text: "Up to 60% off | Kurti" },
];

const exampleProducts = [
  { id: 1, name: 'Black Mesh Office Chair', imageUrl: 'https://t4.ftcdn.net/jpg/07/84/87/37/240_F_784873715_X8kMVkxF7JUbDK5qPJmDA6vYqjkTK0B3.jpg' },
  { id: 2, name: 'White Ergonomic Chair', imageUrl: 'https://t3.ftcdn.net/jpg/08/52/47/78/240_F_852477875_SCFbPQ3EHCdzcs5EzjZv6OZQjA1NZRdv.jpg' },
  { id: 3, name: 'Blue Desk Chair', imageUrl: 'https://plus.unsplash.com/premium_photo-1681680196967-1ebbf45bb4fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGNvbXB1dGVyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'Black Mesh Office Chair', imageUrl: 'https://t3.ftcdn.net/jpg/04/82/97/88/240_F_482978838_lP7K7XSupoI7LkhKm12KbZnYQX0ojTEM.jpg' },
  { id: 2, name: 'White Ergonomic Chair', imageUrl: 'https://t4.ftcdn.net/jpg/01/99/21/51/240_F_199215173_Bu3MTEbuNO3Lsi8OPnwHvGTBgzGXDVqF.jpg' },
  { id: 3, name: 'Blue Desk Chair', imageUrl: 'https://t4.ftcdn.net/jpg/06/48/70/11/240_F_648701157_tpgOqctYsOLfLp6Il1YtSlQIbEio5xR2.jpg' },
  { id: 3, name: 'Blue Desk Chair', imageUrl: 'https://t3.ftcdn.net/jpg/07/78/00/88/240_F_778008881_bD5Xsycn2PrVI5qDFxTPBZGoowxTXcpi.jpg' },
  { id: 3, name: 'Blue Desk Chair', imageUrl: 'https://t4.ftcdn.net/jpg/04/08/25/57/240_F_408255777_j3PBKpmW1m7LFvyvfmL6A3SJc3qgru7R.jpg' },
  // Add more products as needed
];

const officeSuppliesBanner = "https://img.freepik.com/free-vector/fashion-sale-landing-page_23-2148587979.jpg?w=996&t=st=1720679550~exp=1720680150~hmac=5696ee348e942775c826a7fb4275e385f26f9c86eb0a5edeee31f27336bc0cb1";

const homeFashionbanner = "https://img.freepik.com/free-psd/modern-sales-discount-banner-template_122380-21.jpg?w=996&t=st=1720654212~exp=1720654812~hmac=8418c44d80f50e123e18ab5c5f8d1638691252a54b9459e3e99bcd84431e19a7"

const recommendationimg= "https://img.freepik.com/free-psd/online-sale-banner-template_23-2148553836.jpg?w=1060&t=st=1720673277~exp=1720673877~hmac=7eb05ca42d7db7fdcdd76ca5a8fa8a6937cc58b73eab2496898182cdf9df0c5a"
const recommendationimg1= "https://img.freepik.com/free-vector/online-shopping-banner-template_23-2148819250.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_user"

function Home() {
  return (
    <div className='bg-light-subtle'>
      <MiddleNav/>
      <Category/>
      <Banner/>
      <FeaturedProducts data={featuredProductsData1} title="Featured Mobile Accessories" />
      <RecommendationPanel videoImage={recommendationimg1} title="Deals on Fresh Produce & More" deals={deals}/>
      <ProductCarousel products={exampleProducts} />
      <HomeProducts title="collections only For You" products={officeSupplies} bannerImage={officeSuppliesBanner}/>
      
      <FeaturedProducts data={featuredProductsData2} title="Featured Electronics" />
      <RecommendationPanel videoImage={recommendationimg} title="Fashion Deals" deals={fashionDeals}/>
      <ProductCarousel products={exampleProducts} />
      <HomeProducts title="Fashions For You" products={homeFashion} bannerImage={homeFashionbanner}/>
      <Footer/>
    </div>
  )
}

export default Home;
