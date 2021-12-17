import react from "react";
import { Link } from "react-router-dom";

function FAQ(){
    return(
        <div>
            <div class="container px-4 py-5" id="icon-grid">
                <h2 class="pb-2 border-bottom">Frequently Asked Questions :</h2>

                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">Who can use MyBousta?</h4>
                            <p>Any one is able to use MyBousta as long as you are an adult (older than 18 years) and have a nationnal identity card or passport proving that you are a Tunisian citizen.</p>
                        </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">How can i register?</h4>
                            <p>To register and make an account in our platform you just have to click the sign-up button on top of this page then fill the form with the necessary informations.</p>
                        </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">How can i re-use my documents?</h4>
                            <p>After you create an account, each time you show up to a branch for a service that requires some sort of document, those documents then gets uploaded to our database for re-use (as long as it is re-usable).</p>
                        </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">Will all Postal branches be obsolete with MyBousta in the future?</h4>
                            <p>No, each branch will work the same way they did since day one, MyBousta is a platform aiming to reduce stress and long queues for postal branches while reducing the time it takes to complete each service.</p>
                        </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">Do i still have to go to a branch to complete a service?</h4>
                            <p>Yes, some services require additionnal steps to complete it like giving a signature or to pay for the service or even to fill some additionnal papers or to sign some sort of contract.</p>
                        </div>
                    </div>

                    <div class="col d-flex align-items-start">
                        <div>
                            <h4 class="fw-bold mb-0">Does using MyBousta make postal services cheaper?</h4>
                            <p>It depends on which kind of service, but generally, since you can exclude transportation fees and wasting time to prepare for the required documents, it can be considerably cheaper than the classic way.</p>
                        </div>
                    </div>
                </div>

                <Link to='/Contact'>
                    <center>For more information, don't hesitate to contact us</center>
                </Link>
            </div>
        </div>
    );
}

export default FAQ;