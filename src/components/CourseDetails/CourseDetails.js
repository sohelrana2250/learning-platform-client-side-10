

import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


import './CourseDetails.css'


const CourseDetails = () => {








    const { info } = useContext(AuthContext);
    console.log(info);






    return (
        <div className='m-3'>


            <h1>sohel</h1>


        </div>
    );
};

export default CourseDetails;