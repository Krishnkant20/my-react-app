import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GiBallerinaShoes } from "react-icons/gi";






const TopMenu=()=>{
    return(
        <>

<Navbar bg="light" data-bs-theme="light" id='navbar'>
        <Container>
          <Navbar.Brand  href="Home" style={{fontSize:"30px",color:"red"}}> <GiBallerinaShoes />
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="Home">Home</Nav.Link>
            <Nav.Link as={Link} to="men">Men</Nav.Link>
            <Nav.Link as={Link} to="Women">Women</Nav.Link>
            <Nav.Link as={Link} to="KIds">Kids</Nav.Link>
            <Nav.Link as={Link} to="CartData">Cart</Nav.Link>


          </Nav>
        </Container>
      </Navbar>





        
        
        
        </>
    )
}
export default TopMenu;