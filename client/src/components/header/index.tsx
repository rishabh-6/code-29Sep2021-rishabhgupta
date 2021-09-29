import React from "react";
import { Navbar, Container } from 'react-bootstrap';

type HeaderProps = {
  text: string;
};

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#home">
      <img
        src="/logo-car.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        style={{marginRight: '0.5rem'}}
      />
        Car Dealership
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
  </Navbar>
  );
};
export default Header;