import React from "react";

import { Container, Row } from "react-bootstrap";

const About = () => {
	return (
		<Container fluid className="my-5">
			<Row className="my-5">
				<div className="col-12 text-center">
					<h3 className="my-5">Hi</h3>
					<p>I'm a Full-Stack Developer based in Fremont, CA.</p>
					<p>I have a passion in Software Engineering.</p>

					<p>Currently looking for a professional environment to level up my knowledge</p>
					<br />

					<p>If you would like to see a sampling of my work or are interested in starting a project together, please get in touch</p>
				</div>
			</Row>

			<Row className="my-5">
				<div className="col-12 text-center">
					<h3 className=" fontvariantsc my-4">Contact Me for Work</h3>

					<p>Jonpak1987@gmail.com</p>
					<p>1-(408) 412-0659</p>
					<p>
						<a href="https://www.linkedin.com/in/jonathan-pak/">My LinkedIn</a>
					</p>
					<p>
						<a href="https://github.com/simpleCodify">My Github</a>
					</p>
				</div>
			</Row>
		</Container>
	);
};

export default About;
