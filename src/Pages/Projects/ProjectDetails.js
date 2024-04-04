import React from "react";
import "./ProjectDetails.scss";
import { Modal } from "antd";

const ProjectDetails = ({ openModal, setOpenModal }) => {
	const project = openModal?.project;
	return (
		<Modal
			open={openModal}
			onCancel={() => setOpenModal({ state: false, project: null })}
			footer={null}
			width={780}
			style={{ top: 0 }}
		>
			<div className="project">
				<img src={project.image.url} alt="" />
				<div className="techStackContainer">
					{project.techStack?.map((tech, i) => (
						<div className="techStack" key={i}>
							<label>{tech}</label>
						</div>
					))}
				</div>
				<label className="techName">{project.title}</label>
				<p className="projectDesc">{project.description}</p>
				<div className="buttonsContainer">
					<a
						className="codeBtn"
						href={project.githuburl}
						onClick={() => setOpenModal({ state: false, project: null })}
					>
						View Code
					</a>
					<a
						className="liveBtn"
						href={project.liveurl}
						onClick={() => setOpenModal({ state: false, project: null })}
					>
						View Live App
					</a>
				</div>
			</div>
		</Modal>
	);
};

export default ProjectDetails;
