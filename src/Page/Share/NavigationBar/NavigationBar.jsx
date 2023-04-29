import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
const { user,logOut } = useContext(AuthContext);
// console.log(user.email)
const handleLogout = () =>{
logOut()
.then(()=>{})
.catch(error=>{
console.log(error.message)
})
}
  return (
    <Container>
      {/* Navbar */}
      <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-4 fs-4 fw-bold">
              <Link to="/category/0">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">SignUp</Link>
            </Nav>
            <Nav className='me-2'>
              {user && 
                 <> <FaUserCircle className='fs-1 me-3'></FaUserCircle></>
              
              }
              
                {user ?
                  <Link><Button onClick={handleLogout} variant="secondary">Logout</Button></Link>:
                  <Link to="/login"> <Button variant="secondary">Login</Button> </Link>
                }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;