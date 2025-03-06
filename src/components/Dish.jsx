import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import '/src/assets/styles/dish.scss';

const Dish = ({ image, name, price, isNew }) => {
    
    const handleAddToCart = () => {
        alert(`Le plat ${name} est maintenant dans votre panier`);
    };

    return (
        <Card className="dish-card">
            <div className="dish-image-container">
                {isNew && <Badge className="new-badge">Nouveau</Badge>} 
                <Card.Img variant="top" src={image} className="dish-img"/>
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><strong>Prix :</strong> {price}€</Card.Text>
                <Button variant="primary" onClick={handleAddToCart}>
                    Ajouter au panier
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Dish;
