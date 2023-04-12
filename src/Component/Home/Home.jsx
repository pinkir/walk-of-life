import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import person from '../../All Images/P3OLGJ1 copy 1.png'
import Category from '../Category/Category';
import Job from '../Job/Job';


const Home = () => {
    const [categories , setCategories ] = useState([]);
    const jobs = useLoaderData();
    const jobArray = jobs.slice(0, 4);

    // -------
    const [jobsAll, setJobs] = useState(jobArray)
    const handleSeeMore = () =>{
        const moreJobs = jobs;
        console.log(moreJobs) 
        setJobs(moreJobs)
    }




    // ------

    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <section className='flex-col-1 md:flex justify-around gap-0 pl-10 pr-10 bg-gray-100 relative -top-48 '>
                <h2 className='text-5xl font-bold pt-10'>One step <br /> closer to your <br /><span className='text-violet-400 text-right'>Path of Life</span> <p className='text-xl font-thin text-slate-500 pt-3'>Consider taking on internships or job shadowing opportunities <br /> to gain practical experience in different fields. <br /> This can help you make informed decisions about your career path.</p> <button className='text-xl'>Get Started</button> </h2>

                <img className='h-96' src={person} alt="" />

            </section>
            <section>
            <h1 className='text-center text-4xl font-bold mb-3'>Job Category List</h1>
            <p className='text-center  text-slate-500'>Here are the category of jobs where you can find yours!!!</p>
                <div className='flex-col-1 md:flex justify-center gap-5 mt-3'>
                {
                    categories.map(category => <Category 
                        category ={category}
                        key ={category.id}
                        ></Category> )
                }
                </div>
                
            </section>
            <section>
                <h1 className='text-center text-4xl font-bold mt-60'>Featured Jobs</h1>
                <p className='text-center  text-slate-500'>See the job List and apply for the one or more you think you can perform.</p>
                <div className='grid md:grid-cols-2 gap-4 justify-items-center gap-x-0 pt-10'>
                    {
                        jobsAll.map(job => <Job 
                            job = {job}
                            key = {job._id}
                            
                            
                        ></Job>)
                    }
                </div>
                
            </section>
            <div className='ml-48 mb-5'><button onClick={()=>handleSeeMore()} className='ml-0 md:ml-96'>See More</button></div>
            
            
            
        </div>
    );
};

export default Home;