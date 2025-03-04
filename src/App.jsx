import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Dish from './components/Dish';

function App() {
    return (
        <div>
            <NavigationBar />
            <Container>
                <h1 className="text-center my-4">Bienvenue la Famille</h1>
                <h2 className="text-center">Nos bons petits plats</h2>

                <Row>
                    <Col md={4}>
                        <Dish 
                            image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                            name="Tacos à l’unité"
                            price={3}  
                        />
                    </Col>

                    <Col md={4}>
                        <Dish 
                            image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                            name="Enchiladas"
                            price={12}  
                        />
                    </Col>

                    <Col md={4}>
                        <Dish 
                            image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                            name="Mole poblano"
                            price={15}  
                        />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default App;
