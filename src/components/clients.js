import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Artboard from "../assets/images/artboard.svg";
import ClientsSouthQuarter from "../assets/images/clients_southquarter.png";
import ClientsAlamSutra from "../assets/images/clients_alamsutra.png";
import ClientsCiputra from "../assets/images/clients_ciputra.png";
import ClientsEria from "../assets/images/clients_eria.png";
import ClientsIntiland from "../assets/images/clients_intiland.png";
import ClientsKudanil from "../assets/images/clients_kudanil.png";
import ClientsMosaik from "../assets/images/clients_mosaik.png";
import ClientsSerena from "../assets/images/clients_serena.png";
import ClientsSouthGgrove from "../assets/images/clients_southgrove.png";
import ClientsSqres from "../assets/images/clients_sqres.png";
import ClientsThiess from "../assets/images/clients_thiess.png";

export default function Clients() {
  return (
    <section className="py-5 position-relative">
      <small
        className="artboard-text position-absolute text-uppercase top-50 fw-bold d-none d-lg-block"
        style={{
          left: "-30",
          color: "#ff6442",
          letterSpacing: "5px",
          transform: "rotate(-90deg)",
          fontSize: "12px",
        }}
      >
        our clients
        <img
          src={Artboard}
          alt="Artboard"
          style={{
            transform: "rotate(90deg)",
            marginLeft: "40px",
            maxWidth: "18px",
          }}
        />
      </small>
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <p style={{ color: "#392390" }} className="main-title">
              Who we've worked with:
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col lg={9} className="d-flex flex-wrap mx-auto">
            <Row>
              {clientCardContents.map((content, i) => (
                <Col sm={3} xs={6} key={i}>
                  <Card
                    style={{ width: "10rem" }}
                    className="me-4 mb-4 border-0"
                  >
                    <Card.Img
                      variant="top"
                      className="img-fluid"
                      src={content.image}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const clientCardContents = [
  {
    image: ClientsSouthQuarter,
  },
  {
    image: ClientsAlamSutra,
  },
  {
    image: ClientsCiputra,
  },
  {
    image: ClientsEria,
  },
  {
    image: ClientsIntiland,
  },
  {
    image: ClientsKudanil,
  },
  {
    image: ClientsMosaik,
  },
  {
    image: ClientsSerena,
  },
  {
    image: ClientsSouthGgrove,
  },
  {
    image: ClientsSqres,
  },
  {
    image: ClientsThiess,
  },
];
