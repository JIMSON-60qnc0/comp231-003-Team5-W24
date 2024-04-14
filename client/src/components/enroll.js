import React from 'react';
import { jwtDecode } from 'jwt-decode';


function EnrollButton() {
    const handleEnroll = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                // Handle case where the user is not logged in (prompt login, etc.)
                console.log('Please log in to enroll.'); // Example error handling
                return;  
            }

            const decoded = jwtDecode(token);
            const userId = decoded.id;

            const response = await fetch('/api/maths/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    return (
        <button onClick={handleEnroll}>Enroll</button> 
    );
}

export default EnrollButton;
