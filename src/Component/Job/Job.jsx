import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, _id } = job;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl border-2 border-violet-200">
            <img className='h-10 w-24 pt-5 pl-5' src={company_logo} alt="Shoes" />
            <div className="card-body text-slate-500 ">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='flex gap-5 font-bold'>
                <p className='border-2 border-violet-300 p-1 text-violet-400 rounded-lg'>{remote_or_onsite}</p> 
                <p className='border-2 border-violet-300 p-1 text-violet-400 rounded-lg'>{fulltime_or_parttime}</p>
                </div>
                <p><FontAwesomeIcon icon={faLocationDot} /> {location}  <FontAwesomeIcon icon={faSackDollar} /> Salary: {salary}</p>
                <div className="card-actions">
                    <Link to = {`../job/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;