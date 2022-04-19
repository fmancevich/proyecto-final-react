import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>
        {/* <Navbar bg="light" expand="lg"> */}
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt="" src="/logo.png" width="30" height="30"
                         className="d-inline-block align-center" />
                    {' '}lighting .net
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
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
                <CartWidget/>
            </Container>
        </Navbar>
    </div>
  );
}

export default NavBar;