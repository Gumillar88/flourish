import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Strategy from "../assets/images/FLRSH_What_We_Do_Strategy.svg";
import Creative from "../assets/images/FLRSH_What_We_Do_Creative.svg";
import Technology from "../assets/images/FLRSH_What_We_Do_Tech.svg";
import Marketing from "../assets/images/FLRSH_What_We_Do_Marketing.svg";
import Artboard from "../assets/images/artboard.svg";

export default function Whatwedo() {
  return (
    <section className="position-relative py-5 mt-5">
      <small
        className="artboard-text position-absolute text-uppercase top-50 fw-bold d-none d-lg-block"
        style={{
          left: "-30px",
          color: "#ff6442",
          letterSpacing: "5px",
          transform: "rotate(-90deg)",
          fontSize: "10px",
        }}
      >
        What We Do
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
        <Row className="gx-lg-4">
          {whatWeDoContents.map((content, i) => (
            <Col lg={3} md={6} className="mt-4 mt-lg-0" key={i}>
              <Card className="border-0 mb-3 mb-lg-0">
                <Card.Img
                  variant="top"
                  src={content.image}
                  alt={content.title}
                  className="border-0 bg-white image-fluid px-5"
                />
                <Card.Body className="p-0">
                  <Card.Title
                    className="text-uppercase fw-bolder fs-2 mb-3"
                    style={{
                      letterSpacing: "3px",
                      color: "var(--main-blue)",
                      marginTop: "-25px",
                    }}
                  >
                    {content.title}
                  </Card.Title>
                  <Card.Text className="description fw-bold fs-6">
                    {content.description}
                  </Card.Text>
                  <Card.Link
                    href={content.link}
                    className="align-items-center float-end mt-4"
                    style={{ color: "var(--main-blue)", letterSpacing: "2px" }}
                  >
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
                    <span className="ms-1">read more...</span>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

const whatWeDoContents = [
  {
    image: Strategy,
    title: "Strategy",
    description:
      "We conduct market research using innovative tools, big data and proven methods to deliver insights and actionable recommendations for organizations and brands.",
    link: "/",
  },
  {
    image: Creative,
    title: "Creative",
    description:
      "We tackle complex issues with creative story-telling and visual narratives, through films, animations, books, graphics, brand & identities, websites, and campaigns that promote positive change.",
    link: "/",
  },
  {
    image: Technology,
    title: "Technology",
    description:
      "We integrate design and creativity with technology, to develop solutions that align communication objectives with organizational goals.",
    link: "/",
  },
  {
    image: Marketing,
    title: "Marketing",
    description:
      "From campaign ideation to production, we create, manage and amplify your key messages across platforms to effectively and efficiently reach your audience.",
    link: "/",
  },
];
