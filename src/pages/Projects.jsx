import React from "react";

import ColabCard from "../components/ColabCard";
import RecipeaseCard from "../components/RecipeaseCard";
import StardustCard from "../components/StardustCard";
import EchoCard from "../components/EchoCard";

import { Container } from "react-bootstrap";

const Projects = props => {
	return (
		<Container fluid className="my-5">
			<hr className="hrLine my-5" />
			<ColabCard />
			<RecipeaseCard />
			<StardustCard />
			<EchoCard />
		</Container>
	);
};

export default Projects;
