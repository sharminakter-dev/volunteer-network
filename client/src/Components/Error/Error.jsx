import React from 'react';
import notFound from '../../assets/logos/Not-found.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ 
                height:'100vh',
                backgroundImage:`url(${notFound})`,
                backgroundSize:'contain',
                backgroundPosition: 'center',    
                backgroundRepeat: 'no-repeat',
            }} >
            </div>
             <Link to='/'><Button variant="danger" style={{ marginBottom: '20px' }} >Go back</Button></Link>
        </div>
    );
};

export default Error;