import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
// import CardHeader from 'react-bootstrap/esm/CardHeader';
import './Blog.css'

const Blog = () => {
    return (

        <div className='accordian-handel'>
            <Card className="text-center card-blog-section">
                <Card.Header className='fs-3'>Question Answer Section</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.

                                        <Card.Text>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.</Card.Text>


                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> what is cors?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                                        <Card.Text>Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources.Run the server with npm nodemon . Navigate to http://localhost:6069/ingredients on your browser. You will be served with these ingredients text items. In this example, cross-origin is allowed because you're currently on the same domain, and you are executing this request from the same domain.</Card.Text>
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>


                                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                                        <Card.Text>
                                            1. On this page.
                                            2.  Add and initialize the 3. Authentication SDK.
                                            3. Prototype and test with Firebase Local Emulator Suite.
                                            4.  Sign up new users.
                                            5.   Sign in existing users.
                                            6.   Set an authentication state observer and get user data.
                                            7. Next steps.

                                            Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
                                        </Card.Text>
                                    </Card.Text>




                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How does the private route work?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.

                                        useRef returns a mutable ref object whose .current property is initialized to the passed argument  initialValue. The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                                        useRef can be used to store local mutable value in a component. It doesn't participate in rerendering (unline state data). useMemo is used to memoize (like we do in Dynamic Programming, concept wise) and skip recalculation.
                                    </Card.Text>




                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>




                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">.....</Card.Footer>
            </Card>

        </div>
    );
};

export default Blog;