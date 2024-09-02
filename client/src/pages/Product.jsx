// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../axios';
// import { useSelector } from 'react-redux';
// import { Container, Row, Col, Button, Image, Tabs, Tab, Form } from 'react-bootstrap';
// import { FaShoppingCart, FaBolt, FaHeart, FaShare, FaStar, FaCheck, FaTruck, FaShieldAlt } from 'react-icons/fa';
// import MiddleNav from '../components/MiddleNav';
// import Footer from '../components/Footer';
// import './Product.css';
// import Review from '../components/Review';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import LoadingScreen from '../components/loading/LoadingScreen';


// const Product = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const productId = searchParams.get('productId');
//   const [mainImage, setMainImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [productData, setProductData] = useState({})
//   const navigate = useNavigate()
//   const [cartItemsData, setCartItemsData] = useState([]);
//   const userDetails = useSelector(state => state?.userDetails);
//   const [notif, setNotif] = useState(true)

//   const [buyNowLoading, setBuyNowLoading] = useState({});
//   const [loading, setLoading] = useState({});
//   const [loadScreenState, setLoadScreenState] = useState(true); // Loading state

//   const fetchProduct = async () => {

//     try {
//       const response = await axiosInstance.get(`/products/${productId}`);
//       setProductData(response?.data?.data);
//       console.log(response?.data?.data)
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     } finally {


//     }

//   }

//   const fetchCartData = async () => {
//     console.log('reached fetch cart 2')
//     try {
//       const cartResponse = await axiosInstance.get('/user/getcarts');
//       setCartItemsData(cartResponse?.data?.data?.item);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchProduct()
//     fetchCartData()
//   }, [])


//   const addCartData = async (proId1) => {
//     console.log('proId1-', proId1);

//     setLoading(prev => ({ ...prev, [proId1]: true }));

//     if (!userDetails) {
//       navigate('/login')
//     } else {

//       try {
//         const urlQuery = `/user/addToCart/${proId1}`
//         const response = await axiosInstance.patch(urlQuery);
//         await fetchCartData()
//         setNotif(prev => !prev);
//       } catch (error) {
//         console.log(error)
//       } finally {
//         setLoading(prev => ({ ...prev, [proId1]: false }));
//         await fetchCartData()
//       }
//     }
//   }


//   const isInCartData = (productId) => {
//     if (cartItemsData === undefined) {
//       return null;
//     }
//     return cartItemsData?.some((item) => item?.productId?._id === productId);
//   };

//   //Buy now
//   const handleBuyNow = async (proId1) => {
//     setBuyNowLoading(prev => ({ ...prev, [proId1]: true }));
//     if (!userDetails) {
//       navigate('/login')
//     } else {
//       try {
//         const urlQuery = `/user/addToCart/${proId1}`
//         const response = await axiosInstance.patch(urlQuery);
//         await fetchCartData()
//         setNotif(prev => !prev);
//         navigate('/checkout')
//       } catch (error) {
//         console.log(error)
//       } finally {
//         setBuyNowLoading(prev => ({ ...prev, [proId1]: false }));
//         await fetchCartData()
//       }
//     }

//   }

//   const product = {
//     name: 'Wireless Earbuds Pro',
//     brand: 'TechSound',
//     price: 2999,
//     originalPrice: 4999,
//     discount: 40,
//     rating: 4.5,
//     reviewCount: 1567,
//     images: [
//       'https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074301.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_user',
//       'https://img.freepik.com/free-photo/levitating-product-display-with-headphones_23-2149670637.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_user'
//     ],
//     highlights: [
//       'Superior sound quality with deep bass',
//       'Noise-cancelling technology',
//       'Up to 24 hours of battery life',
//       'Water-resistant design',
//       'Touch controls for easy operation'
//     ],
//     description: "Experience the ultimate sound quality with our Wireless Earbuds Pro. Featuring advanced noise-cancelling technology, these earbuds ensure you enjoy your music without any distractions. With up to 24 hours of battery life, they are perfect for long listening sessions. The touch controls provide easy access to your music and calls, and the water-resistant design makes them suitable for all conditions.",
//     specifications: {
//       "Battery Life": "Up to 24 hours",
//       "Connectivity": "Bluetooth 5.0",
//       "Water Resistance": "IPX5",
//       "Charging Time": "1.5 hours",
//       "Color": "Black",
//       "Included Accessories": "Charging case, USB-C cable, Ear tips (S, M, L)",
//       "Warranty": "1 year",
//     }
//   };

//   return (
//     <>
//       <MiddleNav />
//       <Container fluid className="product-container">
//         <Row className="product-main">
//           <Col lg={5} md={6} xs={12} className="product-gallery">
//             <div className="main-image-container">
//               {productData?.image?.length > 0 && (
//                 <Image
//                   src={`${import.meta.env.VITE_API_BASE_URL_LOCALHOST}/uploads/${productData?.image[mainImage]}`}
//                   fluid
//                   className="main-image"
//                 />
//               )}
//             </div>
//             <div className="thumbnails-container">
//               {productData?.image?.map((img, index) => (
//                 <div
//                   key={index}
//                   className={`thumbnail ${mainImage === index ? 'active' : ''}`}
//                   onClick={() => setMainImage(index)}
//                   style={{
//                     backgroundImage: `url(${import.meta.env.VITE_API_BASE_URL_LOCALHOST}/uploads/${img})`
//                   }}
//                 />
//               ))}
//             </div>
//           </Col>
//           {/* <Col lg={5} md={6} xs={12} className="product-gallery">
//   <div className="main-image-container">
//     <Image
//       src={`${import.meta.env.VITE_API_BASE_URL_LOCALHOST}/uploads/${productData?.image[mainImage]}`} 
//       fluid 
//       className="main-image" 
//     />
//   </div>
//   <div className="thumbnails-container">
//     {productData?.image.map((img, index) => (
//       <div
//         key={index}
//         className={`thumbnail ${mainImage === index ? 'active' : ''}`}
//         onClick={() => setMainImage(index)}
//         style={{ backgroundImage: `url(${import.meta.env.VITE_API_BASE_URL_LOCALHOST}/uploads/${img})` }}
//       />
//     ))}
//   </div>
// </Col> */}

//           {/* <Col lg={5} md={6} xs={12} className="product-gallery">
//             <div className="main-image-container">
//               <Image

//               src={product.images[mainImage]} fluid className="main-image" />

//             </div>
//             <div className="thumbnails-container">
//               {product.images.map((img, index) => (
//                 <div 
//                   key={index}
//                   className={`thumbnail ${mainImage === index ? 'active' : ''}`}
//                   onClick={() => setMainImage(index)}
//                   style={{backgroundImage: `url(${img})`}}
//                 />
//               ))}
//             </div>
//           </Col> */}
//           <Col lg={7} md={6} xs={12} className="product-details">
//             <h1 className="product-title">{productData?.name}</h1>
//             <p className="product-brand">by <span>{productData?.brand}</span></p>
//             <div className="rating-container">
//               <span className="rating">{productData?.rating}</span>
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} className={i < Math.floor(productData?.rating) ? 'star filled' : 'star'} />
//               ))}
//               <span className="review-count">({productData?.Reviews?.length} reviews)</span>
//             </div>
//             <div className="pricing-container">
//               <span className="current-price">₹{productData?.sale_rate}</span>
//               <span className="original-price">₹{productData?.price}</span>
//               <span className="discount">{productData?.discount}% off</span>
//             </div>
//             <div className="highlights-container">
//               <h3>Highlights</h3>
//               <ul>
//                 {productData?.feature?.map((highlight, index) => (
//                   <li key={index}><FaCheck className="highlight-icon" /> {highlight}</li>
//                 ))}
//               </ul>
//             </div>
//             {console.log('productData-',productData)
//             }

