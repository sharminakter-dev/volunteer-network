import React, { useEffect, useState } from 'react';
import './EventListings.css'
import ListCard from '../ListCard/ListCard';


const EventListings = () => {

    const [eventListing, setEventListing] = useState([]);

    const cardColors = ['#3F90FC', '#FFBD3E', '#421FCF', '#FF7044'];
    const cardsPerRow = 4;

    useEffect(()=>{
        fetch('http://localhost:3000/events')
        .then(res=>res.json())
        .then(data=>setEventListing(data))
    },[]);
    // console.log(eventListing);

    // Helper to shuffle colors
    const shuffleArray = (array) => {
        return [...array].sort(() => 0.5 - Math.random());
    };

    // Prepare full color list for all cards
    const assignedColors = [];

    for (let i = 0; i < eventListing.length; i += cardsPerRow) {
        const shuffled = shuffleArray(cardColors);
        assignedColors.push(...shuffled.slice(0, Math.min(cardsPerRow, totalCards - i)));
    }

    return (
        <div className='eventList'>
            {
                eventListing.map((list, index) => {
                    // const randomColor = cardColors[Math.floor(Math.random()*cardColors.length)]
                    return <ListCard key={list._id} listing={{ ...list, color: assignedColors[index] }}/>  
                })
            }
        </div>
    );
};

export default EventListings;