// SingleOrder.js
import React, { useEffect, useState, useMemo } from 'react';
import { Card, Col, Container, Row, Table, Spinner, Alert, Badge } from 'react-bootstrap';
import { FaBox, FaShippingFast, FaTruck, FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaFileInvoiceDollar } from 'react-icons/fa';
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
              items: [
                {
                  name: 'Wireless Bluetooth Headphones',
                  quantity: 2,
                  price: 2999,
                  imageUrl: 'https://example.com/bluetooth-headphones.jpg',
                  category: 'Headphones',
                },
                {
                  name: 'Smart Home Hub',
                  quantity: 1,
                  price: 7999,
                  imageUrl: 'https://example.com/smart-home-hub.jpg',
                  category: 'Smart Home',
                },
              ]
              ,
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
          const isActive = index <= currentStatusIndex;
          return (
            <div key={step.status} className={`progress-step ${isActive ? 'active' : ''}`}>
              <div className="progress-icon-wrapper">
                <Icon className="progress-icon" />
              </div>
              <div className="progress-label">{step.label}</div>
              {index < STATUS_STEPS.length - 1 && <div className="progress-line" />}
            </div>
          );
        })}
      </div>
    );
  };

  const renderOrderItems = () => {
    return orderData.orderDetails.items.map((item, index) => (
      <Card key={index} className="mb-3 border-0 shadow-sm">
        <Card.Body>
          <Row className="align-items-center">
            <Col xs={3} md={2}>
              <img src={item.imageUrl} alt={item.name} className="img-fluid rounded" />
            </Col>
            <Col xs={9} md={6}>
              <h6 className="mb-1">{item.name}</h6>
              <span bg="light" text="dark">{item.category}</span>
            </Col>
            <Col xs={6} md={2} className="text-end">
              <small className="text-muted">Qty: {item.quantity}</small>
              <p className="mb-0 fw-bold">₹{item.price}</p>
            </Col>
            <Col xs={6} md={2} className="text-end">
              <p className="mb-0 fw-bold">₹{item.price * item.quantity}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    ));
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" variant="primary" />
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
    <div className="bg-light min-vh-100">
      <MiddleNav />
      <Container className="py-5">
        <Card className="border-0 shadow-sm mb-4">
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <h3 className="mb-1">Order #{orderData.orderDetails.orderId}</h3>
                <p className="text-muted mb-0">
                  <FaCalendarAlt className="me-2" />
                  Placed on {orderData.orderDetails.orderDate}
                </p>
              </Col>
              <Col xs={12} md={6} className="text-md-end">
                <span bg="primary" className="p-2 fs-6">
                  {STATUS_STEPS[currentStatusIndex].label}
                </span>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Row>
          <Col lg={8}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-4">Order Progress</h5>
                {renderProgressBar()}
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-4">Order Items</h5>
                {renderOrderItems()}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">
                  <FaMapMarkerAlt className="me-2" />
                  Delivery Address
                </h5>
                <p className="mb-1 fw-bold">{orderData.orderDetails.shippingAddress.name}</p>
                <p className="mb-1">{orderData.orderDetails.shippingAddress.address}</p>
                <p className="mb-0">
                  {orderData.orderDetails.shippingAddress.city},{' '}
                  {orderData.orderDetails.shippingAddress.state}{' '}
                  {orderData.orderDetails.shippingAddress.zip}
                </p>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-3">
                  <FaFileInvoiceDollar className="me-2" />
                  Order Summary
                </h5>
                <Table borderless className="mb-0">
                  <tbody>
                    <tr>
                      <td>Subtotal:</td>
                      <td className="text-end">₹{orderData.orderDetails.total}</td>
                    </tr>
                    <tr>
                      <td>Shipping:</td>
                      <td className="text-end">₹{orderData.orderDetails.shippingCost}</td>
                    </tr>
                    <tr>
                      <td>Tax:</td>
                      <td className="text-end">₹{orderData.orderDetails.tax}</td>
                    </tr>
                    <tr className="fw-bold">
                      <td>Total:</td>
                      <td className="text-end">₹{orderData.orderDetails.grandTotal}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default SingleOrder;