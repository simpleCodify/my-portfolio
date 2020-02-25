import React from "react";

import ColabCard from "../components/ColabCard";
import RecipeaseCard from "../components/RecipeaseCard";
import StardustCard from "../components/StardustCard";
import EchoCard from "../components/EchoCard";

import { Container } from "react-bootstrap";
import NilgunCard from "../components/NilgunCard";
import BmwCloneCard from "../components/BMWclone";

const Projects = props => {
	return (
		<Container fluid className="my-5">
			<hr className="hrLine my-5" />
			<BmwCloneCard />
			<NilgunCard />
			<ColabCard />
			<RecipeaseCard />
			<StardustCard />
			<EchoCard />
		</Container>
	);
};

export default Projects;
