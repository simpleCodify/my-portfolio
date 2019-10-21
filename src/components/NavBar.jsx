import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar className="fontvariantsc">
			<Navbar.Collapse>
				<Nav className="justify-content-center mx-auto">
					<div className="navbarlink">
						<NavLink exact to="/" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Home
						</NavLink>
					</div>
					<div className="navbarlink">
						<NavLink to="/about" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
							About Me
						</NavLink>
					</div>
					<div className="navbarlink">
						<NavLink to="/projects" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Projects
						</NavLink>
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
