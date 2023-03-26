import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkSwitch } from "../../redux/WeatherSlice";

function Footer() {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.weather.darkmode);
	const openUrl = (link) => {
		switch (link) {
			case "twitter":
				window.open("https://twitter.com/mosyocoder", "_blank", "noreferrer");
				break;
			case "instagram":
				window.open("https://www.instagram.com/mosyocoder", "_blank", "noreferrer");
				break;
			case "github":
				window.open("https://github.com/mosyocoder", "_blank", "noreferrer");
				break;
			case "linkedin":
				window.open("https://www.linkedin.com/in/enes-seval-162679230/", "_blank", "noreferrer");
				break;
			default:
				break;
		}
	};

	const themeHandler = () => {
		dispatch(darkSwitch());
		document.documentElement.setAttribute("data-theme", theme ? "light" : "dark");
	};

	return (
		<div className="footer">
			<div className="darkmode" onClick={themeHandler}>
				{theme ? "Switch Light Mode" : "Switch Dark Mode"}
			</div>
			<div className="icons">
				<FontAwesomeIcon icon={faTwitter} size="2x" onClick={() => openUrl("twitter")} />
				<FontAwesomeIcon icon={faInstagram} size="2x" onClick={() => openUrl("instagram")} />
				<FontAwesomeIcon icon={faGithub} size="2x" onClick={() => openUrl("github")} />
				<FontAwesomeIcon icon={faLinkedin} size="2x" onClick={() => openUrl("linkedin")} />
			</div>
			<p>Made with Mösyö Coder</p>
		</div>
	);
}

export default Footer;
