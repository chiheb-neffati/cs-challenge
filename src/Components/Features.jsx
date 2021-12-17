import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faDollarSign, faClock} from '@fortawesome/free-solid-svg-icons'

function Features(){
    return(
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Why use this Platform?</h2>
            
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="col d-flex align-items-start"
                data-toggle="tooltip" data-placement="top" title='With a clear and simple user interface, MyBousta is a platform in which you can call using it "Fool proof"!'>
                    <div> 
                        <h2 className="mx-auto">
                            <FontAwesomeIcon icon={faUsers} className="mx-2"/>
                            Simple
                        </h2>
                        <ul >
                            <li >
                                Clear and simple user interface making it easy to use.
                            </li>
                            <li >
                                Intuitive user experience making booking a service a breeze.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col d-flex align-items-start"
                data-toggle="tooltip" data-placement="top" title='By excluding unnecessary additionnal costs like transportation, myBoustaallows you to do all the time costly services from home, which saves you time, money and energy!'>
                    <div> 
                        <h2>
                            <FontAwesomeIcon icon={faDollarSign} className="mx-2"/>
                            Economical
                        </h2>
                        <ul >
                            <li >
                                Reducing cost per service.
                            </li>
                            <li >
                                No more transportation fees(While preparing for required documents).
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col d-flex align-items-start"
                data-toggle="tooltip" data-placement="top" title="MyBousta scans it's database each time you make a service so that you can benefit from already existing and still valid documents, which allows you to reduce preparation time per service, which also saves you the time and effort to do so!">
                    <div > 
                        <h2>
                            <FontAwesomeIcon icon={faClock} className="mx-2"/>
                            Fast
                        </h2>

                        <ul >
                            <li >
                                Use already existing paperwork(as long as they are not expired).
                            </li>
                            <li >
                                Speed up procedures by completing all the heavy lifting at home.
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        </div>        
                   
    );
}

export default Features;
