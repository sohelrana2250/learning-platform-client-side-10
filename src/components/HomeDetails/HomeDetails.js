import React from 'react';
import { Card, Image, ListGroup, Button } from 'react-bootstrap';
import './HomeDetails.css';

const HomeDetails = (props) => {

    const { CourseHeader, CourseTopic, courseBody, image } = props.details;





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
                <Card.Footer className="text-muted" ><Button variant="outline-danger">Subscribtion</Button></Card.Footer>
            </Card>
        </div>
    );
};

export default HomeDetails;