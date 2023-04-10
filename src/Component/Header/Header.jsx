import React from 'react';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import vector from '../../All Images/Vector.png'

const Header = () => {
    return (
        <nav className=' bg-gray-100'>
            <section className='flex justify-between p-5'>
            <h3 className='text-blue-400 font-bold text-3xl name '>PathOFlife</h3>
            <div className=''>
            <Link className='m-3' to='/'>Home</Link>
            <Link className='m-3' to='/statistics'>Statistics</Link>
            <Link className='m-3' to='/appliedjobs'>Applied Jobs</Link>
            <Link className='m-3' to='/blog'>Blog</Link>
            </div>
            <button>Star Applying</button>
            </section>
            <img className='pt-3' src={vector} alt="" />
        </nav>
    );
};

export default Header;