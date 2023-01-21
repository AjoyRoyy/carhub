import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>Service Name: {service.name}</h1>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;