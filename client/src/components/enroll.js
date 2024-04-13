import React from 'react';
import jwt_decode from 'jwt-decode';

function EnrollButton() { // You can customize the component name
    const handleEnroll = async () => {
        // ... your existing handleEnroll logic ...
    };

    return (
        <button onClick={handleEnroll}>Enroll</button> 
    );
}

export default EnrollButton;
