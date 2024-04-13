import React from 'react';
import './style.css'; // Ensure this path is correct based on your project structure

function RegistrationPage() {
    return (
        <div className="container">
            <h1>Registration</h1>
            <form action="#">  
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <fieldset>
                    <legend>Role:</legend>
                    <label htmlFor="student">Student</label>
                    <input type="radio" id="student" name="role" value="student" required />

                    <label htmlFor="instructor">Instructor</label>
                    <input type="radio" id="instructor" name="role" value="instructor" required />
                </fieldset>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
