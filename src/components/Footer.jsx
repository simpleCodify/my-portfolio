import React from "react";

const Footer = () => {
	return (
		<div className="pageFooter text-center sticky-bottom" fluid>
			<hr className="hrLine" />

			<div className="row">
				<div className="col-md-6 my-3 mx-auto">
					<a className="mx-3" href="https://github.com/simpleCodify">
						<img className="iconContainer navbarlink" src="https://image.flaticon.com/icons/svg/2111/2111432.svg" alt="github-icon" target="_blank" />
					</a>

					<a className="mx-3" href="mailto:jonpak1987@gmail.com">
						<img className="iconContainer navbarlink" src="https://image.flaticon.com/icons/png/512/720/720277.png" alt="google-icon" />
					</a>

					<a className="mx-3" href="https://www.linkedin.com/in/jonathan-pak/">
						<img className="iconContainer navbarlink" src="https://image.flaticon.com/icons/svg/145/145807.svg" alt="linkedin-icon" target="_blank" />
					</a>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6 mx-auto my-auto">
					<h5 className="text-muted mb-0">simpleCodify</h5>
					<small className="text-muted">Brought to you by Jonathan Pak</small>
				</div>
			</div>
		</div>
	);
};

export default Footer;
