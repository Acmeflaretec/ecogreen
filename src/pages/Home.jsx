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
  { id: 9, name: 'Organic Almonds', price: 15.99, image: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', rating: 4.7 },
  { id: 10, name: 'Whole Grain Oats', price: 5.99, image: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', rating: 4.5 },
  { id: 11, name: 'Fresh Strawberries', price: 3.99, image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', rating: 4.8 },
  { id: 12, name: 'Greek Yogurt', price: 6.99, image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', rating: 4.6 },
  { id: 13, name: 'Organic Honey', price: 9.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.9 },
  { id: 14, name: 'Chia Seeds', price: 7.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.4 },
  { id: 15, name: 'Quinoa', price: 8.99, image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.5 },
  { id: 16, name: 'Organic Spinach', price: 4.99, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.6 },
];

const featuredProductsData2 = [
  { id: 1, name: 'Premium Wireless Headphones with Noise Cancelling Feature', price: 199.99, image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.5 },
  { id: 2, name: 'Smart Fitness Tracker', price: 89.99, image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.2 },
  { id: 3, name: 'Ultra-Thin Laptop', price: 1299.99, image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.8 },
  { id: 4, name: 'Noise-Canceling Earbuds', price: 149.99, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.6 },
  { id: 5, name: '4K Smart TV', price: 799.99, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.7 },
  { id: 6, name: 'Wireless Gaming Mouse', price: 59.99, image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.4 },
  { id: 7, name: 'Portable Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.3 },
  { id: 8, name: 'Electric Toothbrush', price: 49.99, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.1 },
];


const officeSupplies = [
  { name: "USB Gadgets", image: "https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232247.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_user", label: "New Collection" },
  { name: "Desk Organizers", image: "https://img.freepik.com/free-photo/foundation-with-dark-background_23-2148978146.jpg?t=st=1720654688~exp=1720658288~hmac=273f3b54371135c904fdf8c45cf14e32d826fe265f9018e6fe91afe5c1dbe938&w=996", label: "Special offer" },
  { name: "Adhesive Tools", image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", label: "Best Seller" },
  { name: "UPS", image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", label: "Top Rated" },
];
const homeFashion = [
  { name: "Modern Sofa Set", image: "https://img.freepik.com/free-photo/modern-sofa-set-living-room_53876-104583.jpg?size=626&ext=jpg", label: "New Collection" },
  { name: "Elegant Curtains", image: "https://img.freepik.com/free-photo/room-with-elegant-curtains_53876-104584.jpg?size=626&ext=jpg", label: "Special Offer" },
  { name: "Luxury Bed Linens", image: "https://img.freepik.com/free-photo/luxury-bed-linens_53876-104585.jpg?size=626&ext=jpg", label: "Best Seller" },
  { name: "Decorative Cushions", image: "https://img.freepik.com/free-photo/decorative-cushions-sofa_53876-104586.jpg?size=626&ext=jpg", label: "Top Rated" },
];

const deals = [
  { name: "Keyboards", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Starting ₹199 | Keyboards" },
  { name: "Mice", image: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Starting ₹99 | Mice" },
  { name: "Headphones", image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Up to 75% off | Headphones" },
  { name: "Laptop Bags", image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Up to 80% off | Laptop Bags" },
];

const fashionDeals = [
  { name: "Summer Dresses", image: "https://images.pexels.com/photos/3646165/pexels-photo-3646165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Starting ₹499 | Summer Dresses" },
  { name: "Men's T-Shirts", image: "https://images.pexels.com/photos/4226732/pexels-photo-4226732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Starting ₹299 | Men's T-Shirts" },
  { name: "Women's Handbags", image: "https://images.pexels.com/photos/3802602/pexels-photo-3802602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Up to 50% off | Women's Handbags" },
  { name: "Footwear", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D", text: "Up to 60% off | Footwear" },
];

const exampleProducts = [
  { id: 1, name: 'Black Mesh Office Chair', imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'White Ergonomic Chair', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Blue Desk Chair', imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 1, name: 'Black Mesh Office Chair', imageUrl: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'White Ergonomic Chair', imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Blue Desk Chair', imageUrl: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Blue Desk Chair', imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Blue Desk Chair', imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // Add more products as needed
];

const officeSuppliesBanner = "https://img.freepik.com/free-vector/fashion-sale-landing-page_23-2148587979.jpg?w=996&t=st=1720679550~exp=1720680150~hmac=5696ee348e942775c826a7fb4275e385f26f9c86eb0a5edeee31f27336bc0cb1";

const homeFashionbanner = "https://img.freepik.com/free-psd/modern-sales-discount-banner-template_122380-21.jpg?w=996&t=st=1720654212~exp=1720654812~hmac=8418c44d80f50e123e18ab5c5f8d1638691252a54b9459e3e99bcd84431e19a7"

const recommendationimg= "https://img.freepik.com/free-psd/online-sale-banner-template_23-2148553836.jpg?w=1060&t=st=1720673277~exp=1720673877~hmac=7eb05ca42d7db7fdcdd76ca5a8fa8a6937cc58b73eab2496898182cdf9df0c5a"
const recommendationimg1= "https://img.freepik.com/free-vector/abstract-sales-landing-page-with-image_52683-28303.jpg?w=996&t=st=1720679017~exp=1720679617~hmac=c91f0141d648112e82924d4deeb5bd5ebc1681c7d829f3493f58505ff57608e5"

function Home() {
  return (
    <div className='bg-light-subtle'>
      <MiddleNav/>
      <Category/>
      <Banner/>
      <FeaturedProducts data={featuredProductsData1} title="Featured Groceries" />
      <RecommendationPanel videoImage={recommendationimg1} title="Deals on Fresh Produce & More" deals={deals}/>
      <ProductCarousel products={exampleProducts} />
      <HomeProducts title="Office Supplies For You" products={officeSupplies} bannerImage={officeSuppliesBanner}/>
      
      <FeaturedProducts data={featuredProductsData2} title="Featured Electronics" />
      <RecommendationPanel videoImage={recommendationimg} title="Fashion Deals" deals={fashionDeals}/>
      <ProductCarousel products={exampleProducts} />
      <HomeProducts title="Fashions For You" products={homeFashion} bannerImage={homeFashionbanner}/>
      <Footer/>
    </div>
  )
}

export default Home;
