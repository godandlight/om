import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <>
      <div
        className="text-white"
        style={{
          height: "15vh",
          backgroundColor: "black",
          borderTop: "1px solid green",
          padding:"10px"
        }}
      >
        <Container className="text-center">
          <Row>
            <Row>
              <Col>
                <p className="h3 text-success"> Knowledge for Everyone</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p> Free to share copy reuse in the name of god</p>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
}
