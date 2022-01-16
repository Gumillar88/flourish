import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FlourishLogo from "../assets/images/FLRSH_logo.svg";
import AsteriskBig from "../assets/images/FLRSH_Asterisk_Big.svg";

export default function Hero() {
  return (
    <section className="hero text-white mb-5" id="hero">
      <Container className="position-relative pb-5">
        <Row className="pt-5 justify-content-center position-relative">
          <Col lg={{ span: 8, offset: 4 }} className="pt-5 mb-5">
            <img src={AsteriskBig} alt="" className="asterisk" />
            <p className="main-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              minima aut velit labore quidem rerum quibusdam explicabo modi
              repellendus sit!
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={6}>
            <img src={FlourishLogo} alt="flourish-logo" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
