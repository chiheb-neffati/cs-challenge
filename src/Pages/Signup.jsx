import React from 'react';
import Footer from '../Components/Footer';
import { UserInfo } from '../Components/UserInfo';
import { PersonnalInfo } from '../Components/PersonnalInfo';
import FinalStep from '../Components/finalStep';

export class Signup extends React.Component{

    state = {step : 1}

    nextStep = () =>{
        const {step} = this.state;
        this.setState({step : step + 1});
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({step : step - 1});
    }

    render(){
        const {step} = this.state;

        switch(step){
            case 1:
                return(
                    <div>
                        <UserInfo
                        nextStep = {this.nextStep}/>
                        <Footer/>
                    </div>
                );
            case 2:
                return(
                    <div>
                        <PersonnalInfo
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}/>
                        <Footer/>
                    </div>
                );
            case 3:
                return(
                    <div>
                        <FinalStep
                        prevStep = {this.prevStep}/>
                        <Footer/>
                    </div>
                );
        }
    }

}

export default Signup;
