import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Assets/1.jpg'; 
import image3 from '../Assets/3.jpg'; 
import image4 from '../Assets/4.jpg'; 

function Carousel(){
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <img src={image4} className="d-block w-100 img-fluid" alt="oops"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className = "py-3">Prepare for all your postal services from home with a few clicks!</h3>
                            
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <img src={image1} className="d-block w-100 img-fluid" alt="oops"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>MyBousta, The future of postal services</h3>
                            <Link to ="/About">
                            <button className ="btn btn-primary">Learn More</button>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 img-fluid" alt="oops"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Register now to benefit from MyBousta FOR FREE!</h3>
                            <Link to ="/Register">
                            <button className ="btn btn-primary">Get started</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
export default Carousel;