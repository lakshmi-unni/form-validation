import React from 'react';
import { useState, useEffect } from "react";
import './Signup.css';
import MapleLogo from '../assets/maple.png'

const Signup = () => {
    // State variables for form data and errors
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);



    // Handle form input change

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    // Validate the form fields
    const validate = () => {
        const errors = {};
        if (!username) {
            errors.username = 'Name is required!';
        } else if (!/^[a-zA-Z]{4,20}$/.test(username)) {
            errors.username = 'Name must be between 4 and 20 characters and contain only letters.';
        }

        if (!email) {
            errors.email = 'Email is required!';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
            errors.email = 'This is not a valid email format!';
        }

        if (!password) {
            errors.password = 'Password is required!';
        } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/.test(password)) {
            errors.password =
                'Password must contain at least one uppercase letter, one symbol (!@#$%^&*), and one number.';
        }

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);
        setIsSubmit(true);

        if (Object.keys(errors).length === 0) {
            // Form submission logic here 
            console.log('Form data:', { username, email, password });
        }
    };



    return (
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit && (
                // <div className="ui message success">Signed in successfully</div>
                alert("Signed in successfully")
            )}

            <div className="content">

                <div className="first-column">
                    <div className="logo-container">
                        <img src={MapleLogo} alt="Logo" className="logo" />

                    </div>

                    <h2 className="title title-first">Welcome back!</h2>
                    <p className="description description-first">To keep connected with us please </p>
                    <p className="description description-first">login with your personal info</p>
                    <button id="signin" className="btn btn-first">Sign in</button>
                </div>

                <div className="second-column">
                    <h2 className="title title-second">Create Account</h2>

                    <div className="social-media">
                        <ul className="list-social-media">
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-facebook-f"></i>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fab fa-google-plus-g"></i>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </li>
                            </a>
                        </ul>
                    </div>

                    <p className="description description-second">Or use your email for registration:</p>
                    {/* form */}
                    <form className="form" onSubmit={handleSubmit}>
                        <label className="label-input">
                            <i className="far fa-user icon-input"></i>
                            <input type="text"
                                placeholder="Name"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                id="usernameInput"
                            />
                        </label>
                        {formErrors.username && <span>{formErrors.username}</span>}
                        <label className="label-input">
                            <i className="far fa-envelope icon-input"></i>
                            <input type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleChange}
                                id="emailInput"

                            />
                        </label>
                        {formErrors.email && <span>{formErrors.email}</span>}
                        <label className="label-input">
                            <i className="fas fa-lock icon-input"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                id="passwordInput"
                            />
                        </label>
                        {formErrors.password && <span>{formErrors.password}</span>}

                        <button className="btn btn-second">Sign up</button>

                    </form>
                    {/* form ends */}

                </div>

            </div>


        </div>
    );
}

export default Signup;
