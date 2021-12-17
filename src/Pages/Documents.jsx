import React from 'react';
import Footer from '../Components/Footer';
import NavbarLoggedIn from '../Components/NavbarLoggedIn';

function Documents(){
    return(
        <div>
            <NavbarLoggedIn/>
            <h1 className="p-5 border-bottom display-3">Your Documents :</h1>
            <div className='container mx-auto'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Document</th>
                        <th scope="col">Type</th>
                        <th scope="col">Added in</th>
                        <th scope="col">Expires in</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-success">
                        <th scope="row">1</th>
                        <td>Identity card</td>
                        <td>Re-usable</td>
                        <td>08/09/2018</td>
                        <td>-</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">2</th>
                        <td>Baccalauriat degree</td>
                        <td>Re-usable</td>
                        <td>08/07/2018</td>
                        <td>-</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">3</th>
                        <td>Birth certificate</td>
                        <td>Re-usable</td>
                        <td>08/11/2020</td>
                        <td>08/02/2021</td>
                    </tr>

                    <tr class="table-danger">
                        <th scope="row">4</th>
                        <td>College enrollement certificate</td>
                        <td>expired</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">5</th>
                        <td>Lodging certificate</td>
                        <td>Re-usable</td>
                        <td>08/09/2020</td>
                        <td>08/09/2023</td>
                    </tr>

                    <tr class="table-success">
                        <th scope="row">6</th>
                        <td>Health Insurance</td>
                        <td>Re-usable</td>
                        <td>15/09/2020</td>
                        <td>15/09/2021</td>
                    </tr>

                    <tr class="table-danger">
                        <th scope="row">7</th>
                        <td>College enrollement receipt</td>
                        <td>expired</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr class="table-warning">
                        <th scope="row">8</th>
                        <td>Rental contract copy</td>
                        <td>One-time use only</td>
                        <td>08/09/2018</td>
                        <td>08/09/2018</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <Footer/>
        </div>
    );
}

export default Documents;