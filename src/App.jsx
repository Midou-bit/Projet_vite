import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Dish from './components/Dish';
import "./assets/styles/App.scss";

const dishes = [
  { name: "Tacos à l’unité", 
    price: 3, 
    image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg", 
    isNew: true },
  { name: "Enchiladas", 
    price: 12, 
    image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg", 
    isNew: false },
  { name: "Mole poblano", 
    price: 15, 
    image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg", 
    isNew: false },
];

function App() {
  return (
    <>
      <Navbar /> 

      <main className="main-container">      
        <Container>
          <Row className="dish-row">
            {dishes.map((dish, index) => (
              <Col key={index} lg={4} md={4} sm={12} className="d-flex justify-content-center">
                <Dish {...dish} />
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
