import React from 'react';

function fetchData() {
    const token = localStorage.getItem('authToken'); // Retrieve the stored token
    fetch('http://localhost:3001/api/protected-route', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function MyComponent() {
    return (
        <button onClick={fetchData}>Fetch Data</button>
    );
}

export default MyComponent;
