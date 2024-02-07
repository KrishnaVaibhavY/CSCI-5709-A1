import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import './nav.css';

import { Navbar, Nav } from 'react-bootstrap';

const Navb = () => {
    return (
        <Navbar bg="transparent" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <img className="mx-3" src={logo} alt="Logo" height={50}/>
               GoDine
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav ">
                <Nav className="m-4 h6 text-center ">
                    <Nav.Link href="#home" className="text-dark tw">Home</Nav.Link>
                    <Nav.Link href="#about" className="text-dark tw">About</Nav.Link>
                    <Nav.Link href="#services" className="text-dark tw">Services</Nav.Link>
                    <Nav.Link href="#contact" className="text-dark tw">Contact</Nav.Link>
                </Nav>



            </Navbar.Collapse>
        </Navbar>
        
    );
}

export default Navb;
