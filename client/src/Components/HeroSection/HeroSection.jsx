import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, InputGroup } from 'react-bootstrap';

const HeroSection = () => {
    return (
    <Container style={{textAlign:'center', marginTop:'2rem'}}>
            <h3>I Grow By Helping People In Need</h3>
            <InputGroup className="mb-3" style={{width: '30%', margin:'auto', marginTop:'1.5rem'}} >
                <Form.Control
                placeholder="Search...."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2"  >
                Search
                </Button>
            </InputGroup>

        </Container>
    );
};

export default HeroSection;