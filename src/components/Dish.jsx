import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import useCart from '../hooks/useCart';
import '/src/assets/styles/dish.scss';

const Dish = ({ image, name, price, isNew }) => {
    const { addToCart, removeFromCart } = useCart();

    return (
        <Card className="dish-card">
            <div className="dish-image-container">
                {isNew && <Badge className="new-badge">Nouveau</Badge>} 
                <Card.Img variant="top" src={image} className="dish-img"/>
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><strong>Prix :</strong> {price}€</Card.Text>
                <Button variant="primary" onClick={addToCart}>
                    Ajouter au panier
                </Button>
                {' '}
                <Button variant="danger" onClick={removeFromCart}>
                    Retirer du panier
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Dish;
