import React, { useState } from "react";
import "./Project.scss";
import { useData } from "../../Context/DataProvider";
import { FaAnglesDown } from "react-icons/fa6";

const Project = ({ setOpenModal }) => {
	const data = useData();
	const [displayedProjects, setDisplayedProjects] = useState(6);

	if (!data || !data.projects) {
		return null;
	}

	const allProjects = data.projects
		.filter((project) => project.enabled === true)
		.sort((a, b) => a.sequence - b.sequence);

	const handleMoreClick = () => {
		setDisplayedProjects(allProjects.length);
	};

	return (
		<div className="ProjectContainer">
			<div class="divider">
				<span>PORTFOLIO</span>
			</div>
			<div className="projectInnerContainer">
				{allProjects &&
					allProjects.slice(0, displayedProjects).map((project, index) => (
						<div
							className="project"
							key={index}
							onClick={() => setOpenModal({ state: true, project: project })}
						>
							<img src={project.image.url} alt={project.title} />
							<div className="techStackContainer">
								{project.techStack?.map((tech, i) => (
									<div className="techStack" key={i}>
										<label>{tech}</label>
									</div>
								))}
							</div>
							<label className="projectName">{project.title}</label>
							<p className="projectDesc">
								{project.description.substring(0, 147)} ...
							</p>
						</div>
					))}
			</div>
			{displayedProjects < allProjects.length && (
				<div className="moreBtn" onClick={handleMoreClick}>
					<label>more</label>
					<FaAnglesDown className="icon" />
				</div>
			)}
		</div>
	);
};

export default Project;
