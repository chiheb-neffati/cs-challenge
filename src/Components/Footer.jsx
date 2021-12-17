import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	const FooterStyles = {
		textDecoration: "none",
	};

	return (
		<footer class="footer bg-light">
			<div class="container">
				<ul className="nav justify-content-center border-bottom ab-3 mb-3">
					<Link style={FooterStyles} to="/Home">
						<li className="nav-item">
							<a className="nav-link ax-2 text-muted">Home</a>
						</li>
					</Link>
					<Link style={FooterStyles} to="/About">
						<li className="nav-item">
							<a className="nav-link ax-2 text-muted">About</a>
						</li>
					</Link>
					<Link style={FooterStyles} to="/Services">
						<li className="nav-item">
							<a className="nav-link ax-2 text-muted">Services</a>
						</li>
					</Link>
					<Link style={FooterStyles} to="/Contact">
						<li className="nav-item">
							<a className="nav-link ax-2 text-muted">Contacts</a>
						</li>
					</Link>
				</ul>
				<a
					style={FooterStyles}
					className="text-center text-muted"
					href="http://cs-enicarthage.ieee.tn/"
					target="_blank"
				>
					<p className="text-center text-muted">
						IEEE ENICarthage CS Student Chapter
					</p>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
