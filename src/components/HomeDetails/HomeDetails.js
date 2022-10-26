import React from 'react';
import { Card, Image, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeDetails.css';
import { FaBackward } from "react-icons/fa";

const HomeDetails = (props) => {

    const { id, CourseHeader, CourseTopic, courseBody, image } = props.details;





    const studyStep = CourseTopic.map((v, index) => {

        return <div key={index} className='w-50 m-auto'>
            < ListGroup className=' m-3'>
                <ListGroup.Item>{v}</ListGroup.Item>
            </ListGroup>
        </div>
    })
    return (
        <div className='m-3 w-75 m-auto'>
            <Card className="text-center m-3">

                <Card.Body>
                    <Image className='image' src={image}></Image>
                    <Card.Title>{CourseHeader}</Card.Title>
                    <Card.Text>
                        {courseBody}
                    </Card.Text>

                    <Card.Title>
                        {studyStep}
                    </Card.Title>

                </Card.Body>
                <Card.Footer className="text-muted" ><Link to={`/AllCourse/:${id}`}><Button className='fs-4' variant="outline-danger"> < FaBackward ></FaBackward>  Get premium access</Button></Link></Card.Footer>
            </Card>
        </div>
    );
};

export default HomeDetails;