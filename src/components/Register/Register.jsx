import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const [success, setSuccess] = useState('')
    const [error , setError] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        setSuccess('')
        createUser(email, password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
            form.reset('');
            setError('');
            setSuccess('Your Create Account Success!!')
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })

    }

    return (
        <div className='px-20 my-8'>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="mr-20 w-1/2">
                        <img src={login} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-red-600">Please Registration</h1>
                            <p className='text-2xl text-center font-semibold text-green-600'>{success}</p>
                            <p className='text-2xl text-center font-semibold text-orange-400'>{error}</p>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover font-bold text-red-600">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </form>
                            <p className='text-center mt-5 font-semibold text-orange-500'>Have An Account? <Link to="/login" className='text-lime-700 underline'>Login</Link></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;