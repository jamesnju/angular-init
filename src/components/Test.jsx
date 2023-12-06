import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Link, Route,Routes } from 'react-router-dom';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import About from '../Pages/About';
import './test.css'


const Test = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar expand="lg" className="bg-body-dark">
      <Container  fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact us</Nav.Link>
            <Nav.Link as={Link} to='/about'>About us</Nav.Link>

            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
         <Routes>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/home' element={<Home/>}/>
         </Routes>
     </div>
     </BrowserRouter>
    </div>
  )
}

export default Test