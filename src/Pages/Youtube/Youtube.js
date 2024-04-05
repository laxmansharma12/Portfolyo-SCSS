import React, { useRef, useState } from "react";
import "./Youtube.scss";
import ReactPlayer from "react-player";
import { useData } from "../../Context/DataProvider";
import { FaPlay, FaPause } from "react-icons/fa";
import "./Youtube.scss";

const Youtube = () => {
	const data = useData();
	const [isPlaying, setIsPlaying] = useState(false); // State to track if video is playing or paused
	const videoEle = useRef();

	// Filter and sort videos where enabled is true
	const sortedVideos = data?.youtube
		?.filter((video) => video.enabled === true)
		?.sort((a, b) => a.sequence - b.sequence);

	const handleTogglePlay = () => {
		if (videoEle.current.playing === true) {
			videoEle.current.playing = false;
			setIsPlaying(true);
		} else {
			videoEle.current.playing = true;
			setIsPlaying(false);
		}
	};

	return (
		<div className="youtubeContainer">
			{sortedVideos &&
				sortedVideos.map((video, index) => (
					<div className="video" key={index}>
						<label>{video.title}</label>
						<ReactPlayer
							ref={videoEle}
							url={video.url || " "}
							light={false}
							controls={true}
							pip={true}
							width={window.innerWidth <= 640 ? "100%" : ""}
							height={window.innerWidth <= 640 ? "100%" : ""}
						/>

						{!video.url && (
							<>
								<img src={video.image} alt=" " />
								<div className="PlayPausebutton">
									<div className="button">
										<div>
											<button onClick={() => handleTogglePlay()}>
												{isPlaying ? (
													<FaPause
														size={window.innerWidth <= 640 ? "20" : ""}
													/>
												) : (
													<FaPlay size={window.innerWidth <= 640 ? "20" : ""} />
												)}
											</button>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				))}
		</div>
	);
};

export default Youtube;
