import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../All Images/P3OLGJ1 copy 1.png'


const Home = () => {
    return (
        <div className='flex justify-around gap-0 mt-20 pt-10 pl-10 pr-10 bg-gray-100 relative -top-80'>
            <h2 className='text-5xl font-bold pt-10'>One step <br /> closer to your <br /><span className='text-violet-400 text-right'>Path of Life</span> <p className='text-xl font-thin text-slate-500 pt-3'>Consider taking on internships or job shadowing opportunities <br /> to gain practical experience in different fields. <br /> This can help you make informed decisions about your career path.</p> <button className='text-xl'>Get Started</button> </h2>
            
            <img className='h-96' src={person} alt="" />

        </div>
    );
};

export default Home;