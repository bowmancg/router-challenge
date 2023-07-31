import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams()

return (
    <>
    <h1>Event</h1>
    <p>{params.id}</p>
    <p><Link to='..' relative='path'>Back</Link></p>
    </>
    );
}

export default EventDetailPage;