import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { EventContext, UserContext } from '../../App';
import ListCard from '../ListCard/ListCard';
import './UserEvents.css'

const UserEvents = () => {
    const [events, setEvents] = useState([]);
    const [userInfo] = useContext(UserContext);
    const [eventData] = useContext(EventContext);
    delete eventData._id;
    // console.log(userInfo, eventData);

    useEffect(()=>{
        fetch(`http://localhost:3000/users/events?uid=${userInfo.user.uid}`,{
            method:'POST',
            headers:
            {
                'Content-Type':'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    },[userInfo.user.uid, eventData]);

    useEffect(()=>{
        fetch(`http://localhost:3000/users/events?uid=${userInfo.user.uid}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[userInfo.user.uid, eventData]);


    // Helper to shuffle colors
    const shuffleArray = (array) => {
        return [...array].sort(() => 0.5 - Math.random());
    };

    const cardColors = ['#3F90FC', '#FFBD3E', '#421FCF', '#FF7044'];
    const cardsPerRow = 4;

    // Prepare full color list for all cards
    const assignedColors = [];
    const totalCards = events.length;

    for (let i = 0; i <totalCards; i += cardsPerRow) {
        const shuffled = shuffleArray(cardColors);
        assignedColors.push(...shuffled.slice(0, Math.min(cardsPerRow, totalCards - i)));
    }

    console.log(events)
    return (
        <div className='w-100 m-0'>
            <Header/>
            <h1 className='text-center'>Your events</h1>
            <div className='d-flex flex-wrap gap-5 mt-5 px-3 border-box justify-content-center '>
                {events.map((event,idx)=><ListCard key={event._id} listing={{...event,color: assignedColors[idx] }}/>)}
            </div>
        </div>
    );
};

export default UserEvents;