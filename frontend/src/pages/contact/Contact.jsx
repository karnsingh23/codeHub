import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.message) errors.message = 'Message is required';

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            axios.post('http://127.0.0.1:3000/api/user/contact', {
                name: formData.name,
                email: formData.email,
                message: formData.message
            })
            .then(() => {
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            })
            .catch((err) => {
                alert('Error sending message: ' + err.message);
            });
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="contact-field">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                    />
                    {errors.name && <small className="error">{errors.name}</small>}
                </div>
                <div className="contact-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                    />
                    {errors.email && <small className="error">{errors.email}</small>}
                </div>
                <div className="contact-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message"
                    ></textarea>
                    {errors.message && <small className="error">{errors.message}</small>}
                </div>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