//             <div className="additional-actions">
//               {productData?.sizes?.map((highlight, index) => (
//                 <Button variant="" key={index}>{highlight.sizes}</Button>
//               ))}
//             </div>
//             <div className="purchase-container">
//               {/* <Form.Group className="quantity-selector">
//                 <Form.Label>Quantity:</Form.Label>
//                 <Form.Control as="select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
//                   {[1, 2, 3, 4, 5].map(num => (
//                     <option key={num} value={num}>{num}</option>
//                   ))}
//                 </Form.Control>
//               </Form.Group> */}


//               {!isInCartData(productId) ? (

//                 <Button variant="warning" className="add-to-cart-btn" onClick={() => addCartData(productId)} disabled={loading[productId]} >
//                   {loading[productId] ? (
//                     <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                   ) : (
//                     <>
//                       <FaShoppingCart /> Add to Cart
//                     </>
//                   )}
//                   {/* <FaShoppingCart /> Add to Cart */}
//                 </Button>

//               ) : (


//                 <Button variant="warning" className="add-to-cart-btn" onClick={() => navigate('/cart')}>
//                   <FaShoppingCart /> Go to Cart
//                 </Button>

//               )
//               }

//               <Button variant="danger" className="buy-now-btn" onClick={() => handleBuyNow(productId)} >
//                 {buyNowLoading[productId] ? (
//                   <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                 ) : (
//                   <>
//                     <FaBolt /> Buy Now                  </>
//                 )}
//                 {/* <FaBolt /> Buy Now */}
//               </Button>


