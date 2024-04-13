import React, { useState } from 'react';
import './style.css'; 

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                console.log('Login successful!'); 
                // Optionally redirect to a logged-in area of your app
            } else {
                console.error('Login failed:', data.error); // Assuming your backend sends an 'error' property on failure
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>   // Call handleSubmit on form submit
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
