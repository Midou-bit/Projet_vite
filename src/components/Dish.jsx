import React from 'react';
import { Card } from 'react-bootstrap';

const Dish = ({ image, name, price }) => {
    return (
        <Card className="dish-card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><strong>Prix :</strong> {price}€</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Dish;
