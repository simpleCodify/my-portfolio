import React from "react";

// Importing React-Bootstrap Components
import { Badge, Card, Container, Row } from "react-bootstrap";

let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];

let time = Math.random() * 4;
let num = Math.floor(Math.random() * Math.floor(4));
let name = animationArray[num];
let imgStyle = { animation: `${name} ${time}s` };

const NilgunCard = () => {
	return (
		<Container className="align-middle my-auto">
			<Row>
				{/* <Row className="mt-5"> */}
				<div className="col-6 mx-auto">
					<Card className="app-panel align-middle light-border" style={imgStyle}>
						<Card.Body>
							<Row>
								<div className="col-12 mx-auto text-left">
									<h3 className="mb-1 text-truncated">NY Engineering</h3>
									<p className="mb-0 text-truncated text-muted">React SPA Website</p>
									<small className="text-truncated text-muted">(React.js, Javascript )</small>
									<p className="my-2 text-truncated">Freelance Website Development</p>
									<p className="my-2">
										<Badge className="mr-3" pill variant="dark">
											<a className="rr_link2" href="#" target="_blank">
												Github
											</a>
										</Badge>
										<Badge className="mr-3" pill variant="info">
											<a className="rr_link2" href="#" target="_blank">
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

export default NilgunCard;
