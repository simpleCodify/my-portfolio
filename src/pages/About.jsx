import React from "react";

import { Container, Row, Card, Badge } from "react-bootstrap";

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

					<p>If you would like to see more of my work or are interested in starting a project together, please get in touch</p>
				</div>
			</Row>

			<Row className="my-5">
				<div className="col-12 col-lg-6 col-md-8 mx-auto">
					<Card className="app-panel align-middle light-border">
						<Card.Body>
							<Row>
								<div className="col-12 col-lg-6 col-md-6 col-sm-12 text-left">
									<h3 className="mb-2 text-truncated">Jonathan Pak</h3>
									<p className="mb-0 text-truncated text-muted">Full Stack Developer | Software Engineer</p>
									<small className="text-truncated text-muted">( MERN Stack, Javascript, Ruby, Python, PostgreSQL, MySQL )</small>
									<p className="my-2 text-truncated"></p>
								</div>
								<div className="col-12 col-lg-6 col-md-6 col-sm-12 text-center">
									<h4 className="mb-2 text-truncated">Contact Information</h4>
									<p className="mb-0 text-truncated text-muted">
										<a className="text-muted" href="mailto:jonpak1987@gmail.com">
											Jonpak1987@gmail.com
										</a>
									</p>
									<p className="mb-1 text-muted">
										<a className="text-muted" href="tel:+1408-412-0659">
											1-(408) 412-0659
										</a>
									</p>
									<p className="mb-0">
										<a className="text-muted" href="https://www.linkedin.com/in/jonathan-pak/">
											linkedin.com/in/jonathan-pak
										</a>
									</p>
									<p className="mb-0">
										<a className="text-muted" href="https://github.com/simpleCodify">
											github.com/simpleCodify
										</a>
									</p>
								</div>
							</Row>
							<Row className="col-12 text-left">
								<p className="my-2">
									<Badge className="mr-3" pill variant="dark">
										<a className="rr_link2" href="https://github.com/simpleCodify" target="_blank">
											Github
										</a>
									</Badge>
									<Badge className="mr-3" pill variant="primary">
										<a className="rr_link2" href="https://www.linkedin.com/in/jonathan-pak/" target="_blank">
											LinkedIn
										</a>
									</Badge>
									<Badge className="mr-3" pill variant="info">
										<a className="rr_link2" href="www.simplecodify.com" target="_blank">
											Site
										</a>
									</Badge>
								</p>
							</Row>
						</Card.Body>
					</Card>
				</div>
			</Row>
		</Container>
	);
};

export default About;
