import React from 'react';

const Blog = () => {
    return (
        <div className=' mr-20 ml-20'>
            <h2 className='text-4xl text-center font-bold relative -top-28'>Blogs</h2>
            <h2 className='font-bold'>1.When should you use Context API?</h2>
            <p>when we need to access data in many components, we can avoid passing the data one by one to the child components. we can send it direct to the component using Context API.</p>
            <h2 className='font-bold '>2. What is a custom hook?</h2>
            <p>It is a react hook which can be used for code reusability. we can set a state of function and send the logic to other components.</p>
            <h2 className='font-bold'>3. What is useRef? </h2>
            <p>It is a react build in hook. it allow us to store a mutable value that does not re-render when updated. </p>
            <h2 className='font-bold'>4. What is useMemo?</h2>
            <p>UseMemo hook can memorize a value from a function which does not need to call the function on every render.</p>
        </div>
    );
};

export default Blog;