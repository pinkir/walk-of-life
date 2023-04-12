import { getShoppingCart } from "../../utilities/fakedb";

const cartJobsLoader = async() =>{

    const loadedJobs = await fetch('/jobs.json');
    const jobs = await loadedJobs.json();

    const storedCart = getShoppingCart();
    const savedJob = [];
    console.log(storedCart);
    for(const id in storedCart){
        const addedJob = jobs.find(jb => jb._id == id);
        if(addedJob){
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedJob.push(addedJob);
        }
        
    }
    return savedJob;
    
}

export default cartJobsLoader;