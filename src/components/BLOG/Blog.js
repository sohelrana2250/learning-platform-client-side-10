import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
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
                                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

                                        1. Context API is introduced in React 16.3. The Context API is used to share the data with multiple components, without having to pass data through props manually. The React Context API allows us to produce the global data and share it across the application.

                                        2.What is context in React? React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it usually you are only able to pass data from parent to child via props.

                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.

                                        useRef returns a mutable ref object whose .current property is initialized to the passed argument  initialValue. The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                                        useRef can be used to store local mutable value in a component. It doesn't participate in rerendering (unline state data). useMemo is used to memoize (like we do in Dynamic Programming, concept wise) and skip recalculation.
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