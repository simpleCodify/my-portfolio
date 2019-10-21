import React from "react";

import { Container } from "react-bootstrap";
import { Parallax, Background } from "react-parallax";

const Homepage = () => {
	return (
		<Container fluid className="my-5 text-center fontvariantsc">
			<hr className="my-5" />
			<Parallax strength={1500} blur={{ min: -15, max: 25 }} style={{ height: "70vh" }}>
				<Background className="custom-bg">
					<img src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
				</Background>
			</Parallax>

			<Parallax strength={300} blur={{ min: 0, max: 5 }} style={{ height: "20vh", borderTop: "10px inset gray", borderBottom: "10px inset gray" }}>
				<Container className="my-5">
					<h1 className="fontvariantsc">Jonathan Pak</h1>
					<p className="my-3">Driven by a vast amount of curiosity, a Full Stack developer on a quest to traverse the limitless seas of technologies</p>
				</Container>
			</Parallax>

			<Parallax strength={1500} style={{ height: "70vh" }}>
				<Background className="custom-bg">
					<img src="https://images.pexels.com/photos/34578/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
				</Background>
			</Parallax>

			<Parallax strength={1500} blur={{ min: -15, max: 35 }} style={{ height: "20vh", borderTop: "10px inset gray", borderBottom: "10px inset gray" }}>
				<Container className="my-5">
					<h1>Technologies</h1>
					<p className="my-3">React.js, Node.js, Express.js, MongoDB, Mongoose, PostgreSQL, MySQL, SQL, JavaScript, Ruby, HTML5, CSS3, React-Bootstrap, Bootstrap </p>
				</Container>
			</Parallax>

			<Parallax strength={1500} blur={{ min: -15, max: 25 }} style={{ height: "70vh" }}>
				<Background className="custom-bg">
					<img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
				</Background>
			</Parallax>

			<Parallax strength={1000} blur={{ min: -15, max: 25 }} style={{ height: "20vh", borderTop: "10px inset gray", borderBottom: "10px inset gray" }}>
				<Container className="my-5">
					<h1>Knowledge</h1>
					<p className="my-3">Committed to the expanse of his knowledge and broadening his skillset, he seeks a professional environment that can contribute to his learning and growth</p>
				</Container>
			</Parallax>

			<Parallax strength={1500} blur={{ min: -1, max: 25 }} style={{ height: "70vh" }}>
				<Background className="custom-bg">
					<img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
				</Background>
			</Parallax>
		</Container>
	);
};

export default Homepage;
