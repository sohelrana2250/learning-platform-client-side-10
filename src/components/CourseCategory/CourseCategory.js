import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseCategory.css';


const CourseCategory = () => {

    const [course, setCourse] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('https://b610-lerning-platform-server-side-one.vercel.app/CourseInfo').then((res) => res.json()).then((data) => {

            setCourse(data);
        }).catch((error) => {
            setError(error.message);
        })


    }, [])

    console.log(error);
    console.log(course);


    return (
        <div>
            <Button className='mt-3 fs-3 mb-3' variant="outline-danger">Course-Category</Button>
            {
                course.map((v, index) => <p key={index}>
                    <Link className='category' to={`/courseDetails/:${v.id}`}><b>{v.CourseName}</b></Link>
                </p>)





            }
        </div >
    );
};

export default CourseCategory;