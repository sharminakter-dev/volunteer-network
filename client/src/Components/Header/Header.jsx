import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logos/Group 1329.png';
import './Header.css'

const Header = () => {
    return (
    <Navbar expand="lg" className='navbar' >
      <Container fluid>
        <Row>
            <Col >
                <Navbar.Brand href="/">
                    <img 
                      src={logo} 
                      width='130' 
                      height='50' 
                      alt="volunteer_logo" 
                    />
                </Navbar.Brand>
            </Col>
        </Row>
        <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Col> <Nav.Link href="/">Home</Nav.Link></Col>
            <Col> <Nav.Link href="#action1">Donation</Nav.Link></Col>
            <Col><Nav.Link href="#action1">Events</Nav.Link></Col>
            <Col><Nav.Link href="#action1">Blog</Nav.Link></Col>
            <Col><Button variant="primary">Register</Button></Col>
            <Col><Button variant="secondary">Admin</Button></Col>
        </Row>

        
      </Container>
    </Navbar>
    );
};

export default Header;