import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from '../Components/Footer';

function MyAppointments(){
    return(
        <div>
            <NavbarLoggedIn/>
            <div className="container">
                <h1 className="p-5 border-bottom display-3">My appointments :</h1>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Appointment</th>
                            <th scope="col">document completion status</th>
                            <th scope="col">Location</th>
                            <th scope="col">Expected date</th>
                            <th scope="col">Actions</th>
                        </tr>
                        <tr>
                            <td>ap101</td>
                            <td>Creating E-Dinar Card</td>
                            <td>Complete</td>
                            <td>Ariana</td>
                            <td>20/12/2021</td>
                            <td>
                                <button type="button" className="btn mx-2 btn-outline-primary">Edit</button>
                                <button type="button" className="btn mx-2 btn-outline-danger">Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td>ap102</td>
                            <td>Sending a Letter</td>
                            <td>No additionnal documents needed</td>
                            <td>Ariana</td>
                            <td>21/12/2021</td>
                            <td>
                                <button type="button" className="btn mx-2 btn-outline-primary">Edit</button>
                                <button type="button" className="btn mx-2 btn-outline-danger">Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td>ap103</td>
                            <td></td>
                            <td>Not complete</td>
                            <td>Ariana</td>
                            <td>22/12/2021</td>
                            <td>
                                <button type="button" className="btn mx-2 btn-outline-primary">Edit</button>
                                <button type="button" className="btn mx-2 btn-outline-danger">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <Link to ='/UDB/MakeAppointment'>
                    <center>
                        <button type="button" className="btn m-2 btn-outline-success">
                            Add an appointment
                        </button>
                    </center>
                </Link>
                
            </div>
            <Footer/>
        </div>
    );
}

export default MyAppointments;