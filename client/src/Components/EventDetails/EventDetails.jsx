import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { EventContext } from '../../App';

const EventDetails = () => {

    const {id} = useParams();
    const [eventData, setEventData] = useContext(EventContext);
    const navigate = useNavigate();

   useEffect(()=>{
     fetch(`/events/${id}`)
    .then(res=>res.json())
    .then(data=>setEventData(data))
   },[id]);

   const handleVolunteer = ()=>{
    navigate('/my-events')
   }

    const eventDate = new Date(eventData?.date).toDateString();
    // console.log(eventDate);

    return (
        <div>
            <Header/>
           {/* event card */}
           <Card className='border-0 mx-auto my-5 w-25' >
            <Card.Img variant="top" src={eventData?.image?.url} className='rounded' height={'350px'} width={'120px'} />
            <Card.Body className='text-center'>
                <Card.Title>{eventData?.title}</Card.Title>
                <Card.Text className='fst-italic'> {eventData?.description} </Card.Text>
                <Card.Text> Date:  {eventDate} </Card.Text>
                <Button variant="primary" className='w-75' onClick={handleVolunteer} > Volunteer </Button>
            </Card.Body>
            </Card>

        </div>
    );
};

export default EventDetails;