import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
const url = import.meta.env.VITE_API_URL

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const register = async () => {
        if (validate()) {
            try {
                const response = await axios.post(`${url}/api/user/signup`, formData);
                alert(response.data.message || 'Account created successfully');
            } catch (err) {
                alert(err.response?.data?.error || 'Signup failed');
            }
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>

            <div className="signup-field">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                />
                {errors.name && <small className="error">{errors.name}</small>}
            </div>

            <div className="signup-field">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                />
                {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="signup-field">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter your password"
                />
                {errors.password && <small className="error">{errors.password}</small>}
            </div>

            <div className="signup-footer">
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </div>

            <div className="signup-button">
                <button onClick={register}>Signup</button>
            </div>
        </div>
    );
}

export default Signup;
