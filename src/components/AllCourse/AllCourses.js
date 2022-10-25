

import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import AllCoursesDisplay from './AllCoursesDisplay';

const AllCourses = () => {

    const [courseDetails, setCourseDetails] = useState([]);


    useEffect(() => {

        fetch('https://b610-lerning-platform-server-side-one.vercel.app/CourseDetails').then((res) => res.json()).then((data) => setCourseDetails(data)).catch((error) => console.error(error.message));

    }, [])

    console.log(courseDetails);


    return (
        <div>

            <Button className='fs-2 m-3' variant="outline-danger"><b>All -Courses -Details</b></Button>
            <Row xs={12} lg={3} md={2}>
                {
                    courseDetails.map((v, index) => <AllCoursesDisplay key={index} details={v}></AllCoursesDisplay>)
                }
            </Row>

        </div>
    );
};

export default AllCourses;