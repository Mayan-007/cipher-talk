import { Card, Form, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Login = ({ styles, handlePage }) => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-image" style={styles.background}>
            <Card style={styles.card}>
                <Card.Body>
                    <Card.Title className="text-center">Login</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={styles.formControl} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={styles.formControl} />
                        </Form.Group>
                        <Button className="w-100 mt-2" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <Row className="mt-3 d-flex justify-content-between">
                        <Col className="text-start me-1">
                            <Link to="/auth" onClick={() => handlePage('register')}>Forgot Password?</Link>
                        </Col>
                        <Col className="text-end me-1">
                            <Link to="/auth" onClick={() => handlePage('register')}>Sign Up</Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
