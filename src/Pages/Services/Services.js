import React from "react";
import { useData } from "../../Context/DataProvider";
import "./Services.scss";

const Services = () => {
	const data = useData();

	// Filter services where enabled is true
	const enabledServices = data?.services?.filter(
		(service) => service.enabled === true
	);

	return (
		<div className="servicesContainer">
			<h3>MY SERVICES</h3>
			<div className="InnerContainer">
				{enabledServices &&
					enabledServices.map((service) => (
						<div className="serviceItem" key={service.id}>
							<img src={service.image.url} alt="" />
							<div className="serviceDesc">
								<label className="name">{service.name}</label>
								<p className="description">{service.desc}</p>
							</div>
							<div className="charge">
								<label className="text">From</label>
								<label className="price">{service.charge}</label>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Services;
