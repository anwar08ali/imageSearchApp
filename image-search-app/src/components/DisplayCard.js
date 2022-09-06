import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
function DisplayCard({ searchedImages }) {
  return (
    <Container fluid>
      <Row>
        {searchedImages &&
          searchedImages.hits?.length > 0 &&
          searchedImages.hits.map((img, k) => (
            <Col key={k} xs={12} md={4} lg={3}>
              <Card>
                <Card.Img src={img.previewURL} />
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default DisplayCard;
