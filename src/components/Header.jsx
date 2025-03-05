import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png"; // ✅ Import du nouveau logo
import "./Header.scss";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/" className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Link href="/">Accueil</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
