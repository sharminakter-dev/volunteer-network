import React from 'react';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import EventsListings from '../EventListings/EventListings';
import background from '../../assets/logos/Background.jpg'

const Home = () => {
    return (
        <div style={{
            backgroundImage:`linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)), url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition: 'center',
            width:'100%',
            height: '60vh',
            margin: '0'
        }}
        >
            <Header/>
            <HeroSection/>
            <EventsListings/>
        </div>
    );
};

export default Home;