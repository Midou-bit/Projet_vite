import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import Dish from './components/Dish';

const dishes = [
  {
      image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      name: "Tacos à l’unité",
      description: "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique.",
      price: "3",
      stock: 12
  },
  {
      image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      name: "Enchiladas",
      description: "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée.",
      price: "12",
      stock: 0
  },
  {
      image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      name: "Mole poblano",
      description: "Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments.",
      price: "15",
      stock: 5
  }
];

function App() {
    return (
        <div>
            <Header />
            <h1>Bienvenue la Famille</h1>
            <h2>Nos bon petit Plat</h2>
            <div className="dishes">
                {dishes.map((dish, index) => (
                    <Dish
                        key={index}
                        image={dish.image}
                        name={dish.name}
                        description={dish.description}
                        price={dish.price}
                        stock={dish.stock}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
