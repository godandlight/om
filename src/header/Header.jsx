import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
 import { LinkContainer } from 'react-router-bootstrap'

import "./Header.css";

export default function Header() {
  
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="animated-border-container animated-border"
    >
      <Container>
        <Navbar.Brand href="#home">God_&_Light</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
<LinkContainer to="/astakas">
  <Nav.Link>Astakas</Nav.Link>
</LinkContainer>

         
<LinkContainer to="/astakas">
  <Nav.Link href="#home">Kavachas</Nav.Link>
</LinkContainer>

         
<LinkContainer to="/astakas">
  <Nav.Link href="#link">Stotras</Nav.Link>
</LinkContainer>
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
