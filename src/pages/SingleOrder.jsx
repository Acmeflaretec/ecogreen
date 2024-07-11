// SingleOrder.js
import React, { useEffect, useState, useMemo } from 'react';
import { Card, Col, Container, Row, Table, Spinner, Alert, Button } from 'react-bootstrap';
import { FaBox, FaShippingFast, FaTruck, FaCheckCircle, FaPrint, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';
import './SingleOrder.css';

const STATUS_STEPS = [
  { status: 'order_confirmed', label: 'Order Confirmed', icon: FaBox },
  { status: 'shipped', label: 'Shipped', icon: FaShippingFast },
  { status: 'out_for_delivery', label: 'Out for Delivery', icon: FaTruck },
  { status: 'delivered', label: 'Delivered', icon: FaCheckCircle },
];

function SingleOrder() {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        // Simulating API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({
            status: 'out_for_delivery',
            orderDetails: {
              orderId: '12345678',
              orderDate: '2023-05-15',
              items: [
                {
                  name: 'ECO-FRIENDLY COTTON BUDS',
                  quantity: 2,
                  price: 999,
                  imageUrl: 'https://img.freepik.com/premium-photo/heap-bamboo-cotton-swabs-buds-top-view-beige-surface-copy-space_224798-1095.jpg?w=996',
                  category: 'Seeds',
                },
                {
                  name: 'ORGANIC PLANT FOOD',
                  quantity: 1,
                  price: 599,
                  imageUrl: 'https://example.com/plant-food.jpg',
                  category: 'Fertilizers',
                },
              ],
              shippingAddress: {
                name: 'John Doe',
                address: '123 Main St, Anytown USA',
                city: 'New York',
                state: 'NY',
                zip: '10001',
              },
              total: 2597,
              shippingCost: 100,
              tax: 260,
              grandTotal: 2957,
            },
          }), 1000)
        );
        setOrderData(response);
      } catch (err) {
        setError('Failed to fetch order data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, []);

  const currentStatusIndex = useMemo(() => {
    if (!orderData) return -1;
    return STATUS_STEPS.findIndex(step => step.status === orderData.status.toLowerCase().replace(/ /g, '_'));
  }, [orderData]);

  const renderProgressBar = () => {
    return (
      <div className="progress-container mb-4">
        {STATUS_STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.status} className="progress-step">
              <div className={`progress-icon ${index <= currentStatusIndex ? 'active' : ''}`}>
                <Icon />
              </div>
              <div className="progress-label">{step.label}</div>
              {index < STATUS_STEPS.length - 1 && (
                <div className={`progress-line ${index < currentStatusIndex ? 'active' : ''}`} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderOrderItems = () => {
    return orderData.orderDetails.items.map((item, index) => (
      <tr key={index}>
        <td>
          <div className="d-flex align-items-center">
            <img src={item.imageUrl} alt={item.name} className="item-image me-3" />
            <div>
              <p className="mb-0 fw-bold">{item.name}</p>
              <small className="text-muted">{item.category}</small>
            </div>
          </div>
        </td>
        <td className="text-center">{item.quantity}</td>
        <td className="text-end">₹{item.price}</td>
        <td className="text-end">₹{item.price * item.quantity}</td>
      </tr>
    ));
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!orderData) return null;

  return (
    <>
      <MiddleNav />
      <Container className="my-5">
        <h2 className="mb-4">Order Details</h2>
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={12} md={3} className="mb-3 mb-md-0">
                <h4>Order #{orderData.orderDetails.orderId}</h4>
                <p className="text-muted mb-0">Placed on {orderData.orderDetails.orderDate}</p>
              </Col>
              <Col xs={12} md={9} className="mb-3 mb-md-0">
                {renderProgressBar()}
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Row>
          <Col xs={12} lg={8} className="mb-4 mb-lg-0">
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Order Items</h5>
                <Table responsive className="mb-0">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-end">Price</th>
                      <th className="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderOrderItems()}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-end">Subtotal:</td>
                      <td className="text-end">₹{orderData.orderDetails.total}</td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="text-end">Shipping:</td>
                      <td className="text-end">₹{orderData.orderDetails.shippingCost}</td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="text-end">Tax:</td>
                      <td className="text-end">₹{orderData.orderDetails.tax}</td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="text-end fw-bold">Grand Total:</td>
                      <td className="text-end fw-bold">₹{orderData.orderDetails.grandTotal}</td>
                    </tr>
                  </tfoot>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Delivery Address</h5>
                <p className="mb-1 fw-bold">{orderData.orderDetails.shippingAddress.name}</p>
                <p className="mb-1">{orderData.orderDetails.shippingAddress.address}</p>
                <p className="mb-0">
                  {orderData.orderDetails.shippingAddress.city},{' '}
                  {orderData.orderDetails.shippingAddress.state}{' '}
                  {orderData.orderDetails.shippingAddress.zip}
                </p>
              </Card.Body>
            </Card>
            {/* <Card className="shadow-sm">
              <Card.Body>
                <h5 className="mb-3">Actions</h5>
                <Button variant="outline-primary" className="me-2 mb-2">
                  <FaPrint className="me-2" />
                  Print Invoice
                </Button>
                <Button variant="outline-secondary" className="mb-2">
                  <FaEnvelope className="me-2" />
                  Email Invoice
                </Button>
              </Card.Body>
            </Card> */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default SingleOrder;