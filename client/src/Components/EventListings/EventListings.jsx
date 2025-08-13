import React, { useEffect, useState } from 'react';
import './EventListings.css'
import ListCard from '../ListCard/ListCard';
import { Link } from 'react-router-dom';


const EventListings = () => {

    const [eventListing, setEventListing] = useState([]);


    useEffect(()=>{
        fetch('/events')
        .then(res=>res.json())
        .then(data=>setEventListing(data))
    },[]);
    console.log(eventListing);

    const cardColors = ['#3F90FC', '#FFBD3E', '#421FCF', '#FF7044'];
    const cardsPerRow = 4;

    // Helper to shuffle colors
    const shuffleArray = (array) => {
        return [...array].sort(() => 0.5 - Math.random());
    };

    // Prepare full color list for all cards
    const assignedColors = [];
    const totalCards = eventListing.length;

    for (let i = 0; i <totalCards; i += cardsPerRow) {
        const shuffled = shuffleArray(cardColors);
        assignedColors.push(...shuffled.slice(0, Math.min(cardsPerRow, totalCards - i)));
    }

    return (
        <div className='eventList'>
            {
                eventListing.map((list, index) => {
                    return  <Link key={list._id} className='card-link' to={`/eventDetails/${list._id}`} > <ListCard listing={{ ...list, color: assignedColors[index] }}/></Link>
                })
            }
        </div>
    );
};

export default EventListings;