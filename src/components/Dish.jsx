import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import '/src/assets/styles/dish.scss';

const Dish = ({ image, name, price, isNew }) => {
    return (
        <Card className="dish-card">
            <div className="dish-image-container">
                {isNew && <Badge className="new-badge">Nouveau</Badge>} 
                <Card.Img variant="top" src={image} className="dish-img"/>
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><strong>Prix :</strong> {price}€</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Dish;
