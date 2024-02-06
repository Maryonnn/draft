import Sidebar from './Sidebar.js';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { 
    Card,
    Image
} from 'react-bootstrap';

function CreateAccount(){
    return(
        <>
            <div className='d-flex'>
                <Sidebar />
                <div className='d-flex flex-grow-1 p-5 mt-5 gap-5 justify-content-center'>
                    <div>
                        <NavLink exact to="/register-incubatee" activeClassName="activeClicked">
                            <Card className='card-register'>
                                <Card.Body className='d-flex justify-content-center p-5'>
                                    <Image src='Incubatee.png' className='image-register' alt='Incubatee' />
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <div className='d-flex justify-content-center'>
                            <h1 className='mt-5 fw-bold'>INCUBATEE</h1>
                        </div>
                    </div>
                    <div>
                        <NavLink exact to="/register-mentor" activeClassName="activeClicked">
                            <Card className='card-register'>
                                <Card.Body className='d-flex justify-content-center p-5'>
                                    <Image src='mentor.png' className='image-register' alt='Mentor'/>
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <div className='d-flex justify-content-center'>
                            <h1 className='mt-5 fw-bold'>MENTOR</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CreateAccount;