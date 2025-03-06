import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Mon Restaurant</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/panier">Panier ({cartCount})</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
