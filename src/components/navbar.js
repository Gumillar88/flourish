import React, { useState, useEffect } from "react";
import Burger from "react-css-burger";
import "../assets/style/navbar.css";
import FLRSHBrand from "../assets/images/FLRSH-Brand.svg";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Navbar() {
  const [state, setState] = useState({
    active: false,
  });

  const isOnTop = useScrollHandler();

  const open = () => setState(!open);
  return (
    <nav className={`navbar ${isOnTop ? "" : "scrolled"}`}>
      <Container className="d-flex justify-content-between align-items-center">
        <div className="navbar-brand">
          <img src={FLRSHBrand} alt="flourish-logo" />
        </div>
        <Burger
          onClick={() => setState({ active: !state.active })}
          active={state.active}
          burger="spin"
          color={`${isOnTop ? "white" : "#ff6442"}`}
          hoverOpacity={0.8}
          scale={1.2}
          style={{
            height: "20px",
            padding: "0",
            margin: "0",
            zIndex: "1",
          }}
        />
        <div className={state.active ? "nav-items active" : "nav-items"}>
          <Link to="hero" spy={true} className="nav-link" onClick={open}>
            Home
          </Link>
          <Link to="hero" spy={true} className="nav-link" onClick={open}>
            About
          </Link>
          <Link to="hero" spy={true} className="nav-link" onClick={open}>
            Services
          </Link>
          <Link to="hero" spy={true} className="nav-link" onClick={open}>
            Contact
          </Link>
        </div>
      </Container>
    </nav>
  );
}

// ===On Scroll Logic===
const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 8;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
