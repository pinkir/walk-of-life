import React from 'react';
import JobDetails from '../JobDetails/JobDetails';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const AppliedJobs = () => {
    const jobCart = useLoaderData();
    console.log(jobCart)
    return (
        <div>
            {
                jobCart.map(job => <Review
                key = {job._id}
                job = {job}
                ></Review>)
            }
            
            
        </div>
    );
};

export default AppliedJobs;