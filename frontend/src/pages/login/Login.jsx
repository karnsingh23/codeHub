import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';
const url = import.meta.env.VITE_API_URL

function Login({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const login = async () => {
        if (validate()) {
            try {
                const response = await axios.post(`${url}/api/user/login`, formData);
                localStorage.setItem('token', response.data.token);
                alert('Logged in successfully');
                setIsLoggedIn(true);
                navigate('/');
            } catch (err) {
                alert(err.response?.data?.error || 'Login failed');
            }
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>

            <div className="login-field">
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

            <div className="login-field">
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

            <div className="login-footer">
                <span>Don't have an account? <Link to="/signup">Signup</Link></span>
            </div>

            <div className="login-button">
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default Login;
