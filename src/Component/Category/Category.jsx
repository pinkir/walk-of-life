import React from 'react';
import './Category.css'

const Category = (props) => {
    const { jobs, category, logo } = props.category;
    return (

        <div className=' bg-slate-50 h-32 w-48 p-5 text-sm mb-3   text-slate-500'>
            <img className='h-14 p-2' src={logo} alt="" />
            <h3 className='font-bold'>{category}</h3>
            <p>{jobs} jobs available</p>

        </div>

    );
};

export default Category;