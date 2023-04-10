import React from 'react';
import './Category.css'

const Category = (props) => {
    const { jobs, category, logo } = props.category;
    return (

        <div className=' bg-slate-50 h-28 w-44 p-5 text-sm    text-slate-500'>
            <img className='h-11 p-2' src={logo} alt="" />
            <h3 className='font-bold'>{category}</h3>
            <p>{jobs} jobs available</p>

        </div>

    );
};

export default Category;