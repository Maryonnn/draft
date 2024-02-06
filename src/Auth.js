import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { useState } from 'react';
import './App.css';
import { 
    Card, 
    Form, 
    FloatingLabel, 
    Button, 
    Row, 
    Col,
    Spinner,
    Image,
    Navbar,
    Container,
    InputGroup
} from 'react-bootstrap';

function Auth(){
    const [loading, setLoading] = useState(false);

    function handleClick(){
        setLoading(true);
    }

    return(
        <>
            <Navbar className="login-nav">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src="logo.png" className="login-logo"/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className='d-flex justify-content-center mt-5 p-5'>
                <Row>
                    <Col>
                        <Image src="navigatu.png" className="login-image mb-3 mt-5" />
                        <div><h1>Navigate to victory with us.</h1></div>
                    </Col>
                    <Col>
                        <Card className='login-card mt-3'>
                            <Card.Body>
                                <p className="text-muted">Please select your roles :</p>
                                <div className="d-flex justify-content-around mb-3">
                                    <Card className="w-25 card-active" tabIndex="0">
                                        <Card.Body className="text-align-center align-items-center">
                                            <RiTeamFill />
                                            <p className="fw-bold">Personnel</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className="w-25 card-active" tabIndex="0">
                                        <Card.Body>
                                            <PiStudentFill />
                                            <p className="fw-bold">Incubatee</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className="w-25 card-active" tabIndex="0">
                                        <Card.Body>
                                            <PiChalkboardTeacherFill />
                                            <p className="fw-bold">Mentor</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <InputGroup>
                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-3">
                                        <Form.Control size="lg" type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </InputGroup>
                                <InputGroup>
                                    <FloatingLabel controlId="floatingPassword" label="Password" className='mb-4'>
                                        <Form.Control size="lg" type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </InputGroup>
                                <Button variant='primary' className="login-button w-100 p-3 mb-3 fw-bold" onClick={handleClick}>
                                    {loading ? (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </>
                                    ) : "Login"}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Auth;