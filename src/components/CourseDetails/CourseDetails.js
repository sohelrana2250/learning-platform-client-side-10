
import { useLoaderData, Link } from 'react-router-dom';
import './CourseDetails.css'
import { Button, Card, Image, ListGroup } from 'react-bootstrap';
import { FaBackward } from "react-icons/fa";

const CourseDetails = () => {


    const courseDetais = useLoaderData();
    // console.log(courseDetais);
    const { CourseHeader, CourseTopic, courseBody, image } = courseDetais;

    const studyStep = CourseTopic.map((v, index) => {

        return <div key={index} className='w-50 m-auto'>
            < ListGroup className=' m-3'>
                <ListGroup.Item>{v}</ListGroup.Item>
            </ListGroup>
        </div>
    })

    return (
        <div className='w-75 m-auto'>
            <Card className="text-center   m-3">
                <Card.Body>
                    <Image className='image m-auto' src={image}></Image>
                    <Card.Title>{CourseHeader}</Card.Title>
                    <Card.Text>
                        {courseBody}
                    </Card.Text>

                    <Card.Text>
                        {studyStep}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">  <Link to='/courses'><Button className='fs-4' variant="outline-danger"> <FaBackward></FaBackward>  Go To Course-Details-Page</Button></Link>   </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;