//             </div>
//             <div className="additional-actions">
//               <Link to={'/wishlist'}><Button variant="link"><FaHeart /> Add to Wishlist</Button></Link>
//               {/* <Button variant="link"><FaShare /> Share</Button> */}
//             </div>
//             <div className="delivery-info">
//               <p><FaTruck /> Free Delivery</p>
//               <p><FaShieldAlt /> 30-Day Return Policy</p>
//             </div>
//           </Col>
//         </Row>
//         <Row className="product-details-tabs">
//           <Col>
//             <Tabs defaultActiveKey="description" id="product-info-tabs">
//               <Tab eventKey="description" title="Description">
//                 <p>{productData?.description}</p>
//               </Tab>
//               <Tab eventKey="specifications" title="Specifications">
//                 <table className="specs-table">
//                   <tbody>
//                     {productData?.spec?.map((value, index) => (
//                       <tr key={index}>
//                         {/* <th>{key}</th> */}
//                         <td>{value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 {/* <table className="specs-table">
//                   <tbody>
//                     {Object.entries(product.specifications).map(([key, value]) => (
//                       <tr key={key}>
//                         <th>{key}</th>
//                         <td>{value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table> */}
//               </Tab>
//             </Tabs>
//           </Col>
//         </Row>
//         <Row>
//           <Review productId={productData?._id} />

//         </Row>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default Product;



import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button, Image, Tabs, Tab, Form } from 'react-bootstrap';
import { FaShoppingCart, FaBolt, FaHeart, FaShare, FaStar, FaCheck, FaTruck, FaShieldAlt } from 'react-icons/fa';
import MiddleNav from '../components/MiddleNav';
import Footer from '../components/Footer';
import './Product.css';
import Review from '../components/Review';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap'; 
import Swal from 'sweetalert2';

