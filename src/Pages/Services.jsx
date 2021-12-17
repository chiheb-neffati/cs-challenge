import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';
import services1 from '../Assets/services1.png';
import services2 from '../Assets/services2.png';
import services3 from '../Assets/services3.png'; 

//unDraw : https://undraw.co/search

function Services (){
    return(
        <div>
            <Navbar/>
            <Carousel/>
            
            <div class="b-example-divider"></div>

            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">
                            Find about needed documents for a chosen service
                        </h1>
                        <p class="lead">
                            With MyBousta, you will never waste time again, pointlessly going to your nearest branch just to find out about what documents you need!
                        </p>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={services1} alt="" width="350"/>
                    </div>
                </div>
            </div>


            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">    
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                        <img class="rounded-lg-3" src={services2} alt="" width="350"/>
                    </div>

                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">
                            Fix an appointment at your nearest branch
                        </h1>
                        <p class="lead">
                            Transportation can be tima and money consuming, MyBousta keeps that in mind by suggesting the nearest branch to your adress.
                        </p>
                    </div>
                </div>
            </div>


            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">
                            Find about needed documents for a chosen service
                        </h1>
                        <p class="lead">
                            With MyBousta, you will never waste time again, pointlessly going to your nearest branch just to find out about what documents you need!
                        </p>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={services3} alt="" width="350"/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Services;