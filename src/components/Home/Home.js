import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';

const Home = () => {

    const courseDetails = useLoaderData();

    //console.log(courseDetails);

    return (
        <div>
            <h1 className='bg-primary w-75 m-auto mt-3 rounded text-dark'><b>All Couurses Details  Information</b></h1>
            {
                courseDetails.map((v, index) => <HomeDetails key={index} details={v}></HomeDetails>)
            }
        </div>
    );
};

export default Home;