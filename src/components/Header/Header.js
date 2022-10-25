import React from 'react';
import { FaAngellist } from "react-icons/fa";
import icon from '../../Images/icon.jfif'
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image className='icon m-3' src={icon} alt="" />
                    <Navbar.Brand href="#home"><Button>kahoot-Eduction-Zone <FaAngellist className='fs-2'></FaAngellist></Button></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link to='/'>Home</Link>   </Nav.Link>
                            <Nav.Link> <Link to='/courses'> Courses</Link>  </Nav.Link>
                            <Nav.Link> FAQ</Nav.Link>
                            <Nav.Link> Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Theme
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;