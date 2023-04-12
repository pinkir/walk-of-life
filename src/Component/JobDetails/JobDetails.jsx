import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar, faCalendar, faPhone, faMailReply } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'

const JobDetails = () => {
    const [state, setState] = useState([])
    const details = useLoaderData();
    // console.log(details);

    // ///

    const [cart, setCart] = useState([]);
    // /////


    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        if (details) {
            const detailsData = details.find(dt => dt._id == id);
            setState(detailsData)
        }

    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedJob =[];
        for (const id in storedCart) {
            const addedJob = details.find(dt => dt._id == id)
            if (addedJob) {
                const quantity = storedCart[id];
                addedJob.quantity = quantity;
                savedJob.push(addedJob);
            }
            console.log(savedJob)


        }
        setCart(savedJob)
    }, [details])


    const handleAddToCart = (_id) => {
        const newCart = [...cart, state]
        setCart(newCart);
        addToDb(state._id)
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold relative -top-28'>Job Details</h1>
            <div className='grid md:grid-cols-2 gap-4 p-20'>
                <div>
                    <h3 className='font-bold'>Job Description: <p className='font-thin'>{state.job_description}</p></h3>
                    <h3 className='font-bold'>Job Responsibility: <p className='font-thin'>{state.job_responsibility}</p></h3>
                    <h3 className='font-bold'>Educational Requirements: <p className='font-thin'>{state.educational_requirements}</p> </h3>
                    <h3 className='font-bold'>Experiences:<p className='font-thin'>{state.experiences}</p></h3>
                </div>
                <div className='bg-violet-100 p-5'>
                    <h3 className='font-bold'>Job Details:</h3>
                    <hr />
                    <p><FontAwesomeIcon icon={faSackDollar} /> Salary: {state.salary}</p>
                    <p><FontAwesomeIcon icon={faCalendar} /> Job Title: {state.job_title}</p>
                    <h3 className='font-bold pt-5'>Contact Information:</h3>
                    <hr />
                    <p><FontAwesomeIcon icon={faPhone} /> Phone: {state.phone}</p>
                    <p><FontAwesomeIcon icon={faMailReply} /> Email: {state.email}</p>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Address: {state.location}</p>
                    <button onClick={() => handleAddToCart()} className='mt-5'>APPLY NOW</button>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;