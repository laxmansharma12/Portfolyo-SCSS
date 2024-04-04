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
			<h3>SKILLS</h3>
			<div className="SkillsInnerConatiner">
				{sortedSkills &&
					sortedSkills.map(
						(skill, index) =>
							// Render two items per iteration
							index % 2 === 0 && (
								<div className="skillRow" key={index}>
									<div className="skillItem1">
										<div className="item1">
											<img src={skill?.image?.url} />
											<div className="skillDetails">
												<p className="skillName">{skill?.name}</p>
												<div className="percentage">
													<div
														role="progressbar"
														aria-valuenow={sortedSkills[index + 1].percentage}
														aria-valuemin="0"
														aria-valuemax="100"
														style={{
															"--value": sortedSkills[index + 1].percentage,
														}}
													></div>
												</div>
											</div>
										</div>
									</div>
									{/* Check if next item exists before rendering */}
									{sortedSkills[index + 1] && (
										<div className="skillItem2" key={index + 1}>
											<div className="item2">
												<div className="skillDetails">
													<p className="skillName">
														{sortedSkills[index + 1]?.name}
													</p>
													<div className="percentage">
														<div
															role="progressbar"
															aria-valuenow={sortedSkills[index + 1].percentage}
															aria-valuemin="0"
															aria-valuemax="100"
															style={{
																"--value": sortedSkills[index + 1].percentage,
															}}
														></div>
													</div>
												</div>
												<img src={sortedSkills[index + 1]?.image?.url} />
											</div>
										</div>
									)}
								</div>
							)
					)}
			</div>
		</div>
	);
};

export default Skills;
