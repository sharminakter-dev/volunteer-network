import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllEvents = () => {
    const [userEvents,setUserEvents] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3000/users/allEvents`)
        .then(res=>res.json())
        .then(data=>setUserEvents(data))
    },[]);
    // console.log(userEvents);

    const handleClick = (id)=>{
        fetch(`http://localhost:3000/users/events?eventId=${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            setUserEvents(prev=>prev.filter(event=>event._id!=id))
        })
    }

    return (
        <div >
                <h5 className='text-center p-4' >Volunteer register list</h5> 
                <div className='bg-light p-4 rounded h-100  ' >
                    <Table borderless hover className='mt-4 rounded' >
                        <thead  >
                            <tr  >
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Registering date</th>
                            <th>Volunteering list</th>
                            <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userEvents.map(event=>
                                    <tr className="bg-white" key={event._id} >
                                        <td> {event.user.name} </td>
                                        <td> {event.user.email} </td>
                                        <td> {new Date(event.date).toDateString()} </td>
                                        <td> {event.title} </td>
                                        <td >
                                            <FontAwesomeIcon 
                                              icon={faTrashCan}  
                                              className='bg-danger text-white p-1 rounded' 
                                              onClick={()=>{handleClick(event._id)}}
                                              />
                                        </td>
                                    </tr>

                                )
                            }       
                        </tbody>
                    </Table>
                </div>
            </div>
    );
};

export default AllEvents;