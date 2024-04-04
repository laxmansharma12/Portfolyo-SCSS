import React from "react";
import "./Testimonials.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useData } from "../../Context/DataProvider";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Arrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "black",
				borderRadius: "50%",
				boxShadow: "none",
			}}
			onClick={onClick}
		/>
	);
}

const Testimonials = () => {
	const data = useData();

	// Filter testimonials where enabled is true
	const enabledTestimonials = data?.testimonials?.filter(
		(testimonial) => testimonial.enabled === true
	);

	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		autoplay: true,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		nextArrow: <Arrow />,
		prevArrow: <Arrow />,
		responsive: [
			{
				breakpoint: 1320,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1135,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 554,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<div className="testimonialsContainer">
			<h3>TESTIMONIALS</h3>
			<div className="testimonialsInnerContainer">
				<Slider {...settings}>
					{enabledTestimonials &&
						enabledTestimonials.map((testimonial, index) => (
							<div className="testimonial" key={index}>
								<div className="item">
									<div className="left">
										<img src={testimonial.image?.url} />
										<label className="name">{testimonial.name}</label>
										<label className="position">{testimonial.position}</label>
									</div>

									<p className="review">
										<ImQuotesLeft size={30} /> {testimonial.review}
										<span>
											<ImQuotesRight size={30} />
										</span>
									</p>
								</div>
							</div>
						))}
				</Slider>
			</div>
		</div>
	);
};

export default Testimonials;
