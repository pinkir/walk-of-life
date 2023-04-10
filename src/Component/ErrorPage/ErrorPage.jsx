import React from 'react';
import error from '../../All Images/404-error.png'

const ErrorPage = () => {
    return (
        <div className='bg-white relative -top-60 pb-28'>
            <img className='h-64 m-auto relative top-28 ' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;