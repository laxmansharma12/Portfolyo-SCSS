import React, { useState } from "react";
import Hero from "../HeroSection/Hero";
import Navbar from "../Navbar/Navbar";
import "./HomePage.scss";
import AboutPage from "../AboutPage/AboutPage";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Project from "../Projects/Project";
import ProjectDetails from "../Projects/ProjectDetails";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Scrollbar from "../ScrollBar/Scrollbar";
import Timeline from "../Timeline/Timeline";
import Youtube from "../Youtube/Youtube";

const HomePage = () => {
	const [openModal, setOpenModal] = useState({ state: false, project: null });

	return (
		<div className="Home">
			<div className="navbar">
				<Navbar />
			</div>
			<div id="home" className="topContainer">
				<div id="hero" className="hero">
					<Hero />
				</div>
				<div id="about" className="about">
					<AboutPage />
				</div>
			</div>
			{/* <div className="midContainer">
				<div id="services" className="services">
					<Services />
				</div>

				<div id="skills" className="skills">
					<Skills />
				</div>
			</div>
			<div id="project" className="projects">
				<Project openModal={openModal} setOpenModal={setOpenModal} />
			</div>
			<div id="timeline" className="timeline">
				<Timeline />
			</div>
			<div id="testimonials" className="testimonials">
				<Testimonials />
			</div>
			<div className="youtube">
				<Youtube />
			</div>
			<div id="contact" className="contact">
				<Contact />
			</div>
			<div className="footer">
				<Footer />
			</div>
			{openModal.state && (
				<ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
			)}
			<Scrollbar /> */}
		</div>
	);
};

export default HomePage;
