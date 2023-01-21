import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login-page d-flex justify-content-center align-items-center'>
            <div className='login-box rounded shadow'>
            <h2 className='text-center mt-3'><span className='text-warning'>Login</span> Page</h2>
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
                    
                    <button type="submit" className="btn btn-warning w-100 rounded">Login</button>
                    
                            {/* {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>} */}
                    <br />
                    <br />
                    {/* google sign in */}
                    <button onClick={ ()=> signInUsingGoogle() } className="btn btn-lg btn-google w-100 shadow btn-block btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Google Sign-in</button>
                    <br />
                    <br />
                    <Link to='/register' className="btn btn-white w-100 rounded">New User? <span className='text-primary'>Please Register First</span> </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;