import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllCourse.css'



const AllCoursesDisplay = (props) => {

    console.log(props.details);
    const { id, image, CourseHeader } = props.details;
    return (
        <div>

            <Col className='m-3'>
                <Card>
                    <Card.Img className='imagesize m-auto' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{CourseHeader.slice(0, 80) + '........'}</Card.Title>

                    </Card.Body>
                    <Button variant="outline-danger"><Link className='link-style' to={`/AllCourse/:${id}`}>Course-Details</Link></Button>
                </Card>

            </Col>

        </div>
    );
};

export default AllCoursesDisplay;