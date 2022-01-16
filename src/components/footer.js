import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import FLRSHLogo from "../assets/images/FLRSH_Logogram.svg";
import ArteriskPattern from "../assets/images/FLRSH_Asterisk_Pattern.svg";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#392390" }} className="text-white py-5">
      <Container>
        <Row className="mb-5 justify-content-end">
          <Col lg={6} className="position-relative">
            <h1
              className="lets-text text-uppercase position-relative"
              style={{ zIndex: "1" }}
            >
              Let's Have <br />a Chat
            </h1>
            <img
              src={ArteriskPattern}
              alt="Arterisk-Pattern"
              className="position-absolute"
              style={{ maxWidth: "50%", bottom: "-30px", right: "16px" }}
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={6}>
            <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, ullam. Non cupiditate deserunt accusamus. Fuga sed
              impedit ullam ratione sequi!
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formInputName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="name" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formInputEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formInputMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
              </Form.Group>
              <Button
                variant="second-button"
                className="float-end mt-3"
                type="submit"
              >
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </Button>
            </Form>
          </Col>
        </Row>
        <hr style={{ height: "3px", background: "#ff6442", opacity: "1" }} />
        <Row className="mt-5 mb-3 gx-lg-5">
          <Col lg={6} className="pe-5">
            <ul className="d-flex list-unstyled justify-content-between">
              <li>
                <a href="/" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Journal
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3 mb-md-0 opacity-75">
            <h6>PT. KREATIVITAS GANESHA SEJAHTRA</h6>
            <p className="fs-6">Gedung Kemang Point Lt.1-03B</p>
            <p className="fs-6">
              Jln. Kemang Raya No.3 Bangka, Jakarta Selatan
            </p>
            <p className="fs-6">NPWP: 80.479.184.6-014.000</p>
          </Col>
          <Col md={6} className="text-end d-none d-md-block">
            <img src={FLRSHLogo} alt="FL-Logo" style={{ maxWidth: "60px" }} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
