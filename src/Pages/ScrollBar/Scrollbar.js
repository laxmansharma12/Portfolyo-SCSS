import React, { useState, useEffect } from "react";
import "./Scrollbar.scss";
import { FaArrowUp } from "react-icons/fa";

const Scrollbar = () => {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const updateScrollPercentage = () => {
		const scrollTop = document.documentElement.scrollTop;
		const windowHeight = window.innerHeight;
		const fullHeight = document.documentElement.scrollHeight;
		const scrolled = scrollTop / (fullHeight - windowHeight);
		setScrollPercentage(scrolled * 100);
	};

	useEffect(() => {
		const handleScroll = () => {
			updateScrollPercentage();
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const radius = 28;
	const strokeWidth = 6;
	const normalizedRadius = radius - strokeWidth * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset =
		circumference - (scrollPercentage / 100) * circumference;

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (scrollPercentage <= 0) {
		return null; // Hide the progress bar if scroll percentage is 0 or less
	}

	return (
		<div className="progressbar" onClick={scrollToTop}>
			<svg height={radius * 2} width={radius * 2}>
				<rect
					x="10"
					y="10"
					width={35}
					height={35}
					fill="#fff"
					rx="50%"
					ry="50%"
				/>
				<circle
					stroke="#ddd"
					fill="transparent"
					style={{ backgroundColor: "#fff" }}
					strokeWidth={strokeWidth}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
				<circle
					stroke="#007bff"
					fill="transparent"
					strokeWidth={strokeWidth}
					strokeDasharray={circumference + " " + circumference}
					style={{ strokeDashoffset, backgroundColor: "#fff" }}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
			</svg>
			<div className="arrowIcon">
				<FaArrowUp style={{ fontSize: "20px", color: "#007bff" }} />
			</div>
		</div>
	);
};

export default Scrollbar;
