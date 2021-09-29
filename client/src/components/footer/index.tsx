import React from "react";
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => (
  <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
  <Container style={{padding: '0.7rem 0 0.7rem 35%'}}>
    © 2021 Car Dealership. All rights reserved.
  </Container>
</Navbar>
);

export default Footer;