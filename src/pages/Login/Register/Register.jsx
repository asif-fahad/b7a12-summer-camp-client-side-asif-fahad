import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../../providers/AuthProviders';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';

const Register = () => {

    useTitle('Register');

    const { user, createUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();

    // console.log(user)

    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = event => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const name = form.name.value;
        const photo = form.photo.value;
        // console.log(email, password, name, photo);

        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                form.reset();
                updateUserData(result.user, name, photo);
                navigate('/')
            })
            .catch(error => {
                // console.log(error);
            })

        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    // console.log('user name updated')
                    const saveUser = { name: name, email: user.email, photo: photo }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                })
                .catch(error => {
                    setError(error.message);
                })
        }

    }

    const handleGoogleLogin = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser)
            })
            .catch(error => {
                // console.log('error', error.message);
            })
    }


    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">Register now!</h1>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <p className='text-red-600'>{error}</p>
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" required />
                                <p className='text-red-600'>{error}</p>
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login now.</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="divider"></div>
                            <div className='text-center'>
                                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                                    G
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;