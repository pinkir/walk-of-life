import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const Review = ({ job }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, _id } = job;
    return (
        <div className='flex h-36 w-3/5 border-2 rounded justify-center items-center mx-auto m-5 p-5'>
            
            <img className='h-10 w-24 pt-5 pl-5' src={company_logo} alt="Shoes" />
            <div className="card-body text-slate-500 ">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='flex gap-1 font-light'>
                    <p className='border-1 border-violet-300 p-1 text-violet-700 rounded-lg'>{remote_or_onsite}</p>
                    <p className='border-1 border-violet-300 p-1 text-violet-700 rounded-lg'>{fulltime_or_parttime}</p>
                </div>
                <p className='text-xs'><FontAwesomeIcon icon={faLocationDot} /> {location}  <FontAwesomeIcon icon={faSackDollar} /> Salary: {salary}</p>
                
            </div>
            <div className="my-auto">
                <button className="btn btn-primary">View Details</button>
            </div>
         
        </div>
    );
};

export default Review;