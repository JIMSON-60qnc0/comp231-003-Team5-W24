import React from 'react';
import { Link } from 'react-router-dom'; // Using React Router for navigation links
import './style.css'; // Make sure this CSS path is correct based on your project structure

function MathsCoursePage() {
    // Placeholder logout function
    const logout = () => {
        console.log("User logged out"); // Implement actual logout logic here
    }

    return (
        <div>
            <header>
                <h1>Maths Course</h1>
                <nav>
                    <Link to="/home">Home</Link> {/* Adjust link based on your routing setup */}
                    <a href="#" onClick={logout}>Logout</a> {/* Implementing logout */}
                </nav>
            </header>

            <main>
                <section className="quizzes">
                    <h2>Quizzes</h2>
                    <ul>
                        <li><Link to="/quiz1">Quiz 1: Algebra Basics</Link></li>
                        <li><Link to="/quiz2">Quiz 2: Geometry Fundamentals</Link></li>
                        {/* Additional quizzes can be linked similarly */}
                    </ul>
                </section>

                <section className="course-contents">
                    <h2>Course Contents</h2>
                    <div className="content">
                        <h3>Chapter 1: Introduction to Algebra</h3>
                        <a href="chapter1.pdf" target="_blank">Download PDF</a>
                        <video controls src="intro_to_algebra.mp4"></video>
                    </div>
                    {/* Additional content sections can be added similarly */}
                </section>
            </main>
            <aside className="leaderboard">
                <h2>Leaderboard</h2>
                <ol>
                    <li>Alice: 95 Points</li>
                    <li>Bob: 90 Points</li>
                    <li>Carol: 85 Points</li>
                    {/* Additional leaderboard entries can be added here */}
                </ol>
            </aside>
        </div>
    );
}

export default MathsCoursePage;
