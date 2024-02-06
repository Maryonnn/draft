import Sidebar from './Sidebar.js';
import '../App.css';
import { 
    Image,
    Card,
    Form,
    Row,
    Col,
    Button,
    FloatingLabel
 } from 'react-bootstrap';

function Register(){
    return(
        <>

            <div className='d-flex'>
                <Sidebar/>
                <div className='d-flex flex-grow-1 p-5 mt-4 gap-5 justify-content-center'>
                    <div>
                        <Image src='toji.jpg' roundedCircle className='image-register mb-5'/>
                        <FloatingLabel label="Team Name">
                            <Form.Control type="text" placeholder="Team Name" />
                        </FloatingLabel>
                    </div>
                    <div>
                        <Card className='card-create'>
                            <Card.Header className='text-muted'>CONTACT DETAILS</Card.Header>
                            <Card.Body>
                                <Form>
                                    <FloatingLabel label="Full Name" className='mb-3 mt-4'>
                                        <Form.Control type="text" placeholder="Full Name" />
                                    </FloatingLabel>
                                    <FloatingLabel label="Email" className='mb-3'>
                                        <Form.Control type="email" placeholder="Email" />
                                    </FloatingLabel>
                                    <FloatingLabel label="Course & Year" className='mb-3'>
                                        <Form.Control type="text" placeholder="Course & Year" />
                                    </FloatingLabel>
                                    <FloatingLabel label="Phone Number" className='mb-3'>
                                        <Form.Control type="text" placeholder="Phone Number" />
                                    </FloatingLabel>
                                    <FloatingLabel label="Startup Name" className='mb-3'>
                                        <Form.Control type="text" placeholder="Startup Name" />
                                    </FloatingLabel>
                                    <Row className='g-2'>
                                        <Col xs={8}>
                                            <FloatingLabel label="Password">
                                                <Form.Control type="text" placeholder="Password" />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <Button className='btn-register w-100 h-100'>Generate Password</Button>
                                        </Col>
                                    </Row>
                                    <div className='d-flex justify-content-center mt-5'>
                                        <Button className='btn-register-save w-50 h-100'>Save Changes</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;