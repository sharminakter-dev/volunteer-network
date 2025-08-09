import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../assets/logos/Group 1329.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AllEvents from '../AllEvents/AllEvents';
import AddEvent from '../AddEvent/AddEvent';

const Admin = () => {
    const [isRegisterList,setIsRegisterList] = useState(true);
    const [isAddEvent, setIsAddEvent] = useState(false)

    const handleRegisterList = ()=>{
        setIsAddEvent(false);
        setIsRegisterList(true)
    }

    const handleAddEvent =()=>{
        setIsAddEvent (true)
        setIsRegisterList(false);
    }


    return (
        <Row className='bg-white h-100 w-100 p-4'  >
            <Col md={3} className='pt-4' >
                <Link to='/home' > <img src={logo} alt="logo" width={'150px'} className='mb-5' /> </Link>
                <div 
                    style={{ cursor: 'pointer' }}
                    className={`d-flex mb-3 ${isRegisterList?'text-primary':'text-black'}`}
                    onClick={handleRegisterList} >
                    <FontAwesomeIcon icon={faUserGroup} className='mx-3 pt-1' />
                    <p >Volunteer register list</p>
                </div>
                <div 
                  style={{ cursor: 'pointer' }}
                  className={`d-flex mb-3 ${isAddEvent?'text-primary':'text-black'}`} 
                  onClick={handleAddEvent}>
                    <FontAwesomeIcon icon={faPlus}  className='mx-3 pt-1' />
                    <p>Add event</p>
                </div>
            </Col>
            <Col md={9} >
            {
                isRegisterList && <AllEvents/>
            }
            {
                isAddEvent && <AddEvent/>
            }
            </Col>
        </Row>
    );
};

export default Admin;
