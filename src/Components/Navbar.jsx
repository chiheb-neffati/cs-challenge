import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    const NavStyles = {
        textDecoration : "none"
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
            <div className="container">
                <a className="navbar-brand">MyBousta</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample07">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link style = {NavStyles} to = "/Home">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link style = {NavStyles} to = "/About">
                                <a className="nav-link active" aria-current="page">About</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link style = {NavStyles} to = "/Services">
                                <a className="nav-link active" aria-current="page">Services</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link style = {NavStyles} to = "/Contact">
                                <a className="nav-link active" aria-current="page">Contact Us</a>
                            </Link>
                        </li>                        
                    </ul>
                    
                    <div className="col-md-3 text-end">
                        <Link to = "/Login">
                            <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        </Link>
                        
                        <Link to ="/Register">
                            <button type="button" className="btn btn-primary">Sign-up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;