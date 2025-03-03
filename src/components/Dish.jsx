import React from 'react';

const Dish = ({ image, name, price }) => {
    return (
        <div className="dish">
            <img src={image} alt={name} width="150" />
            <h3>{name}</h3>
            <p>Prix : {price}€</p>  {/* Affichage correct du prix */}
        </div>
    );
};

export default Dish;
