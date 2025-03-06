import React, { useContext } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import '/src/assets/styles/dish.scss';

const Dish = ({ image, name, price, isNew }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <Card className="dish-card">
            <div className="dish-image-container">
                {isNew && <Badge className="new-badge">Nouveau</Badge>} 
                <Card.Img variant="top" src={image} className="dish-img"/>
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><strong>Prix :</strong> {price}€</Card.Text>
                <Button variant="primary" onClick={() => dispatch({ type: "increment" })}>
                    Ajouter au panier
                </Button>
                {' '}
                <Button variant="danger" onClick={() => dispatch({ type: "decrement" })}>
                    enlever du panier
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Dish;
