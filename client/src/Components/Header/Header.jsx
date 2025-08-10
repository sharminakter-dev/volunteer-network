import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../assets/logos/Group 1329.png';
import './Header.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { signoutUser } from '../Auth/authManager';


const Header = () => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  // console.log(userInfo.user);

  const handleSignOut = ()=>{
    const confirmSignOut = confirm('Are you sure you want to signout?');
    if(confirmSignOut){
      signoutUser()
      .then(res=>setUserInfo(res))
    }
  }

  return (
    <Navbar expand="lg" className='navbar' >
      <Container fluid>
        <Row>
            <Col >
                <Navbar.Brand href="/">
                    <img 
                      src={logo} 
                      width='130' 
                      height='50' 
                      alt="volunteer_logo" 
                    />
                </Navbar.Brand>
            </Col>
        </Row>
        <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Col><Link to='/volunteer' ><Button variant="info">Volunteer</Button> </Link></Col>
            {!userInfo.isLoggedIn &&
              <Col> <Link to="/auth" ><Button variant="primary">Register</Button></Link> </Col>
            }
            <Col><Link to="/admin" ><Button variant="secondary">Admin</Button></Link></Col>
            {userInfo.isLoggedIn &&
              // <Col> <Button variant="danger" onClick={handleSignOut} >Logout</Button> </Col>
              <Col>
                  <Dropdown>
                    <Dropdown.Toggle 
                      className='rounded-circle p-0' 
                      id="dropdown-basic"
                      as="div" 
                      >
                      <img src={userInfo.user?.photoURL} 
                      alt="user" 
                      className='rounded-circle border border-success border-2' 
                      style={{ width: '40px', height: '40px', objectFit: 'cover' }}/> 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to= {`/userProfile/${userInfo.user.uid}`} >your Profile</Dropdown.Item>
                      <Dropdown.Item  as={Link} to='/my-events' >Your Events</Dropdown.Item>
                      <Dropdown.Item as= 'button' onClick={handleSignOut} >sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </Col>
            }
        </Row>

        
      </Container>
    </Navbar>
    );
};

export default Header;