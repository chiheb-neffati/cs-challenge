import react from "react";
import Help from "../Components/Help";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

function HelpPage(){
    return(
        <div>
            <NavbarLoggedIn/>
            <Help/>
            <Footer/>
        </div>
    );
}

export default HelpPage;