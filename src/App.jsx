import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from './components/Navbar'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Dish from './components/Dish';
import "./assets/styles/App.scss";

const dishes = [
  { name: "Tacos à l’unité", price: 3, image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg", isNew: true, stock: 5 }, 
  { name: "Enchiladas", price: 12, image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg", isNew: false, stock: 0 }, 
  { name: "Mole poblano", price: 15, image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg", isNew: false, stock: 2 }, 
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setShowNewOnly(prevState => !prevState);
  };

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const filteredDishes = dishes.filter(dish => dish.stock > 0 && (!showNewOnly || dish.isNew));

  return (
    <>
      <Header cartCount={cartCount} />
      
      <Navbar />

      <main className="main-container">      
        <Container>
          <Button variant="secondary" onClick={handleShowNewOnly} className="mb-3">
            {showNewOnly ? "Voir tout les plat" : "Nouveaut uniquement"}
          </Button>

          <Row className="dish-row">
            {filteredDishes.map((dish, index) => (
              <Col key={index} lg={4} md={4} sm={12} className="d-flex justify-content-center">
                <Dish {...dish} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
