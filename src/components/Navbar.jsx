import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/navbar.scss';


const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src="/src/assets/react.svg" alt="Logo" className="logo" /> {/* Logo */}
                    Mexican Food
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
