import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AllCourses from '../AllCourse/AllCourses';

import CourseCategory from '../CourseCategory/CourseCategory';


const Course = () => {



    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>

                        <CourseCategory></CourseCategory>
                    </Col>
                    <Col lg='9'>


                        <AllCourses></AllCourses>


                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Course;