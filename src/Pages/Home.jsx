import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Features from '../Components/Features';
import FAQ from '../Components/FAQ';

function Home(){
    return(
        <div className ="bg-light">
            <Navbar/>
            <Header/>
            <Features/>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default Home;