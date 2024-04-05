import React, { useState } from "react";
import "./Project.scss";
import { useData } from "../../Context/DataProvider";
import { FaAnglesDown } from "react-icons/fa6";
import { Radio } from "antd";

const Project = ({ setOpenModal }) => {
	const data = useData();
	const [displayedProjects, setDisplayedProjects] = useState(6);
	const [tech, setTech] = useState("All");
	const [filtered, setFiltered] = useState([]);

	if (!data || !data.projects) {
		return null;
	}

	const allProjects = data.projects
		.filter((project) => project.enabled === true)
		.sort((a, b) => a.sequence - b.sequence);

	const handleTechChange = (e) => {
		const techToFilter = e.toLowerCase();

		const filterByTech = allProjects.filter((project) =>
			project.techStack.some((tech) =>
				tech.toLowerCase().includes(techToFilter)
			)
		);
		setTech(e);
		setFiltered(filterByTech);
	};

	const handleMoreClick = () => {
		setDisplayedProjects(allProjects.length);
	};

	return (
		<div className="ProjectContainer">
			<div className="divider">
				<span>PORTFOLIO</span>
			</div>
			<div className="radiogroup">
				<Radio.Group
					value={tech}
					onChange={(e) => handleTechChange(e.target.value)}
					buttonStyle="solid"
					size={window.innerWidth <= 640 ? "small" : "large"}
				>
					<>
						<Radio.Button value="All">All</Radio.Button>
						<Radio.Button value="Reactjs">Reactjs</Radio.Button>
						<Radio.Button value="Nextjs">Nextjs</Radio.Button>
						<Radio.Button value="Mern">Mern</Radio.Button>
						<Radio.Button value="CSS">CSS</Radio.Button>
						<Radio.Button value="TailwindCSS">TailwindCSS</Radio.Button>
					</>
				</Radio.Group>
			</div>
			<div className="projectInnerContainer">
				{(filtered.length === 0 ? allProjects : filtered)
					.slice(0, displayedProjects)
					.map((project, index) => (
						<div
							className="project"
							key={index}
							style={{ backgroundColor: "#fff" }}
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
