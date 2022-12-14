
import { useLoaderData, Link } from 'react-router-dom';
import { Card, Image, ListGroup, Button } from 'react-bootstrap';
import { FaBackward } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { useRef } from 'react';



const DynamicAllCourseData = () => {


    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const dynamicDetails = useLoaderData();
    //console.log(dynamicDetails);

    const { CourseHeader, CourseTopic, courseBody, image } = dynamicDetails;

    const studyStep = CourseTopic.map((v, index) => {

        return <div key={index} className='w-50 m-auto'>
            < ListGroup className=' m-3'>
                <ListGroup.Item>{v}</ListGroup.Item>
            </ListGroup>


        </div>
    })
    //https://codeat21.com/how-to-printing-and-download-pdf-file-in-react-with-react-to-print/
    return (
        <div className='w-75 m-auto'>
            <Card className="text-center   m-3">
                <Card.Header><Button onClick={handlePrint}>DownLode-PDF</Button></Card.Header>
                <Card.Body ref={componentRef}>
                    <Image className='image m-auto' src={image}></Image>
                    <Card.Title>{CourseHeader}</Card.Title>
                    <Card.Text>
                        {courseBody}
                    </Card.Text>

                    <Card.Text>
                        {studyStep}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">  <Link to='/'><Button className='fs-4' variant="outline-danger"> <FaBackward></FaBackward>  Go To Font Page</Button>

                </Link>   </Card.Footer>
            </Card>
        </div>
    );
};

export default DynamicAllCourseData;