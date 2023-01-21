import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='registration-page d-flex justify-content-center align-items-center'>
            <div className='registration-box rounded shadow'>
            <h2 className='text-center mt-3'><span className='text-warning'>Registration</span> Page</h2>
                <div className='m-5'>
                    {/* Email & password */}
                    <div className='form-floating mb-3'>
                        <input type="email" className='form-control' id='floatingInput' placeholder='Your Email'  />
                        <label htmlFor="flotingInput">Email Address</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className='form-control' id='floatingInput' placeholder='Your Password'  />
                        <label htmlFor="flotingInput">Password</label>
                    </div>
                    
                    <button type="submit" className="btn btn-warning w-100 rounded">Register</button>
                    
                            {/* {user?.email && <Alert severity="success">registration successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>} */}
                    <br />
                    <br />
                    <Link to='/login' className="btn btn-white w-100 rounded">Already Registerd? <span className='text-primary'>Please Login</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Register;