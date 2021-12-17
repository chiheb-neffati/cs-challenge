import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
	const LinkStyles = {
		textDecoration: "none",
	};
	return (
		<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 text-white bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a
							href="/"
							className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
						>
							<span className="fs-5 d-none d-sm-inline">
								MyBousta
							</span>
						</a>
						<ul
							className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
							id="menu"
						>
							<li className="nav-item">
								<Link style={LinkStyles} to="/Home">
									<a className="nav-link text-white">Home</a>
								</Link>
							</li>
							<li>
								<Link style={LinkStyles} to="/Home">
									<i className="bi-speedometer2"></i>
									<a className="nav-link text-white">
										Dashboard
									</a>
								</Link>
							</li>
							<li>
								<Link style={LinkStyles} to="/Home">
									<i className="bi-plus-square"></i>
									<a className="nav-link text-white">
										New appointment
									</a>
								</Link>
							</li>
							<li>
								<Link style={LinkStyles} to="/Home">
									<i className="bi-calendar"></i>
									<a className="nav-link text-white">
										My Appointments
									</a>
								</Link>
							</li>
							<li>
								<Link style={LinkStyles} to="/Home">
									<i className="bi-question-circle"></i>
									<a className="nav-link text-white">Help</a>
								</Link>
							</li>
						</ul>

						<div className="dropdown p-3">
							<a
								className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
								id="dropdownUser1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									src="https://github.com/mdo.png"
									alt=""
									width="32"
									height="32"
									className="rounded-circle me-2"
								/>
								<strong>mdo</strong>
							</a>
							<ul
								className="dropdown-menu dropdown-menu-dark text-small shadow"
								aria-labelledby="dropdownUser1"
							>
								<li>
									<a className="dropdown-item">Settings</a>
								</li>
								<li>
									<a className="dropdown-item">Profile</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item">Sign out</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

