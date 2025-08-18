import React, { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserProfile = () => {
    const [userInfo] = useContext(UserContext);

    return (
        <div className='d-flex flex-column justify-content-center '>
            <Header></Header>
            <Card style={{ width: '18rem' }} className='m-auto border-0' >
                <Card.Img variant="top" src={userInfo.user.photoURL} className='border border-secondary border-2' />
                <Card.Body>
                    <small>UID:{userInfo.user.uid}</small>
                    <Card.Title>{userInfo.user.name}</Card.Title>
                    <Card.Text>
                        {userInfo.user.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfile;
