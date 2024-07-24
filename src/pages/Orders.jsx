import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaBox, FaShippingFast, FaClipboardCheck } from 'react-icons/fa';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';

const orderData = [
  {
    id: 1,
    name: 'ECO-FRIENDLY COTTON BUDS',
    price: 999,
    status: 'Order Placed',
    statusDetails: 'Your order has been placed',
    image: 'https://img.freepik.com/premium-photo/heap-bamboo-cotton-swabs-buds-top-view-beige-surface-copy-space_224798-1095.jpg?w=996',
    orderDate: '2024-07-20',
    estimatedDelivery: '2024-07-27',
  },
  // Add more order objects as needed
];

function OrderCard({ order }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Order Placed':
        return <FaBox className="text-primary" />;
      case 'Shipped':
        return <FaShippingFast className="text-info" />;
      case 'Delivered':
        return <FaClipboardCheck className="text-success" />;
      default:
        return null;
    }
  };

  return (
    <Card className="mb-4 border-0 shadow-sm">
      <Card.Body>
        <Row className="align-items-center">
          <Col lg={2} md={3} className="mb-3 mb-md-0">
            <div className="rounded overflow-hidden" style={{ height: '100px', width: '100px' }}>
              <img src={order.image} alt={order.name} className="img-fluid h-100 w-100 object-fit-cover" />
            </div>
          </Col>
          <Col lg={6} md={5}>
            <h5 className="mb-1 font-weight-bold">{order.name}</h5>
            <p className="text-muted mb-2 small">Order Date: {order.orderDate}</p>
            <Badge bg="light" text="dark" className="mb-2 px-3 py-2 rounded-pill">
              {getStatusIcon(order.status)} {order.status}
            </Badge>
            <p className="small mb-0 text-muted">{order.statusDetails}</p>
          </Col>
          <Col lg={2} md={2} className="text-md-center">
            <h5 className="mb-1 font-weight-bold">₹{order.price.toLocaleString()}</h5>
            <p className="text-muted small mb-0">Estimated Delivery</p>
            <p className="small mb-0">{order.estimatedDelivery}</p>
          </Col>
          <Col lg={2} md={2} className="text-md-end mt-3 mt-md-0">
            <Link to={`/ordertrack`} className="btn btn-outline-primary btn-sm w-100">
              Track Order
            </Link>
            <Button variant="link" className="btn-sm text-muted w-100 mt-2">View Details</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

function Orders() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <MiddleNav />
      <Container className="flex-grow-1 py-5">
        <h2 className="mb-4 font-weight-bold">Your Orders</h2>
        <div className="bg-white p-4 rounded shadow-sm">
          {orderData.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Orders;