import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Project from "../assets/images/project.png";

export default function Projects() {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="gx-lg-5 py-5">
          {projectContents.map((content, i) => (
            <Col md={6} className="mb-4 mb-lg-0" key={i}>
              <Card className="border-0 bg-transparent">
                <Card.Img variant="top" src={Project}></Card.Img>
                <Card.Body className="px-0">
                  <Card.Title
                    className="text-uppercase fw-bolder fs-2 mb-2"
                    style={{
                      letterSpacing: "3px",
                      color: "var(--main-blue)",
                    }}
                  >
                    {content.title}
                  </Card.Title>
                  <Card.Text className="description fw-bold fs-6">
                    {content.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mb-4 justify-content-center">
          <Col lg={12} className="text-center">
            <Button variant="main-button">
              Other Projects{" "}
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const projectContents = [
  {
    image: "",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];
