import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-hab.onrender.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDelete = id => {
        const url = `https://car-hab.onrender.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted successfully');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div className='d-flex'>
        <div class="sidebar me-4">
        <Link className='anchor' to="/addService">AddService</Link>
        <Link className='anchor' to="/orderList">Order Listed</Link>
        <Link className='anchor' to="/manageService">Manage Orders</Link>
        <Link className='anchor' to="">Contact</Link>
        </div>
        <div style={{"height":"600px"}} className='vr'></div>
        <div>
            <h2>Manage service</h2>
        </div>
    </div>
    );
};

export default ManageServices;