import React from 'react';
import Footer from '../Components/Footer';
import NavbarLoggedIn from '../Components/NavbarLoggedIn';
import Cards from '../Components/Cards';


function UserDashboard(){
    return(
        <div>
            <NavbarLoggedIn/>
            <Cards/>
            <Footer/>
        </div>
    );
}

export default UserDashboard;