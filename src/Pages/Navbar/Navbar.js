import React, { useState } from "react";
import "./Navbar.scss";
import { useData } from "../../Context/DataProvider";
import Headroom from "react-headroom";
import Hamburger from "hamburger-react";

const Navbar = () => {
	const data = useData();
	const [isOpen, setOpen] = useState(false);
	return (
		<Headroom>
			<div className="Nav">
				<a href="#home" className="logo">
					{data?.about?.name.substring(0, 1)}
					<span>{data?.about?.name.substring(1, 2)}</span>
					{data?.about?.name.substring(2, 4)}
				</a>

				<div className="NavItems">
					<ul class="nav">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#project">Projects</a>
						</li>
						<li>
							<a href="#timeline">Education</a>
						</li>
						<li>
							<a href="#timeline">Experience</a>
						</li>
						<li>
							<a href="#testimonials">Testimonial</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
				<div className="mobileNav">
					<Hamburger toggled={isOpen} toggle={setOpen} />
					{isOpen && (
						<div className="mobNavItems">
							<ul class="nav">
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#services">Services</a>
								</li>
								<li>
									<a href="#skills">Skills</a>
								</li>
								<li>
									<a href="#project">Projects</a>
								</li>
								<li>
									<a href="#timeline">Education</a>
								</li>
								<li>
									<a href="#timeline">Experience</a>
								</li>
								<li>
									<a href="#testimonials">Testimonial</a>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</Headroom>
	);
};

export default Navbar;
