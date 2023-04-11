import React from 'react';

const Job = ({ job }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = job;
    console.log(job)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img className='h-10 w-24 pt-5 pl-5' src={company_logo} alt="Shoes" />
            <div className="card-body text-slate-500 ">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <p>{remote_or_onsite} {fulltime_or_parttime}</p>
                <p>{location} {salary}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;