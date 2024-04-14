import React, { useState } from 'react';
import './style.css'; 

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student' // Default to 'student'
    });

    const [error, setError] = useState(null); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            const data = await response.json();
    
            if (!response.ok) { // Check for error status codes
                throw new Error(data.error || 'Something went wrong'); // Extract error from response
            }
    
            console.log('Registration successful:', data);
            // Handle success, e.g. display a success message or redirect to another page
            alert('Registration successful');
        } catch (error) {
            console.error('Error during registration:', error);
            setError(error.message); // Set the error message
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <select name="role" value={formData.role} onChange={handleChange}>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;