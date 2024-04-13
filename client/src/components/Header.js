// client/src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <input type="search" placeholder="Search courses..." id="courseSearch" />
                <button>Logout</button> 
            </div>
        </header>
    );
};

export default Header;
