import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../hooks/useTitle';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    useTitle('Login')

    const showPassword = () => {
        setShow(!show);
    };

    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate()
    // console.log('login page Location', location)
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()

        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log(error)
                setError('Email or Password is incorrect');
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser)
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log('error', error.message);
            })
    }

    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex'>
                                    <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                    <button
                                        type="button"
                                        onClick={showPassword}
                                        className="-ml-8"
                                    >
                                        {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </button>
                                </div>
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Don't have a account? Register now.</Link>
                                </label>
                                <p className='text-red-500'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="divider"></div>
                            <div className='text-center'>
                                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                                    <FaGoogle></FaGoogle>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;