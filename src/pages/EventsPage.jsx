import React from 'react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
    const events = [
        { id: 'e1', title: 'Event 1' },
        { id: 'e2', title: 'Event 2' },
        { id: 'e3', title: 'Event 3' }

    ]
return (
    <>
      <h1>Events Page</h1>  
      <ul>
        {events.map((e) => (
            <li key={e.id}>
                <Link to={e.id}>{e.title}</Link>
            </li>
        ))}
      </ul>
    </>
    );
}

export default EventsPage;