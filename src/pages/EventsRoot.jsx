import React from 'react';
import EventsNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router';

const EventsRoot = () => {
return (
    <>
        <EventsNavigation />
        <Outlet />
    </>
    );
}

export default EventsRoot;