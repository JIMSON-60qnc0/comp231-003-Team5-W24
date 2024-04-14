import React, { useState } from 'react';
import './style.css';
import EnrollButton from '../enroll';
import { jwtDecode } from 'jwt-decode';


// Home page component

function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.trim());  // Trim whitespace for cleaner search matching
    };

    const handleLogout = () => {
        console.log("User logged out");
        // Implement actual logout logic here, such as clearing user data or redirecting
    };

    const handleEnroll = async () => {
        try {
            // Retrieve the JWT token from localStorage
            const token = localStorage.getItem('authToken');
            
            // Check if the token exists
            if (!token) {
                console.error('User is not logged in.');
                return;
            }
    
            // Decode the JWT token to get the user ID
            const decoded = jwtDecode(token);
            const userId = decoded.id;
    
            // Make a POST request to enroll the user
            const response = await fetch('/api/maths/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId })
            });
    
            // Check the response from the server
            if (response.ok) {
                console.log('Enrollment successful!');
            } else {
                console.error('Enrollment failed:', await response.text());
            }
        } catch (error) {
            console.error('Error during enrollment:', error);
        }
    };

    // Function to decide what to display based on search query
    const displayCourses = () => {
        if (!searchQuery) {
            // If there is no search query, display all courses
            return (
                <div className="course">
                    <h3>Maths</h3>
                    <button onClick={handleEnroll}>Enroll Now</button>
                </div>
            );
        } else if (searchQuery.toLowerCase() === "maths") {
            // If the search query matches "maths"
            return (
                <div className="course">
                    <h3>Maths</h3>
                    <button onClick={handleEnroll}>Enroll Now</button>
                </div>
            );
        } else {
            // If the search query does not match any course
            return <div>No match found. Not Available Right Now.</div>;
        }
    };

    return (
        <div>
            <header>
                <div className="top-bar">
                    <input 
                        type="search" 
                        placeholder="Search courses..." 
                        id="courseSearch"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </header>
            
            <main>
                <section className="welcome-section">
                    <h1>Welcome to Our E-Learning Platform!</h1>
                </section>

                <section className="course-offering">
                    <h2>Available Courses</h2>
                    {displayCourses()}
                </section>
            </main>
        </div>
    );
}

export default HomePage;
