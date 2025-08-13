import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { EventContext, UserContext } from '../../App';
import ListCard from '../ListCard/ListCard';
import UserCard from '../UserCard/UserCard';

const UserEvents = () => {
    const [userEvents, setUserEvents] = useState([]);
    const [userInfo] = useContext(UserContext);
    const [eventData, setEventData] = useContext(EventContext);

    // console.log(userInfo);
    // console.log(eventData);

    if(eventData?._id) delete eventData._id;


    useEffect(()=>{
        fetch(`http://localhost:3000/users/events?uid=${userInfo.user.uid}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setUserEvents(data)
        })
    },[userInfo.user.uid]);

    useEffect(()=>{
        if(eventData){
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
            .then(data=>{
                setUserEvents(prev=>[...prev,data]);
                setEventData(null)
            });
        }
    },[userInfo.user.uid, eventData]);

    // console.log(eventData);

    return (
        <div className='w-100 m-0'>
            <Header/>
            {userEvents.length?
                <>
                    <h1 className='text-center'>Your events</h1>
                    <div className='d-flex flex-wrap gap-5 mt-5 justify-content-center'>
                        {userEvents.map((event,idx)=>
                            <UserCard 
                                key={event._id} 
                                event={event} 
                                onDelete={()=>setUserEvents(prev=>prev.filter(e=>e._id !== event._id))}
                            />)}
                    </div>
                </>
                :<h3 className=' mt-5 text-center' >You haven't volunteered in any events</h3> }
            
        </div>
    );
};

export default UserEvents;