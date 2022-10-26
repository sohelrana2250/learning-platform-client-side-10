import React, { useContext } from 'react';
import { FaAngellist } from "react-icons/fa";
import icon from '../../Images/icon.jfif'
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Header = () => {


    const { user, logOut } = useContext(AuthContext);

    // console.log(user?.photoURL);
    // console.log(user?.displayName);

    const handelLogOut = () => {

        logOut().then(() => { }).catch((error) => { })
    }


    const notify = () => toast(user?.displayName);


    const handelDarkLightMode = () => {




    }



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
                            <Nav.Link>  FAQ</Nav.Link>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>


                        </Nav>
                        <Nav>
                            {user?.uid ? <>

                                <div>
                                    <spam className='text-danger mb-3'>{user.displayName}</spam>
                                    <Image onMouseOver={notify} className='icon m-3' src={user?.photoURL} alt="" />
                                    <Toaster />
                                    <Button variant="outline-danger" onClick={handelLogOut}>Log-Out</Button>
                                </div>

                            </> : <>
                                <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                                <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                            </>}

                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="outline-primary" onClick={handelDarkLightMode}>  dark/Light</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;