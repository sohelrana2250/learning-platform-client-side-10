import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {

    const [error, setError] = useState(null);
    const { SingInUser } = useContext(AuthContext);
    const [login, setLogain] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state?.from?.pathname || "/";

    const handelLoginSubmit = (event) => {

        const element = event.target;
        const email = element.email.value;
        const password = element.password.value;

        // console.log(email, password);
        event.preventDefault();
        SingInUser(email, password).then((result) => {

            const user = result.user;
            console.log(user);
            setLogain(true);
            setError('');
            navigate(form, { replace: true });
            element.reset();
        }).catch((error) => {

            setError(error.message);
        })



    }
    return (
        <div className='w-50 m-auto'>
            <Form onSubmit={handelLoginSubmit} className='m-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>Please Register Your Account Info <Link to='/register'>Register</Link></p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Text className='fs-3 text-success'> {login ? 'Successfuly-Login' : ''}</Form.Text>

                <Form.Text className='text-danger fs-2'>{error}</Form.Text>
            </Form>


        </div>
    );
};

export default Login;