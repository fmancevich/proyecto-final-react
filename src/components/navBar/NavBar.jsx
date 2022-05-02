import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
  return (
    <div className='navBar' >
        <Navbar bg="primary" variant="dark" expand="lg" style={{ padding: "0px 10px", height: "80px" }} >
            <Container fluid >
                <Navbar.Brand href="#home">
                    <img alt="" src="./logo.png" width="60" height="60"
                         className="d-inline-block align-center" />
                    &nbsp;&nbsp;&nbsp;lighting .net
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto position-absolute top-50 start-50 translate-middle" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#productos/lamparas">Lámparas</NavDropdown.Item>
                            <NavDropdown.Item href="#productos/luminarias">Luminarias</NavDropdown.Item>
                            <NavDropdown.Item href="#productos/proyectores">Proyectores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#productos/emergencia">Luminarias de Emergencia</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#nosotros">Sobre Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget cantItems="0"/>
            </Container>
        </Navbar>
    </div>
  );
}

export default NavBar;