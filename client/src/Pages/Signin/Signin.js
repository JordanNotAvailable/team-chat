import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { LOG_IN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Signin(props) {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [success, setSuccess] = useState(false);
    
    const [login, { error }] = useMutation(LOG_IN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
            setSuccess(true);
            navigate('/home');
        } catch (e) {
            console.log(e);
        }
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }; 
    
    return (
    <>
        {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/home">Home</a>
                    </p>
                </section>
            ) : (
                <section className="rounded-sm my-1 bg-[#1e1b4b]">
                    <h2 className='text-white w-full text-center'>Login</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="">
                            <label htmlFor="username" className='w-full text-white'>Username:</label>
                            <input
                                placeholder="Username"
                                name="username"
                                type="text"
                                className="w-full rounded-sm"
                                id="username"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="pwd" className='w-full text-white'>Password:</label>
                            <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                className="w-full rounded-sm"
                                id="pwd"
                                onChange={handleChange}
                            />
                        </div>
                        {error ? (
                            <div>
                                <p className="error-text">The provided credentials are incorrect</p>
                            </div>
                        ) : null}
                    
                        <button  type="submit" className="px-4 py-2 mt-6 hover:bg-blue-600 bg-blue-500 text-white rounded">
                            Sign In
                        </button>
                    </form>
                        <p className='text-white'>
                            Dont have an account?<br />
                            <span className="line text-sm" style={{fontSize : '16px'}}>
                                <a href="./Register">Create an account</a>
                            </span>
                        </p>
                </section>  
            )}
    </>
  );
}

export default Signin;


