import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ListCard = ({listing}) => {
    // console.log(listing);
    
    return (
        <Card style={{
            height: '250px',
            display: 'flex',
            flexDirection: 'column'
            }}>
            <Card.Img
                variant="top"
                src={listing.image.url}
                alt={listing.image.fileName}
                style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
                }}
            />
            <Card.Body
                style={{
                background: listing.color,
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
                flex: '1', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px'
                }}
            >
                <Card.Title
                style={{
                    fontSize: '1rem',
                    margin: 0,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
                >
                {listing.title}
                </Card.Title>
            </Card.Body>
            </Card>
    );
};

export default ListCard;