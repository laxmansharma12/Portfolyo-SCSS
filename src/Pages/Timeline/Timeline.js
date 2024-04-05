import React, { useState } from "react";
import "./Timeline.scss";
import { useData } from "../../Context/DataProvider";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Timeline = () => {
	const [selectEdu, setSelectEdu] = useState(0);
	const [selectExp, setSelectExp] = useState(0);
	const data = useData();

	const education = data?.timeline
		?.filter((timeline) => timeline.enabled && timeline.forEducation)
		?.sort((a, b) => a.sequence - b.sequence);
	const experience = data?.timeline
		?.filter((timeline) => timeline.enabled && !timeline.forEducation)
		?.sort((a, b) => a.sequence - b.sequence);

	const toggleEducation = (i) => {
		if (selectEdu === i) {
			return setSelectEdu(null);
		}
		setSelectEdu(i);
	};
	const toggleExperience = (i) => {
		if (selectExp === i) {
			return setSelectExp(null);
		}
		setSelectExp(i);
	};

	return (
		<div className="timelineConatiner">
			<div className="divider">
				<span>RESUME</span>
			</div>
			<div className="timelineInnerConatiner">
				<div className="ItemsContainer">
					<p className="title">Education</p>
					{education &&
						education.map((item, i) => (
							<div className="Item">
								<div
									className="nameContainer"
									onClick={() => toggleEducation(i)}
								>
									<h1>{item.company_name}</h1>
									<div>{selectEdu === i ? <FaMinus /> : <FaPlus />}</div>
								</div>
								<div className={selectEdu === i ? "Answer show" : "Answer"}>
									<div className="itemBody">
										<div className="titleContainer">
											<h3>{item.jobTitle}</h3>
											<div className="subTitleContainer">
												<label className="date">
													{item.startDate.substring(0, 4)}/
													{item.startDate.substring(5, 7)}/
													{item.startDate.substring(8, 10)} -{" "}
													{item.endDate.substring(0, 4)}/
													{item.endDate.substring(5, 7)}/
													{item.endDate.substring(8, 10)}
												</label>
												<label className="location">{item.jobLocation}</label>
											</div>
										</div>
										<div className="summary">
											<p>{item.summary}</p>
										</div>
										<ul className="list">
											{item.bulletPoints?.map((list) => (
												<li>{list}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
				</div>

				<div className="ItemsContainer">
					<p className="title">Experience</p>
					{experience &&
						experience.map((item, i) => (
							<div className="Item">
								<div
									className="nameContainer"
									onClick={() => toggleExperience(i)}
								>
									<h1>{item.company_name}</h1>
									<div>{selectExp === i ? <FaMinus /> : <FaPlus />}</div>
								</div>
								<div className={selectExp === i ? "Answer show" : "Answer"}>
									<div className="itemBody">
										<div className="titleContainer">
											<h3>{item.jobTitle}</h3>
											<div className="subTitleContainer">
												<label className="date">
													{item.startDate.substring(0, 4)}/
													{item.startDate.substring(5, 7)}/
													{item.startDate.substring(8, 10)} -{" "}
													{item.endDate.substring(0, 4)}/
													{item.endDate.substring(5, 7)}/
													{item.endDate.substring(8, 10)}
												</label>
												<label className="location">{item.jobLocation}</label>
											</div>
										</div>
										<div className="summary">
											<p>{item.summary}</p>
										</div>
										<ul className="list">
											{item.bulletPoints?.map((list, index) => (
												<li key={index}>{list}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Timeline;
