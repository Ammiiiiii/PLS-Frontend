import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Premier League Social</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
