import React from 'react';
import JobDetails from '../JobDetails/JobDetails';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const AppliedJobs = () => {
    const jobCart = useLoaderData();
    console.log(jobCart)
    return (
        <div className=''>
            <h1 className='text-4xl text-center font-bold relative -top-28'>Applied Jobs</h1>
            <div className=" ml-14 dropdown dropdown-right">
                <label tabIndex={0} className="btn m-1 bg-purple-300 text-black">Filter</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                    <li><a>Onsite</a></li>
                    <li><a>Full-time</a></li>
                </ul>
            </div>
            {
                jobCart.map(job => <Review
                    key={job._id}
                    job={job}
                ></Review>)
            }


        </div>
    );
};

export default AppliedJobs;