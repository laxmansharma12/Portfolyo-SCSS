import React from "react";
import "./Hero.scss";
import { useData } from "../../Context/DataProvider";
import Typewriter from "typewriter-effect";

const Hero = () => {
	const data = useData();
	return (
		<div className="HeroContainer">
			<div className="leftSection">
				<div className="title">
					{data?.about?.title.substring(0, 1)}
					<span className="o">{data?.about?.title.substring(1, 2)}</span>
					{data?.about?.title.substring(2, 8)}
					<span className="dev">
						{data?.about?.title.substring(8, 14)}
						<span>{data?.about?.title.substring(14, 15)}</span>
						{data?.about?.title.substring(15, 18)}
					</span>
				</div>
				<div className="subtitle">
					{data?.about?.subTitle.substring(0, 9)}
					<span>
						<Typewriter
							options={{
								strings: [
									data?.about?.subTitle.substring(10, 20),
									data?.about?.subTitle.substring(21, 37),
									data?.about?.subTitle.substring(41, 58),
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</span>
				</div>
				<p>{data?.about?.description.substring(0, 310)}</p>
				<div className="buttonContainer">
					<button className="resumeBtn">Resume</button>
					<button className="hireBtn">Hire me</button>
				</div>
			</div>
			<div className="RightSection">
				<div class="box"></div>
				<img
					data-cursor-text={data?.about?.name}
					src={data?.about?.avatar?.url}
					alt="avatar"
				/>
			</div>
		</div>
	);
};

export default Hero;
