import React from "react";
import "./AboutPage.scss";
import { useData } from "../../Context/DataProvider";

const AboutPage = () => {
	const data = useData();

	return (
		<div className="aboutContainer">
			<div class="divider">
				<span>ABOUT ME</span>
			</div>
			<div className="innerContainer">
				<div className="leftSection">
					<div className="topDiv"></div>
					<img
						data-cursor-text={data?.about?.name}
						src={data?.about?.avatar?.url}
						alt=""
					/>
					<label className="border"></label>
					<div className="bottomDiv"></div>
				</div>
				<div className="midSection"></div>
				<div className="rightSection">
					<div className="aboutDetails">
						<div className="name">
							<span>{data?.about?.name}</span>
							<div className="description">
								<p>{data?.about?.description}</p>
							</div>
							<div className="experience">
								<div className="year">
									<span className="text">Experience: </span>
									<span className="number">{data?.about?.exp_year}</span>
								</div>
								<div className="projects">
									<span className="text">Projects Completed: </span>
									<span className="number">{data?.about?.some_total}</span>
								</div>
							</div>
						</div>
						<div className="address">
							<p className="pnumber">
								<span className="text">Phone no: </span>
								<span className="number">{data?.about?.phoneNumber}</span>
							</p>
							<p className="mail">
								<span className="text">Email: </span>
								<span className="number">{data?.about?.contactEmail}</span>
							</p>
							<p className="quote">
								<span className="text">My Quote: </span>
								<span className="number">{data?.about?.quote}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
