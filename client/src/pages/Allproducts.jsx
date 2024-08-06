// src/pages/Allproducts.js

import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Pagination, Badge, Offcanvas } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart, FaStar, FaFilter, FaTruck, FaLeaf, FaPercent, FaSearch } from 'react-icons/fa';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';
import './Allproducts.css';
import { useNavigate,useLocation } from 'react-router-dom'; 

const Allproducts = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const initialCategory = searchParams.get('categoryQuery') || ''; // Make sure to provide a fallback value if the parameter is not found
  const initialSearch = searchParams.get('searchQuery') || ''; // Make sure to provide a fallback value if the parameter is not found
  
  const [category, setCategory] = useState('category=' + initialCategory);
  const [searchQuery, setsearchQuery] = useState('search=' + initialSearch);
  const navigate = useNavigate()

  const [productsList,setProductsList] = useState([])

  const [categoryList,setCategoryList] = useState([])
  const [url,setUrl]= useState('/products/client?')
  const [filtersM, setFiltersM] = useState({
    categories: [],
  });
  const [sortOrder,setSortOrder] = useState('desc')
  const [sortField,setSortField] = useState()



const fetchCategory = async()=>{
  try {
    const response = await axiosInstance.get('/category');
    setCategoryList(response?.data?.data);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}
useState(()=>{
  fetchCategory()
},[])

// useEffect(()=>{
//   const searchParams = new URLSearchParams(location.search);
//   const initialCategory = searchParams.get('categoryQuery') || '';
//   setCategory('category='+initialCategory)
 
// },[])

const fetchProducts=async()=>{
  // const searchParams = new URLSearchParams(location.search);
  // const initialCategory = searchParams.get('categoryQuery') || '';
  // console.log('fetch pro cat ',category)
 const response= await axiosInstance.get(url+category);
 // const response= await axiosInstance.get(url+'category='+initialCategory);

 setProductsList(response?.data?.data)
console.log(response?.data?.data)
}


useEffect(()=>{
fetchProducts()
},[url,category])
// for category
const handleFilterChangeM = (filterType, selectedValues) => {
  console.log('sel val',selectedValues[0])
  console.log('filter type',filterType)
setCategory('category='+selectedValues[0])
setUrl('/products/client?')
  setFiltersM((prevFilters) => ({
    ...prevFilters,
    [filterType]: selectedValues,
  }));
};









  const sampleProducts = [
    {
      id: 1,
      name: 'MacBook Pro',
      imageUrl: 'https://example.com/macbook-pro.jpg',
      brand: "Apple",
      category: "Laptops",
      price: 1299,
      originalPrice: 1499,
      discount: 13,
      rating: 4.8,
      reviews: 256,
      description: "High-performance MacBook Pro with M1 chip.",
      freeDelivery: true,
      ecoFriendly: true,
      inStock: true
    },
    {
      id: 2,
      name: 'iPhone 13',
      imageUrl: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437100.jpg?t=st=1721814082~exp=1721817682~hmac=05d42d322af7180d827db27b6440d9531f85d184d9c9b1c36261631534320020&w=1060',
      brand: "Apple",
      category: "Smartphones",
      price: 799,
      originalPrice: 899,
      discount: 11,
      rating: 4.7,
      reviews: 348,
      description: "The latest iPhone with advanced camera features.",
      freeDelivery: true,
      ecoFriendly: true,
      inStock: true
    },
    {
      id: 3,
      name: 'Samsung Galaxy S21',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/au/galaxy-s21/gallery/au-galaxy-s21-5g-g991-sm-g991bzaaats-368339758?$624_624_PNG$',
      brand: "Samsung",
      category: "Smartphones",
      price: 699,
      originalPrice: 799,
      discount: 13,
      rating: 4.6,
      reviews: 290,
      description: "Cutting-edge smartphone from Samsung with impressive display.",
      freeDelivery: true,
      ecoFriendly: false,
      inStock: true
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9340/media-gallery/silver/touch/notebook-xps-13-9340-t-sl-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3509&hei=2082&qlt=100,1&resMode=sharp2&size=3509,2082&chrss=full&imwidth=5000',
      brand: "Dell",
      category: "Laptops",
      price: 999,
      originalPrice: 1199,
      discount: 17,
      rating: 4.7,
      reviews: 174,
      description: "Ultra-portable laptop with a stunning display.",
      freeDelivery: true,
      ecoFriendly: true,
      inStock: true
    },
    {
      id: 5,
      name: 'Sony WH-1000XM4',
      imageUrl: 'https://www.sony.co.in/image/406fdd3cc9e49e28002ad8baef9185c8?fmt=png-alpha&wid=900&hei=800',
      brand: "Sony",
      category: "Headphones",
      price: 349,
      originalPrice: 399,
      discount: 13,
      rating: 4.9,
      reviews: 215,
      description: "Top-notch noise-cancelling headphones.",
      freeDelivery: true,
      ecoFriendly: true,
      inStock: true
    },
    {
      id: 6,
      name: 'Apple Watch Series 6',
      imageUrl: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series-6-aluminum-red-case-altimeter_09152020_inline.jpg.large.jpg',
      brand: "Apple",
      category: "Wearables",
      price: 399,
      originalPrice: 449,
      discount: 11,
      rating: 4.8,
      reviews: 312,
      description: "Advanced health and fitness tracking from your wrist.",
      freeDelivery: true,
      ecoFriendly: true,
      inStock: true
    }
];


  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    freeDelivery: false,
    rating: 0,
    ecoFriendly: false,
    inStock: false,
    categories: [],
    brands: [],
    searchTerm: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const productsPerPage = 12;

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (e) => {
    // const searchParams = new URLSearchParams(location.search);
    // const initialCategory = searchParams.get('categoryQuery') || '';
console.log('this is category hook',category)

    // setUrl('/products/client?'+'category='+initialCategory)
        setUrl('/products/client?'+category)

    setSortBy(e.target.value);
    const sortedProducts = [...products];
    switch (e.target.value) {
      case 'price-low-high':
        setUrl((prev)=>prev+'&sortField=sale_rate&sortOrder=asc')
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        setUrl((prev)=>prev+'&sortField=sale_rate&sortOrder=desc')
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        setUrl((prev)=>prev+'&sortField=rating&sortOrder=desc')
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        setUrl((prev)=>prev+'&sortField=createdAt&sortOrder=desc')
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        // 'featured' - assume products are already in featured order
        break;
    }
    setProducts(sortedProducts);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };


  const applyFilters = () => {
    let filteredProducts = [...sampleProducts];

    // Price range filter
    filteredProducts = filteredProducts.filter(
      product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Free delivery filter
    if (filters.freeDelivery) {
      filteredProducts = filteredProducts.filter(product => product.freeDelivery);
    }

    // Rating filter
    if (filters.rating > 0) {
      filteredProducts = filteredProducts.filter(product => product.rating >= filters.rating);
    }

    // Eco-friendly filter
    if (filters.ecoFriendly) {
      filteredProducts = filteredProducts.filter(product => product.ecoFriendly);
    }

    // In stock filter
    if (filters.inStock) {
      filteredProducts = filteredProducts.filter(product => product.inStock);
    }

    // Categories filter
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(product => filters.categories.includes(product.category));
    }

    // Brands filter
    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(product => filters.brands.includes(product.brand));
    }

    // Search term filter
    if (filters.searchTerm) {
      const searchRegex = new RegExp(filters.searchTerm, 'i');
      filteredProducts = filteredProducts.filter(
        product => searchRegex.test(product.name) || searchRegex.test(product.description)
      );
    }

    setProducts(filteredProducts);
  };

  const addToWishlist = (productId) => {
    console.log(`Added product ${productId} to wishlist`);
  };

  const addToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
  };

  const FilterSidebar = () => (
    <Card className="filter-sidebar">
  <Card.Header>
    <h5><FaFilter /> Filters</h5>
  </Card.Header>
  <Card.Body>

    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Price Range</Form.Label>
        <Form.Range 
          min={0} 
          max={2000} 
          step={10} 
          value={filters.priceRange[1]} 
          onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
        />
        <div className="d-flex justify-content-between">
          <span>₹0</span>
          <span>₹{filters.priceRange[1]}</span>
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check 
          type="checkbox" 
          label="Free Delivery" 
          checked={filters.freeDelivery}
          onChange={(e) => handleFilterChange('freeDelivery', e.target.checked)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Minimum Rating</Form.Label>
        <Form.Select 
          value={filters.rating}
          onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={4}>4★ & above</option>
          <option value={3}>3★ & above</option>
          <option value={2}>2★ & above</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check 
          type="checkbox" 
          label="Eco-Friendly" 
          checked={filters.ecoFriendly}
          onChange={(e) => handleFilterChange('ecoFriendly', e.target.checked)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check 
          type="checkbox" 
          label="In Stock" 
          checked={filters.inStock}
          onChange={(e) => handleFilterChange('inStock', e.target.checked)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Categories</Form.Label>
      <Form.Select
        multiple
        value={filtersM.categories}
        onChange={(e) => handleFilterChangeM('categories', Array.from(e.target.selectedOptions, option => option.value))}
      >
        {categoryList?.map((obj) => (
          <option key={obj._id} value={obj._id}>{obj.name}</option>
        ))}
      </Form.Select>
    </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Brands</Form.Label>
        <Form.Select 
          multiple 
          value={filters.brands}
          onChange={(e) => handleFilterChange('brands', Array.from(e.target.selectedOptions, option => option.value))}
        >
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Dell">Dell</option>
          <option value="Sony">Sony</option>
          <option value="Bose">Bose</option>
        </Form.Select>
      </Form.Group>
    </Form>
  </Card.Body>
</Card>

  );

  const ProductCard = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-100 product-card shadow-sm border-0">
        <Link to={`/product/${item.id}`} className="text-decoration-none">
          <div className="product-image-container">
            <Card.Img variant="top" src={item.imageUrl} alt={item.name} className="product-image" />
            {item.freeDelivery && <span bg="success" className="position-absolute top-0 start-0 m-2"><FaTruck /> Free Delivery</span>}
            {/* {item.ecoFriendly && <span bg="info" className="position-absolute top-0 end-0 m-2"><FaLeaf /> Eco-Friendly</span>} */}
            <span bg="danger" className="position-absolute bottom-0 end-0 m-2"><FaPercent /> {item.discount}% OFF</span>
          </div>
          <Card.Body className="p-4">
            <Card.Title className="product-title h5 mb-2 text-dark">{item.name}</Card.Title>
            <p className="text-muted small mb-2">{item.brand} | {item.category}</p>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4 className="mb-0 text-primary">₹{item.price}</h4>
                <s className="text-muted small">₹{item.originalPrice}</s>
              </div>
              <div className="text-warning">
                <FaStar /> <span className="ms-1">{item.rating}</span>
                <small className="text-muted">({item.reviews})</small>
              </div>
            </div>
            <p className="product-description small text-muted mb-3">{item.description}</p>
            <p className="mb-0 small">
              <span className={`fw-bold ${item.inStock ? 'text-success' : 'text-danger'}`}>
                {item.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </p>
          </Card.Body>
        </Link>
        <Card.Footer className="bg-white border-top-0 p-4">
          <div className="d-flex justify-content-between">
            <Link to={'/wishlist'}>
              <Button 
                variant="outline-primary" 
                size="sm" 
                className="flex-grow-1 me-2"
                onClick={() => addToWishlist(item.id)}
              >
                <FaHeart /> Wishlist
              </Button>
            </Link>
            <Button 
              variant="primary" 
              size="sm" 
              className="flex-grow-1" 
              disabled={!item.inStock}
              onClick={() => addToCart(item.id)}
            >
              <FaShoppingCart /> {item.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </motion.div>
  );

  return (
    <>
      <MiddleNav />
      <Container fluid className="py-5 bg-light">
        <Row>
          <Col lg={3} className="d-none d-lg-block">
            <FilterSidebar />
            </Col>
          <Col lg={9}>
            <Row className="mb-4 align-items-center">
              <Col>
                <h1 className="display-4 mb-0">Our Products</h1>
                <p className="lead text-muted mb-0">{products.length} results found</p>
              </Col>
              <Col xs="auto" className="d-flex align-items-center">
                <Button 
                  variant="outline-primary" 
                  className="me-2 d-lg-none"
                  onClick={() => setShowFilters(true)}
                >
                  <FaFilter /> Filters
                </Button>
                <Form.Select value={sortBy} onChange={handleSort} className="w-auto">
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest Arrivals</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="g-4">
              {currentProducts.map((item, index) => (
                <Col key={item.id} sm={6} md={4} lg={4}>
                  <ProductCard item={item} index={index} />
                </Col>
              ))}
            </Row>
            <Pagination className="justify-content-center mt-5">
              {[...Array(Math.ceil(products.length / productsPerPage))].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={showFilters} onHide={() => setShowFilters(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FilterSidebar />
        </Offcanvas.Body>
      </Offcanvas>

      <Footer />
    </>
  );
};

export default Allproducts;