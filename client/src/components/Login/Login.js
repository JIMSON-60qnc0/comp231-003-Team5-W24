import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css'; 

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

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
                navigate('/home'); // Redirect to the homepage or dashboard after login
            } else {
                console.error('Login failed:', data.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="container">
           
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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

                <p>
                Don't have an account? <Link to="/registration">Sign up</Link>
            </p>
            </form>
           
        </div>
    );
}

export default Login;
