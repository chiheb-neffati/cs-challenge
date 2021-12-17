import react from 'react';
import UDB1 from '../Assets/UDB1.png';
import UDB2 from '../Assets/UDB2.png';
import doc1 from '../Assets/doc1.png';
import MyAppo from '../Assets/MyAppo.png';
import MakeAppo1 from '../Assets/MakeAppo1.png';
import MakeAppo2 from '../Assets/MakeAppo2.png';
import MakeAppo3 from '../Assets/MakeAppo3.png';
import MakeAppo4 from '../Assets/MakeAppo4.png';

function Help(){
    return(
        <div>
            <h1 className="p-5 border-bottom display-3">How can we help you :</h1>
            <div className="container bg-light p-5 shadow-lg">
                <div className="bd-example bg-light">
                    
                    <div className="accordion accordion-flush" id="accordionFlush1">    
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    How to check my appointements :
                                </button>
                            </h2>

                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush1">
                                <div className="accordion-body">
                                    1 - Click on the "My appointments" tile in the user dashboard.<br/>
                                    <img className='card-img-top' src={UDB1} alt=""/>
                                    2 - You will be redirected to a new screen that contains all of the appointments you made <br/>
                                    <img className='card-img-top' src={MyAppo} alt=""/>
                                    You will have the choice of either modifying the appointments you have taken or the choice to cancel them, also at the bottom of the page you will have a button(add an appointment) that will redirect you to the "Make appointment" section <br/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion accordion-flush" id="accordionFlush2">    
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How to make an appointement :
                                </button>
                            </h2>

                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush2">
                                <div className="accordion-body">
                                    1 - Click on the "Make appointment" tile in the user dashboard.<br/>
                                    <img className='card-img-top' src={UDB1} alt=""/>
                                    2 - Choose the service you want to get. <br/>
                                    <img className='card-img-top' src={MakeAppo1} alt=""/>
                                    3 - a Screen will appear showing you the documents you need (The ones colored Green are the ones that are still reusable and don't need re-newale, the ones in Red are the missing documents that you need to bring, but dont worry, once you bring those documents to the branch, they will be saved on our database and can be reused in the future.) <br/>
                                    <img className='card-img-top' src={MakeAppo2} alt=""/>
                                    4 - Fill the form with the needed informations then hit confirm.<br/>
                                    <img className='card-img-top' src={MakeAppo3} alt=""/>
                                    5 - Submit the form and you are good to Go ^_^.<br/>
                                    <img className='card-img-top' src={MakeAppo4} alt="" width="400"/>
                                </div>
                            </div>
                        </div>
                    </div>              

                    <div className="accordion accordion-flush" id="accordionFlush3">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How to check if any document is still valid :
                                </button>
                            </h2>
                            
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush3">
                                <div className="accordion-body">
                                    1 - Click on the "My Documents" tile in the user dashboard.<br/>
                                    <img className='card-img-top' src={UDB1} alt=""/>
                                    2 - You will be redirected to screen that will show you all the documents that <strong>MyBousta</strong> detected in it's database <br/>
                                    <img className='card-img-top' src={doc1} alt=""/>
                                    3 - This section shows you all the documents you have made since creating you account that are still valid (This does not apply to one-time use documents).
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="accordion accordion-flush" id="accordionFlush4">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    How to change my account settings :
                                </button>
                            </h2>
                            
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlush4">
                                <div className="accordion-body">
                                    1 - Click on the "Settings" tile in the user dashboard.<br/>
                                    <img className='card-img-top' src={UDB2} alt=""/>
                                    2 - You will be redirected to screen that will contain all your setting like your phone number, you adress etc ...<br/>
                                    3 - You just need to choose one of the sections in the settings page to get access to it's tools.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Help;