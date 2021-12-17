import React from "react";

class NeededDocs extends React.Component{
    style = {borderRadius : "1rem"};
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        return(
            <div className ="bg-light">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={this.style}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-2">Step 2: Check needed Documents and paper-work :</h3>
                                    <hr className="my-4"/>
                                    <h5 className="my-2">Here are all the documents you need for to complete this service :</h5>
                                    <div className="justify-content-start">
                                        <p className="text-success">1 - Identity card.</p>
                                        <p className="text-success">2 - Baccalauriat degree.</p>
                                        <p className="text-success">3 - Birth certificate.</p>
                                        <p className="text-danger">4 - College enrollement certificate.</p>
                                    </div>
                                    <hr className="my-4"/>
                                    <div class="d-grid gap-2 d-block">
                                        <button className="w-100 btn btn btn-outline-primary" type="submit" onClick={this.back}>previous</button>
                                        <button className="w-100 btn btn btn-primary" type="submit" onClick={this.continue}>Next</button>
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

export default NeededDocs;