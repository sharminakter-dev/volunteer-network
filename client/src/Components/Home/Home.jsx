import React from 'react';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import EventsListing from '../EventsListing/EventsListing';

const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <EventsListing/>
        </div>
    );
};

export default Home;