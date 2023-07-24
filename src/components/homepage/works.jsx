import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Skills Learnt"
				body={
					<main className="works-body">
						{/* <div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Facebook</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
						HTML, CSS, Git, JavaScript, Third-party APIs (jQuery, Bootstrap), Server-side APIs, AJAX, and JSON, Node.js, 
						Object-oriented programming (OOP), Express.js servers, MySQL, Object-relational mapper, or ORM (Sequelize),
						Model-view-controller (MVC) framework (Handlebars.js), Unit testing, Agile methodology, Heroku, 
						Computer science, MongoDB and NoSQL, Progressive web apps (PWAs), React, MERN.
					
						<div>
							<h5> RESUME COMING SOON! </h5>
						</div>

					</main>
				}
			/>
		</div>
	);
};

export default Works;
