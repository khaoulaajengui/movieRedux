import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const nav =()=> {
  return (
    <Navbar style={{}} expand="lg" variant="dark" bg="light">
      <Container>
        <Navbar.Brand href="#">Movies</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default nav;