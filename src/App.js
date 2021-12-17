import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UserDashboard from './Pages/UserDashboard';
import HelpPage from './Pages/HelpPage';
import Documents from './Pages/Documents';
import MyAppointments from './Pages/MyAppointments';
import MakeAppointment from './Pages/MakeAppointment';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Home" element={<Home />} />
					<Route exact path="/About" element={<About />} />
					<Route exact path="/Services" element={<Services />} />
					<Route exact path="/Contact" element={<Contact />} />
					<Route exact path="/Login" element={<Login />} />
					<Route exact path="/Register" element={<Signup />} />
					<Route exact path="/UDB" element={<UserDashboard />} />
					<Route exact path="/UDB/Help" element={<HelpPage />} />
					<Route exact path="/UDB/Docs" element={<Documents />} />
					<Route exact path="/UDB/MyAppointments" element={<MyAppointments />} />
					<Route exact path="/UDB/MakeAppointment" element={<MakeAppointment />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
