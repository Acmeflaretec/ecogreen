import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './RecommendationPanel.css';

function RecommendationPanel({ videoImage, title, deals }) {
  return (
    <Container className="recommendation-panel">
      <Row>
        <Col lg={6}>
          <div className="video-recommendation">
            <div className="video-preview" >
              <Image src={videoImage} alt="Video Preview" fluid style={{ height: "500px", width:'100%', objectFit:'cover'}} />
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <div className="deals-section">
            <h2>{title}</h2>
            <Row>
              {deals.map((deal, index) => (
                <Col sm={6} className="deal-item" key={index} >
                  <Image src={deal.image} alt={deal.name} fluid style={{ height: "200px", width:'100%', objectFit:'cover'}}/>
                  <p>{deal.text}</p>
                </Col>
              ))}
            </Row>
            <a href="#" className="explore-more">Explore More</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RecommendationPanel;
