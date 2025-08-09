import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { EventContext, UserContext } from '../../App';
import ListCard from '../ListCard/ListCard';
import UserCard from '../UserCard/UserCard';

const UserEvents = () => {
    const [useEevents, setUserEvents] = useState([]);
    const [userInfo] = useContext(UserContext);
    const [eventData] = useContext(EventContext);
    delete eventData._id;
    // console.log(userInfo, eventData);
    console.log(eventData)

    // useEffect(()=>{
    //     fetch(`http://localhost:3000/users/events?uid=${userInfo.user.uid}`,{
    //         method:'POST',
    //         headers:
    //         {
    //             'Content-Type':'application/json',
    //             Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
    //         },
    //         body:JSON.stringify(eventData)
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data));
    // },[userInfo.user.uid, eventData]);

    // useEffect(()=>{
    //     fetch(`http://localhost:3000/users/events?uid=${userInfo.user.uid}`,{
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json',
    //             Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
    //         }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>setUserEvents(data))
    // },[userInfo.user.uid, eventData]);

     useEffect(()=>{
            fetch('http://localhost:3000/events')
            .then(res=>res.json())
            .then(data=>setUserEvents(data))
        },[]);


    // Helper to shuffle colors
    const shuffleArray = (array) => {
        return [...array].sort(() => 0.5 - Math.random());
    };


    // console.log(useEevents)
    return (
        <div className='w-100 m-0'>
            <Header/>
            <h1 className='text-center'>Your events</h1>
            <div className='d-flex flex-wrap gap-5 mt-5 px-3 border-box justify-content-center '>
                {useEevents.map((event,idx)=><UserCard key={event._id} event={event}/>)}
            </div>
        </div>
    );
};

export default UserEvents;