import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOG_IN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Signin(props) {

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
                <section className="container my-1">
                    <h2>Login</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="username">Username:</label>
                            <input
                                placeholder="Username"
                                name="username"
                                type="text"
                                id="username"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                id="pwd"
                                onChange={handleChange}
                            />
                        </div>
                        {error ? (
                            <div>
                                <p className="error-text">The provided credentials are incorrect</p>
                            </div>
                        ) : null}
                        <div className="flex-row flex-end">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                        <p>
                            Dont have an account?<br />
                            <span className="line">
                                <a href="./Register">Create an account</a>
                            </span>
                        </p>
                </section>  
            )}
    </>
  );
}

export default Signin;


