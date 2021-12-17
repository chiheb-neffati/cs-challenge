import React from 'react';
import { Link } from 'react-router-dom';
import {faCalendarPlus, 
        faCalendarDay, 
        faFolderOpen, 
        faSlidersH,
        faDoorOpen,
        faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import card1 from '../Assets/card1.png';
import card2 from '../Assets/card2.png';
import card3 from '../Assets/card3.png';
import card4 from '../Assets/card4.png';
import card5 from '../Assets/card5.png';
import card6 from '../Assets/card6.png';

function Cards(){
    const Styles = {
        textDecoration : "none"
    };
    return(
        <div className='container'>
            <h1 className="p-5 border-bottom display-3">Welcome John!</h1>
            
            
            <div className="container flex-wrap px-4 py-5" id="featured-3">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    

                    <div className="col card border-0">
                        <Link to="/UDB/MakeAppointment" style={Styles}>
                        <img className='card-img-top' src={card1} alt="" width="350"/>
                        <div class="alert alert-success text-center card-body" role="alert">
                            <h1><FontAwesomeIcon icon={faCalendarPlus} className="mx-2"/></h1>
                            <h3>
                                Make appointment
                            </h3>
                        </div>
                        </Link>
                    </div>
                    

                    <div className="col card border-0">
                        <Link to="/UDB/MyAppointments" style={Styles}>
                        <img className='card-img-top' src={card2} alt="" width="350"/>
                        <div class="alert alert-primary text-center card-body" role="alert">
                            <h1><FontAwesomeIcon icon={faCalendarDay} className="mx-2"/></h1>
                            <h3>
                                My appointments
                            </h3>
                        </div>
                        </Link>
                    </div>

                    
                    <div className="col card border-0">
                        <Link to = "/UDB/Docs" style={Styles}>
                        <img className='card-img-top' src={card3} alt="" width="350"/>
                        <div class="alert alert-warning text-center card-body" role="alert">
                            <h1><FontAwesomeIcon icon={faFolderOpen} className="mx-2"/></h1>
                            <h3>
                                My documents
                            </h3>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="container px-4 py-5" id="featured-3">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col card border-0">
                        <Link to="/UDB/Help" style={Styles}>
                        <img className='card-img-top' src={card4} alt="" width="350"/>
                        <div class="alert alert-info text-center" role="alert">
                            <h1><FontAwesomeIcon icon={faQuestionCircle} className="mx-2"/></h1>
                            <h3>
                                Help
                            </h3>
                        </div>
                        </Link>
                    </div>
                    
            
                    <div className="col card border-0">
                        <Link to ='/Home' style={Styles}>
                        <img className='card-img-top' src={card5} alt="" width="350"/>
                        <div class="alert alert-danger text-center" role="alert">
                            <h1><FontAwesomeIcon icon={faDoorOpen} className="mx-2"/></h1>
                            <h3>
                                Logout
                            </h3>
                        </div>
                        </Link>
                    </div>

                    
                    <div className="col card border-0">
                        <img className='card-img-top' src={card6} alt="" width="350"/>
                        <div class="alert alert-dark text-center" role="alert">
                            <h1><FontAwesomeIcon icon={faSlidersH} className="mx-2"/></h1>
                            <h3>
                                Settings
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;