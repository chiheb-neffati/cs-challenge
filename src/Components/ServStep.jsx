import React from "react";
import { Link } from "react-router-dom";

class ServStep extends React.Component{
    style = {borderRadius : "1rem"};
    
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    

    render(){
        const {values, handleChange} = this.props;
        return(
            <div className ="bg-light">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={this.style}>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-2">Step 1: Selecting a service :</h3>
                                <hr className="my-4"/>
                                <div className="form-floating mb-3 col">
                                    <select type="text" className="form-select" id="service" placeholder="Choose a service" onChange={handleChange("service")} defaultValue={values.service} required>
                                        <option value = "Creating a CTI Card">Creating a CTI Card</option>
                                        <option value = "Creating a CTI Card">Creating E-dinar Card</option>
                                    </select>
                                    <label for="service">Choose a service</label>
                                </div>

                                    
                                <div className="form-floating mb-3 col">
                                    <select type="text" className="form-select" id="branch" placeholder="Choose a branch" onChange={handleChange("branch")} defaultValue={values.branch} required>
                                        <option value = "Ariana">Ariana</option>
                                        <option value = "Ben Arous">Ben Arous</option>
                                        <option value = "Tunis">Tunis</option>
                                        <option value = "Manouba">Manouba</option>
                                    </select>
                                    <label for="branch">Choose a branch</label>
                                </div>


                                <div className="form-floating mb-3 col">
                                    <select type="text" className="form-select" id="Date" placeholder="Date" onChange={handleChange("date")}defaultValue={values.date} required>
                                        <option value = "20/12/2021">20/12/2021</option>
                                        <option value = "21/12/2021">21/12/2021</option>
                                        <option value = "22/12/2021">22/12/2021</option>
                                    </select>
                                    <label for="Date">Choose a date</label>
                                </div>

                                <div className="form-floating mb-3 col">
                                    <select type="text" className="form-select" id="Time" placeholder="Time" onChange={handleChange("time")} defaultValue={values.time} required>
                                        <option value = "09:00">09:00</option>
                                        <option value = "09:30">09:30</option>
                                        <option value = "09:45">09:45</option>
                                        <option value = "10:00">10:00</option>
                                        <option value = "11:00">11:00</option>
                                        <option value = "11:15">11:15</option>
                                        <option value = "11:30">11:30</option>
                                        <option value = "11:45">11:45</option>
                                        <option value = "13:30">13:30</option>
                                        <option value = "13:45">13:45</option>
                                        <option value = "14:00">14:00</option>
                                        <option value = "15:15">15:15</option>
                                        <option value = "15:45">15:45</option>
                                        <option value = "16:00">16:00</option>
                                            
                                    </select>
                                    <label for="Time">Choose a time</label>
                                </div>
                                    
                                <hr className="my-4"/>
                                <button className="w-100 btn btn btn-primary" type="submit" onClick={this.continue}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ServStep;