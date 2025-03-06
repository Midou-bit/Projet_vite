import React, { useContext } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import '/src/assets/styles/dish.scss';

const Dish = ({ image, name, price, isNew }) => {
    const { addToCart } = useContext(CartContext);

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
                    Ajoute au panier
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Dish;
