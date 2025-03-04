import React from 'react';
import { Card } from 'react-bootstrap';
import '/src/assets/styles/dish.scss'; 

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
