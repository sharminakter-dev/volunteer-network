import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EventDetails = () => {

    const {id} = useParams();
    // console.log(id);
    const [event, setEvent] =useState({})

   useEffect(()=>{
     fetch(`http://localhost:3000/events/${id}`)
    .then(res=>res.json())
    .then(data=>setEvent(data))
   },[id])

    // console.log(event);
    const eventDate = new Date(event.eventDate).toDateString();
    // console.log(eventDate);
   const userId = 1;

    return (
        <div>
            <Header/>
           {/* event card */}
           <Card className='border-0 mx-auto my-5 w-50' >
            <Card.Img variant="top" src={event.banner} className='rounded'/>
            <Card.Body className='text-center'>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text className='fst-italic'> {event.description} </Card.Text>
                <Card.Text> Date:  {eventDate} </Card.Text>
                <Link to= {`/user/${userId}/events`} > <Button variant="primary" className='w-75' > Volunteer </Button> </Link>
            </Card.Body>
            </Card>

        </div>
    );
};

export default EventDetails;