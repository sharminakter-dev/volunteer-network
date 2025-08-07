import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const searchRef = useRef('');
    const navigate = useNavigate();

    const handleSearch = ()=>{
        // console.log(searchRef.current.value)
        const searchValue = searchRef.current.value.trim()
        // console.log(encodeURIComponent(searchValue))
        navigate(`/search?q=${encodeURIComponent(searchValue)}`)
    }
    return (
    <Container style={{textAlign:'center', marginTop:'2rem'}}>
            <h3>I Grow By Helping People In Need</h3>
            <InputGroup className="mb-3" style={{width: '30%', margin:'auto', marginTop:'1.5rem'}} >
                <Form.Control
                placeholder="Search...."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                name='search'
                ref={searchRef}
                />
               <Button variant="primary" id="button-addon2" onClick={handleSearch} >
                Search
            </Button>
            </InputGroup>

        </Container>
    );
};

export default HeroSection;