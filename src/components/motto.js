import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Asterisk from "../assets/images/FLRSH_Asterisk_BG-16.svg";

export default function Motto() {
  return (
    <section className="bg-warning py-5 overflow-hidden">
      <Container className="position-relative">
        <Row className="py-3 py-md-5">
          <Col lg={12} className="py-3 py-md-5">
            <p
              className="main-title text-white position-relative"
              style={{ zIndex: "2" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis ipsam dolores, dolor esse reprehenderit est quis
              obcaecati at soluta alias omnis voluptatibus saepe vel nam placeat
              possimus blanditiis quas cum.
            </p>
            <img
              src={Asterisk}
              alt="FLRSH-Asterisk"
              className="position-absolute"
              style={{
                maxWidth: "35%",
                bottom: "-80px",
                right: "50px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
