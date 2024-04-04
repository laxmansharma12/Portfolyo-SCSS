import React from "react";
import "./Footer.scss";
import { useData } from "../../Context/DataProvider";

const Footer = () => {
	const data = useData();
	return (
		<div className="footerContainer">
			<div className="FooterInnerContainer">
				<label>Copyright © 2023. All rights reserved.</label>
				<span className="developer">
					Developed by <span className="name">{data?.about?.name}</span>
				</span>
			</div>
		</div>
	);
};

export default Footer;
