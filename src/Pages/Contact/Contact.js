import React from "react";
import "./Contact.scss";
import { useData } from "../../Context/DataProvider";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { BsMailboxFlag } from "react-icons/bs";

const Contact = () => {
	const data = useData();
	return (
		<div className="contactContainer">
			<h3>Contact</h3>
			<div className="contactInnerContainer">
				<div className="contactTitles">
					<h1>Get In Touch</h1>
					<p>{data?.about?.subTitle}</p>

					<div className="contactTypes">
						<div className="item">
							<MdOutlinePhoneInTalk size={40} />
							<span>{data?.about?.phoneNumber}</span>
						</div>
						<div className="item">
							<IoHome size={40} />
							<span>{data?.about?.address}</span>
						</div>
						<div className="item">
							<BsMailboxFlag size={40} />
							<span>{data?.about?.contactEmail}</span>
						</div>
					</div>
					<div className="socialHandles">
						{data?.social_handles?.map((icons) => (
							<a href={icons.url}>
								<img src={icons.image?.url} alt="" />
							</a>
						))}
					</div>
				</div>
				<form>
					<div className="nameField">
						<label>
							Name <span>*</span>
						</label>
						<input type="text" required />
					</div>
					<div className="mailField">
						<label>
							Email <span>*</span>
						</label>
						<input type="email" required />
					</div>
					<div className="PhoneField">
						<label>Phone</label>
						<input type="number" />
					</div>
					<div className="messageField">
						<label>Message</label>
						<textarea />
					</div>
					<button type="submit">SEND MESSAGE</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
