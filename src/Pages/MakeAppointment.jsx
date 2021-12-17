import React, {Component} from "react";
import Footer from "../Components/Footer";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import ServStep from "../Components/ServStep";
import NeededDocs from "../Components/NeededDocs";
import FillMakeApp from "../Components/FillMakeApp";

export class MakeAppo extends Component{
    state = {
        step : 1,
        service : "",
        branch : "",
        date : "",
        time : "",
        highschool : "",
        GraduationYear :"",
        Remarques : ""
    };

    nextStep = () =>{
        const {step} = this.state;
        this.setState({step : step + 1});
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({step : step - 1});
    }

    handleChange = input => e =>{
        this.setState({[input]:e.target.value});
    }

    render(){
        const {step} = this.state;
        const {service, branch, date, time, highschool, GraduationYear, Remarques} = this.state;
        const values = {service, branch, date, time, highschool, GraduationYear, Remarques};
        
        switch(step){
            case 1:
                return(
                    <div>
                        <NavbarLoggedIn/>
                        <ServStep
                            nextStep = {this.nextStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                        <Footer/>
                    </div>
                    
                );
            case 2:
                return(
                    <div>
                        <NavbarLoggedIn/>
                        <NeededDocs
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                        />
                        <Footer/>
                    </div>
                );
            case 3:
                return(
                    <div>
                        <NavbarLoggedIn/>
                        <FillMakeApp
                            prevStep = {this.prevStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                        <Footer/>
                    </div>
                );
        }
    }       
}

export default MakeAppo;