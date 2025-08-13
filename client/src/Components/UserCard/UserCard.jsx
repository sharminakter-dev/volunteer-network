import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../../App';

const UserCard = ({event, onDelete}) => {
    const [userInfo] = useContext(UserContext);
    // console.log(event)
    const formattedDate = new Date(event.date).toLocaleString('en-Us', {day:'2-digit', month: 'short', year:'numeric' });

    const handleClick = ()=>{
        fetch(`/users/events/${event._id}?uid=${userInfo.user.uid}`,{
            method:'DELETE',
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>onDelete())
    }

    return (
            <Card style={{height:'200px', width:'460px'}} className='d-flex  flex-row' >
            
                <div className='m-auto'>
                    <img src={event.image.url} alt={event.image.fileName} width={'200px'} height={'150px'} className='rounded' style={{marginLeft: '20px'}} />
                </div>
                <Card.Body style={{width:'150px'}}>
                    
                    <Card.Title> {event.title} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> {formattedDate} </Card.Subtitle>
                </Card.Body>
                <Button 
                  variant="secondary" 
                  className='h-25' 
                  style={{margin:'120px 20px 0 0'}} 
                  onClick={handleClick}
                >
                    Cancel
                </Button>
            </Card>
    );
};

export default UserCard;