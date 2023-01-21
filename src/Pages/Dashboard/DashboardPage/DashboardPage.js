import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom/cjs/react-router-dom.min';
import AddServices from '../AddServices/AddServices';
import ManageServices from '../ManageServices/ManageServices';
import './DashboardPage.css'
const DashboardPage = () => {
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
                <h2>Add service</h2>
            </div>
        </div>
    );
};

export default DashboardPage;