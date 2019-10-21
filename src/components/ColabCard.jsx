import React from "react";

// Importing React-Bootstrap Components
import { Badge, Card, Container, Row } from "react-bootstrap";

let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];

let time = Math.random() * 4;
let num = Math.floor(Math.random() * Math.floor(4));
let name = animationArray[num];
let imgStyle = { animation: `${name} ${time}s` };

const ColabCard = () => {
	return (
		<Container className="align-middle my-auto">
			<Row>
				{/* <Row className="mt-5"> */}
				<div className="col-12 col-lg-6 col-md-8 mx-auto">
					<Card className="app-panel align-middle light-border" style={imgStyle}>
						<Card.Body>
							<Row>
								<div className="col-12 mx-auto text-left">
									<h3 className="mb-1 text-truncated">co-Lab</h3>
									<p className="mb-0 text-truncated text-muted">Full Stack "MERN" Application</p>
									<small className="text-truncated text-muted">(MongoDB, Express.js, React.js, Node.js)</small>
									<p className="my-2 text-truncated">A Platform providing an elegant approach to connecting users with different skill sets to collaborate</p>
									<p className="my-2">
										<Badge className="mr-3" pill variant="dark">
											<a className="rr_link2" href="https://github.com/simpleCodify/co-lab" target="_blank">
												Github
											</a>
										</Badge>
										<Badge className="mr-3" pill variant="info">
											<a className="rr_link2" href="http://co-lab-oration.herokuapp.com/" target="_blank">
												Site
											</a>
										</Badge>
									</p>
								</div>
							</Row>
						</Card.Body>
					</Card>
				</div>
			</Row>
		</Container>
	);
};

export default ColabCard;
