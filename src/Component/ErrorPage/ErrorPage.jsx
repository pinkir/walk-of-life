import React from 'react';
import error from '../../All Images/404-error.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mt-36'>
            <img className='h-64 m-auto ' src={error} alt="" />
            <Link to='/'><h3 className='text-center mt-5  text-xl'>Back to Home</h3></Link>
        </div>
        

    );
};

export default ErrorPage;