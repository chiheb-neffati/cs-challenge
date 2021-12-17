import React from "react";
import { Link } from "react-router-dom";

class FillMakeApp extends React.Component{
    style = {borderRadius : "1rem"};

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
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
                                    <h3 className="mb-2">Step 3: Filling additionnal needed Informations :</h3>
                                    <hr className="my-4"/>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="HS" onChange={handleChange("highschool")} defaultValue={values.highschool} placeholder="name@example.com" required/>
                                        <label for="HS">Graduation HighSchool</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="GraduationYear" onChange={handleChange("GraduationYear")} defaultValue={values.GraduationYear} placeholder="name@example.com" required/>
                                        <label for="GraduationYear">Graduation year</label>
                                    </div>

                                    <div className="form-floating mb-3 col">
                                        <select type="text" className="form-select" id="rq" placeholder="Choose a branch" onChange={handleChange("Remarques")} defaultValue={values.Remarques} required>
                                            <option value = "Medioce">Mediocre</option>
                                            <option value = "Good">Good</option>
                                            <option value = "Great">Great</option>
                                            <option value = "Excellet">Excellent</option>
                                        </select>
                                        <label for="brq">Remarque</label>
                                    </div>

                                    <hr className="my-4"/>
                                    <div class="d-grid gap-2 d-block">
                                        <button className="w-100 btn btn btn-outline-primary" type="submit" onClick={this.back}>previous</button>
                                        <button className="w-100 btn btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#ConfirmModal">Confirm</button>
                                    </div>

                                    <div class="modal fade" id="ConfirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Request submitted!</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Your request have been submitted, Thank you for trusting and using our Platform</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                                    <Link to ='/UDB'>
                                                    <button type="button" data-bs-dismiss="modal" class="btn btn-outline-success">Go back</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FillMakeApp;
