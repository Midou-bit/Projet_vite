import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import useCart from '../hooks/useCart';

const Header = () => {
    const { cartCount } = useCart();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Mon Restaurant</Navbar.Brand>
                <Nav className="ms-auto">  
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/panier">Panier ({cartCount})</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
