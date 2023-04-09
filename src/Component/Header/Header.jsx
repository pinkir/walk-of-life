import React from 'react';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h3>WalkOFlife</h3>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/appliedjobs'>Applied Jobs</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    );
};

export default Header;