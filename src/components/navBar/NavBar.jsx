import Reac from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
  return (
    <div className='navBar' >
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" 
                style={{ padding: "10px" }} >
            <Container fluid >
                <Navbar.Brand href="/">
                    <img alt="" src="/logo.png" width="60" height="60"
                         className="d-inline-block align-center" />
                    &nbsp;&nbsp;&nbsp;lighting .net
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ fontSize: "120%" }} >
                    <Nav className="me-auto position-absolute top-50 start-50 translate-middle" >
                        <Nav.Link href="/" className="px-3">Home</Nav.Link>
                        <Nav.Link href="/nosotros" className="px-3">Sobre Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown" className="px-3">
                            <NavDropdown.Item href="/tipo/lampara">Lámparas</NavDropdown.Item>
                            <NavDropdown.Item href="/tipo/luminaria">Luminarias</NavDropdown.Item>
                            <NavDropdown.Item href="/tipo/proyector">Proyectores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/productos">Todos los productos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget cantItems="0"/>
            </Container>
        </Navbar>
    </div>
  );
}

export default NavBar;