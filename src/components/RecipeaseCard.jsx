import React from "react";

// Importing React-Bootstrap Components
import { Badge, Card, Container, Row } from "react-bootstrap";

let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];

let time = Math.random() * 4;
let num = Math.floor(Math.random() * Math.floor(4));
let name = animationArray[num];
let imgStyle = { animation: `${name} ${time}s` };

const RecipeaseCard = () => {
	return (
		<Container className="align-middle my-auto">
			<Row className="mt-5">
				<div className="col-12 col-lg-6 col-md-8 mx-auto">
					<Card className="app-panel align-middle light-border" style={imgStyle}>
						<Card.Body>
							<Row>
								<div className="col-12 mx-auto text-left">
									<h3 className="mb-1 text-truncated">recipease</h3>
									<p className="mb-0 text-truncated text-muted">"MEN" Stack Application</p>
									<small className="text-truncated text-muted">(MongoDB, Express.js, Node.js)</small>
									<p className="my-2 text-truncated">A Recipe App that takes Your ingredients into consideration</p>
									<p className="my-2">
										<Badge className="mr-3" pill variant="dark">
											<a className="rr_link2" href="https://github.com/simpleCodify/recipease" target="_blank">
												Github
											</a>
										</Badge>
										<Badge pill variant="info">
											<a className="rr_link2" href="https://simplestudios-recipease.herokuapp.com/" target="_blank">
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

export default RecipeaseCard;
