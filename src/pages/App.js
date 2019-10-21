import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/App.scss";

import Homepage from "./Homepage";
import About from "./About";
import Projects from "./Projects";

// Import components
import LogoBanner from "../components/LogoBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<LogoBanner />
				<NavBar />

				<Switch>
					<Route exact path="/" children={<Homepage />} />

					<Route path="/projects" children={<Projects />} />
					<Route path="/about" children={<About />} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
