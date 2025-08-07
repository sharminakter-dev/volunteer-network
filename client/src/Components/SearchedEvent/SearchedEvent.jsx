import React, { useEffect, useState } from 'react';
import ListCard from '../ListCard/ListCard';
import { Link, useLocation, useParams } from 'react-router-dom';
import './SearchedEvent.css'
import Header from '../Header/Header';


const SearchedEvent = () => {
    const [eventListing, setEventListing] = useState([]);
    const location  = useLocation()
    // console.log(location)
    const query  = new URLSearchParams(location.search).get('q');
    // console.log(query )
    
    const cardColors = ['#3F90FC', '#FFBD3E', '#421FCF', '#FF7044'];
    const cardsPerRow = 4;

    useEffect(()=>{
        fetch(`http://localhost:3000/events/search?q=${query}`)
        .then(res=>res.json())
        .then(data=>setEventListing(data))
    },[]);


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

    // console.log(eventListing.length)

    return (
        <>
            <Header/>
            <div className='eventList'>
                {   eventListing.length>0?
                    eventListing.map((list, index) => {
                        return  <Link key={list._id} className='card-link' to={`/eventDetails/${list._id}`} > <ListCard listing={{ ...list, color: assignedColors[index] }}/></Link>
                    }): 
                    <h3>No event found</h3>
                }
            </div>
        </>
    );
};

export default SearchedEvent;