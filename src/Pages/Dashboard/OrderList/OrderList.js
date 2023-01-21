import React from 'react';
import { Link } from 'react-router-dom';

const OrderList = () => {
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
                <h2>Order list</h2>
            </div>
        </div>
    );
};

export default OrderList;