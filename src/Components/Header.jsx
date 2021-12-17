import React from "react";
import { Link } from "react-router-dom";
import heading from "../Assets/heading.png";
import image2 from "../Assets/2.jpg";

function Header() {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide carousel-fade"
			data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src={image2}
						className="d-block w-100 img-fluid"
						alt="oops"/>
					<div className="carousel-caption d-none d-md-block">
						<div class="py-5">
							<h1 class="display-5 text-info fw-bolder mb-2">
								Welcome to MyBousta!
							</h1>
							<p class="lead fw-bold text-muted mb-4">
								Where we redifine the future of postal services
							</p>
						</div>
						<div class="d-grid gap-3 py-4 d-sm-flex justify-content-sm-center">
							<Link to="/Register">
								<a class="btn btn-primary btn-lg px-4 me-sm-3">
									Get Started
								</a>
							</Link>
							<Link to="/About">
								<a class="btn btn-outline-primary btn-lg px-4">
									Learn More
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
