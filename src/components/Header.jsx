import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>너는맞추어라영단어를</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/rank')}>랭킹</Nav.Link>
            <Nav.Link onClick={() => navigate('/difficulty')}>난이도설정</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header