const Product = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('productId');
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState({});
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size
  const [isInStock, setIsInStock] = useState(true); // Check if selected size is in stock
  const navigate = useNavigate();
  const [cartItemsData, setCartItemsData] = useState([]);
  const userDetails = useSelector((state) => state?.userDetails);
  const [notif, setNotif] = useState(true);
  const [buyNowLoading, setBuyNowLoading] = useState({});
  const [loading, setLoading] = useState({});
  const [loadScreenState, setLoadScreenState] = useState(true); // Loading state

  const fetchProduct = async () => {
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      setProductData(response?.data?.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const fetchCartData = async () => {
    try {
      const cartResponse = await axiosInstance.get('/user/getcarts');
      setCartItemsData(cartResponse?.data?.data?.item);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCartData();
  }, []);

  const addCartData = async (proId1) => {
    if (!userDetails) {
      navigate('/login');
    } else {
      try {
        const urlQuery = `/user/addToCart/${proId1}`;
        await axiosInstance.patch(urlQuery, { size: selectedSize });
        await fetchCartData();
        setNotif((prev) => !prev);
      } catch (error) {
        console.error('Error adding to cart:', error);
      } finally {
        setLoading((prev) => ({ ...prev, [proId1]: false }));
      }
    }
  };

  const isInCartData = (productId) => {
    return cartItemsData?.some((item) => item?.productId?._id === productId);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    const selectedSizeData = productData?.sizes?.find((s) => s.sizes === size);
    setIsInStock(selectedSizeData?.quantity > 0);
  };

  const handleBuyNow = async (proId1) => {
    if (!userDetails) {
      navigate('/login');
    } else {
      try {
        const urlQuery = `/user/addToCart/${proId1}`;
        await axiosInstance.patch(urlQuery, { size: selectedSize });
        setNotif((prev) => !prev);
        await fetchCartData();
        navigate('/checkout');
      } catch (error) {
        console.error('Error handling buy now:', error);
      } finally {
        setBuyNowLoading((prev) => ({ ...prev, [proId1]: false }));
      }
    }
  };

  const addWishlist = async (proId) => {
    if (!userDetails) {
      navigate('/login');
    } else {
      try {
        const response = await axiosInstance.patch(`/user/addToWishlist/${proId}`);
       
        Swal.fire({
          title: "Success",
          text: "Product added to wishlist",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
      } catch (error) {
        console.error('Error adding to wishlist:', error);
      }
    }
  };


  const [showCountryModal, setShowCountryModal] = useState(false);
const [selectedCountry, setSelectedCountry] = useState('');
const [countryError, setCountryError] = useState('');

const handleCountryCheck = (action) => {
  if (productData?.countries?.includes(selectedCountry)) {
    setCountryError('');
    setShowCountryModal(false);

    if (action === 'addToCart') {
      addCartData(productId);
    } else if (action === 'buyNow') {
      handleBuyNow(productId);
    }
  } else {
    setCountryError('This product is not available in the selected country.');
  }
};

const handleAddToCartClick = () => {
  if (productData?.countries?.length) {
    setShowCountryModal(true);
  } else {
    addCartData(productId);
  }
};

const handleBuyNowClick = () => {
  
  if (productData?.countries?.length) {
    setShowCountryModal(true);
  } else {
    handleBuyNow(productId);
  }
};


 

const CountryModal = ({ show, onHide, onSelect, error, clearError }) => (
  <Modal
    show={show}
    onHide={() => {
      clearError();
      onHide();
    }}
  >
    <Modal.Header closeButton>
      <Modal.Title>Select Country</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="countrySelect">
          <Form.Label>Country</Form.Label>
          <Form.Control
            as="select"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            // onClick={(e) => {
            //   clearError()
            // }}
          >
            <option value="">Select a country</option>
            <option value="Baharin">Baharin</option>
            <option value="Uae">Uae</option>
            <option value="Kuwait">Kuwait</option>
            <option value="India">India</option>
            <option value="Qatar">Qatar</option>
            <option value="Oman">Oman</option>
          </Form.Control>
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        onClick={() => {
          clearError();
          onHide();
        }}
      >
        Cancel
      </Button>
      <Button variant="primary" onClick={onSelect}>
        Confirm
      </Button>
    </Modal.Footer>
  </Modal>
);





  return (
    <>
      <MiddleNav notification={notif} />
      <Container fluid className="product-container">
        <Row className="product-main">
          <Col lg={5} md={6} xs={12} className="product-gallery">
            <div className="main-image-container">
              {productData?.image?.length > 0 && (
                <Image
                  src={`${import.meta.env.VITE_API_BASE_URL_LOCALHOST}/uploads/${productData?.image[mainImage]}`}
                  fluid
                  className="main-image"
                />
              )}
            </div>
            <div className="thumbnails-container">
              {productData?.image?.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${mainImage === index ? 'active' : ''}`}
                  onClick={() => setMainImage(index)}
                  style={{
                    backgroundImage: `url(${import.meta.env.VITE_API_BASE_URL_LOCALHOST}/uploads/${img})`,
                  }}
                />
              ))}
            </div>
          </Col>
          <Col lg={7} md={6} xs={12} className="product-details">
            <h1 className="product-title">{productData?.name}</h1>
            <p className="product-brand">by <span>{productData?.brand}</span></p>
            <div className="rating-container">
              <span className="rating">{productData?.rating}</span>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(productData?.rating) ? 'star filled' : 'star'} />
              ))}
              <span className="review-count">({productData?.Reviews?.length} reviews)</span>
            </div>
            <div className="pricing-container">
              <span className="current-price">₹{productData?.sale_rate}</span>
              <span className="original-price">₹{productData?.price}</span>
              <span className="discount">{productData?.discount}% off</span>
            </div>
            <div className="highlights-container">
              <h3>Highlights</h3>
              <ul>
                {productData?.feature?.map((highlight, index) => (
                  <li key={index}><FaCheck className="highlight-icon" /> {highlight}</li>
                ))}
              </ul>
            </div>

            <div className="additional-actions">
              {productData?.sizes?.map((sizeData, index) => (
                <Button
                  key={index}
                  variant={selectedSize === sizeData.sizes ? 'primary' : 'outline-primary'}
                  onClick={() => handleSizeSelect(sizeData.sizes)}
                  disabled={sizeData.quantity <= 0}
                >
                  {sizeData.sizes} {sizeData.quantity <= 0 && '(Out of Stock)'}
                </Button>
              ))}
            </div>

            <div className="purchase-container">
              {!isInCartData(productId) ? (
                <Button
                  variant="warning"
                  className="add-to-cart-btn"
                  // onClick={() => addCartData(productId)}
                  onClick={handleAddToCartClick}
                  disabled={loading[productId] || productData?.sizes?.length && !selectedSize || productData?.sizes?.length && !isInStock}
                >
                  {loading[productId] ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    <>
                      <FaShoppingCart /> Add to Cart
                    </>
                    // <Button variant="warning" className="add-to-cart-btn" onClick={handleAddToCartClick}>
                    //   <FaShoppingCart /> Add to Cart
                    // </Button>
                  )}
                </Button>
              ) : (
                <Button variant="warning" className="add-to-cart-btn" onClick={() => navigate('/cart')}>
                  <FaShoppingCart /> Go to Cart
                </Button>
              )}

              <Button
                variant="danger"
                className="buy-now-btn"
                // onClick={() => handleBuyNow(productId)}
                onClick={handleBuyNowClick}
                disabled={productData?.sizes?.length && !selectedSize || productData?.sizes?.length && !isInStock}
              >
                {buyNowLoading[productId] ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  <>
                    <FaBolt /> Buy Now
                  </>
                  // <Button variant="danger" className="buy-now-btn" onClick={handleBuyNowClick}>
                  //   <FaBolt /> Buy Now
                  // </Button>
                )}
              </Button>
            </div>

            {/* <div className="additional-actions">
              <Link>
                <Button variant="link" onClick={() => addWishlist(productData._id)}><FaHeart /> Add to Wishlist</Button>
              </Link>
            </div> */}
            </div> */}
            <div className="delivery-info">
              <p><FaTruck /> Free Delivery</p>
              <p><FaShieldAlt /> 30-Day Return Policy</p>
            </div>
          </Col>
        </Row>
        <Row className="product-details-tabs">
          <Col>
            <Tabs defaultActiveKey="description" id="product-info-tabs">
              <Tab eventKey="description" title="Description">
                <p>{productData?.description}</p>
              </Tab>
              <Tab eventKey="specifications" title="Specifications">
                <table className="specs-table">
                  <tbody>
                    {productData?.spec?.map((value, index) => (
                      <tr key={index}>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Row>
          <Review productId={productId} />
        </Row>
      </Container>



      {/* Country Selection Modal */}
    <CountryModal
      show={showCountryModal}
      onHide={() => setShowCountryModal(false)}
      onSelect={() => handleCountryCheck('addToCart')}
      error={countryError}
      clearError={() => setCountryError('')}
    />
      <Footer />
    </>
  );
};

export default Product;
