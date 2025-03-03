import React from 'react';

const Dish = ({ image, name, description, price, stock }) => {
    return (
        <div className="dish">
            <img src={image} alt={name} width="150" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p><strong>Prix :</strong> {price}€</p>
            <p><strong>Stock :</strong> {stock > 0 ? `${stock} disponibles` : "Rupture de stock"}</p>
        </div>
    );
};

export default Dish;
