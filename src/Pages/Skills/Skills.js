import React from "react";
import "./Skills.scss";
import { useData } from "../../Context/DataProvider";

const Skills = () => {
	const data = useData();

	// Filter and sort skills where enabled is true
	const sortedSkills = data?.skills
		?.filter((skill) => skill.enabled === true)
		?.sort((a, b) => a.sequence - b.sequence);

	return (
		<div className="skillsContainer">
			<div className="divider">
				<span>MY SKILLS</span>
			</div>
			<div className="SkillsInnerConatiner">
				{sortedSkills &&
					sortedSkills.map((skill, index) => (
						<div className="item" key={index}>
							<img src={skill?.image?.url} alt="" />
							<div className="skillDetails">
								<p className="skillName">{skill?.name}</p>
								<div className="percentage">
									<div
										role="progressbar"
										aria-valuenow={skill.percentage}
										aria-valuemin="0"
										aria-valuemax="100"
										style={{
											"--value": skill.percentage,
										}}
									></div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Skills;
