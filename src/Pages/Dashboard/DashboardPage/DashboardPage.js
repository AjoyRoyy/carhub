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
            <Link className='anchor' to="/addServices">AddService</Link>
            <Link className='anchor' to="/orderListed">Order Listed</Link>
            <Link className='anchor' to="/manageServices">Manage Orders</Link>
            <Link className='anchor' to="">Contact</Link>
            </div>
            <div style={{"height":"600px"}} className='vr'></div>
            <div>
                <Router>
                    <Route path="/addServices">
                        <AddServices/>
                    </Route>
                    <Route path="/manageServices">
                        <ManageServices/>
                    </Route>
                </Router>
            </div>
        </div>
    );
};

export default DashboardPage;