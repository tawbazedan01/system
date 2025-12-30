import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './login.module.css';
import Logo from '../../assets/logo1.png';

export default function Login() {
    return (
        <div className={style.background}>
            <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                
                {/* اللوجو */}
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className={style.logo} 
                />

                {/* الفورم */}
                <Row className="w-100 justify-content-center mt-3">
                    <Col md={4}>
                        <Form className={style.loginBox}>
                            <h4 className="text-center mb-4">Login to your account</h4>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success" type="submit" className="w-100 mb-3">
                                Login now
                            </Button>

                            {/* Sign up */}
                            <div className="d-flex justify-content-center align-items-center">
                                <p className="mb-0">Don't have an account?</p>
                                <span className={`${style.signUP} ms-2`}>Sign up</span>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
