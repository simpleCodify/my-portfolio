import React from "react";

// Importing React-Bootstrap Components
import { Badge, Card, Container, Row } from "react-bootstrap";

let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];

let time = Math.random() * 4;
let num = Math.floor(Math.random() * Math.floor(4));
let name = animationArray[num];
let imgStyle = { animation: `${name} ${time}s` };

const StardustCard = () => {
	return (
		<Container className="align-middle my-auto">
			<Row className="mt-5">
				<div className="col-6 mx-auto">
					<Card className="app-panel align-middle light-border" style={imgStyle}>
						<Card.Body>
							<Row>
								<div className="col-12 mx-auto text-left">
									<h3 className="mb-1 text-truncated">a stardust truce</h3>
									<p className="mb-0 text-truncated text-muted">Full Stack Django Collaboration Application</p>
									<small className="text-truncated text-muted">(Pyhon, PostgreSQL, Django, Javascript)</small>
									<p className="my-2 text-truncated">An interactive learning tool designed to assist student comprehension of core computer science concepts</p>
									<p className="my-2">
										<Badge className="mr-3" pill variant="dark">
											<a className="rr_link2" href="https://github.com/ChiExplores/a-stardust-truce" target="_blank">
												Github
											</a>
										</Badge>
										<Badge className="mr-3" pill variant="info">
											<a className="rr_link2" href="https://astardusttruce.herokuapp.com/" target="_blank">
												Site
											</a>
										</Badge>
										<Badge className="mr-3" pill variant="secondary">
											<a className="rr_link2" href="https://github.com/sorrelbri" target="_blank">
												@Sorrel
											</a>
										</Badge>
										<Badge className="mr-3" pill variant="secondary">
											<a className="rr_link2" href="https://github.com/ChiExplores" target="_blank">
												@Chi
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

export default StardustCard;
