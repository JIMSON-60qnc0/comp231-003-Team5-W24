import React, { useState } from 'react';
import './style.css';

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
            const userId = // Get logged-in user ID (you'll need to implement this)
            const response = await fetch('/api/maths/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId })
            });
 
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
