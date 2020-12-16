import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Ticker() {
  return (
    <div>
      <Card
        border="dark"
        // bg="#ff6768"
        text="light"
        style={{
          padding: "10px",
          textAlign: "center",
          margin: "2px",
          backgroundColor: "#313131",
        }}
      >
        <Container>
          <Row>
            <Col> APPL</Col>
            <Col>Price $20</Col>
            <Col>X</Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
export default Ticker;
