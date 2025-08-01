import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ListCard = ({listing}) => {
    // console.log(listing.banner);
    const random = Math.floor(Math.random()*4);
    
    return (
        <Card style={{ width: '100%', height:'250px' }}>
            <Card.Img variant="top" src={listing.banner} style={{ width: '100%' }} />
            <Card.Body style={{background: listing.color, borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}} >
                <Card.Title>{listing.title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default ListCard;