import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Container, InputGroup } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaSave, FaCoins, FaLink, FaCopy, FaShare } from 'react-icons/fa';

function ProfileInfo() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    coins: 1250000,
    referralLink: 'https://example.com/ref/johndoe123'
  });

  const [editable, setEditable] = useState({
    name: false,
    email: false,
    phone: false
  });

  const handleEdit = (field) => {
    setEditable(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (field) => {
    console.log(`Saving ${field}: ${profile[field]}`);
    handleEdit(field);
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(profile.referralLink);
    alert('link copied')
  };

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Referral Link',
        url: profile.referralLink,
      });
    } else {
      // Implement a fallback sharing method
    }
  };

  const renderField = (field, icon) => (
    <Form.Group as={Row} className="mb-4 align-items-center">
      <Form.Label column sm={3} className="text-muted">
        {icon} {field.charAt(0).toUpperCase() + field.slice(1)}
      </Form.Label>
      <Col sm={7}>
        <Form.Control
          type="text"
          name={field}
          value={profile[field]}
          onChange={handleChange}
          disabled={!editable[field]}
          className={`border-0 border-bottom rounded-0 ${editable[field] ? 'border-primary' : ''}`}
        />
      </Col>
      <Col sm={2}>
        <Button
          variant="link"
          onClick={() => editable[field] ? handleSave(field) : handleEdit(field)}
          className="text-primary p-0"
        >
          {editable[field] ? <FaSave /> : <FaEdit />}
        </Button>
      </Col>
    </Form.Group>
  );

  return (
    <Container className="py-5">
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-5">
          <Row className="mb-5">
            <Col>
              <h2 className="mb-4 fw-light">Profile Information</h2>
              <div className="d-flex align-items-center mb-4">
                <FaCoins className="text-primary me-3" style={{ fontSize: '2rem' }} />
                <div>
                  <small className="text-muted text-uppercase">Balance</small>
                  <h3 className="mb-0 fw-bold">{profile.coins.toLocaleString()} Coins</h3>
                </div>
              </div>
            </Col>
          </Row>

          <Form>
            {renderField('name', <FaUser className="text-primary" />)}
            {renderField('email', <FaEnvelope className="text-primary" />)}
            {renderField('phone', <FaPhone className="text-primary" />)}
          </Form>

          <hr className="my-5" />

          <Row className="align-items-center">
            <Col sm={3}>
              <h5 className="text-muted mb-0"><FaLink className="me-2" /> Referral Link</h5>
            </Col>
            <Col sm={9}>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={profile.referralLink}
                  readOnly
                  className="border-0 bg-light"
                />
                <Button variant="outline-secondary" onClick={copyReferralLink}>
                  <FaCopy />
                </Button>
                <Button variant="outline-primary" onClick={shareReferralLink}>
                  <FaShare />
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfileInfo;