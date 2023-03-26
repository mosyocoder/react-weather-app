import moment from "moment/moment";
import React from "react";
import { useSelector } from "react-redux";

function Daily() {
	const daily = useSelector((state) => state.weather.daily.data);
	const status = useSelector((state) => state.weather.daily.status);
	let w = "";
	let sunset = "";
	let sunrise = "";
	if (status === "success") {
		const desc = daily.weather[0].description.split(" ");
		desc.map((word) => (w += word[0].toUpperCase() + word.slice(1) + " "));

		//calculate sunrise and sunset

		sunset = moment(daily.sys.sunset * 1000).format("HH:mm a");
		sunrise = moment(daily.sys.sunrise * 1000).format("HH:mm a");
	}
	console.log(daily);

	return (
		<div className="daily">
			{status === "success" && (
				<>
					<div className="dailyHeader">
						<p>
							{daily.name}, {daily.sys.country}
						</p>
						<img src="/icons/clear-day.svg" alt="" />
					</div>
					<div className="temp">
						<p>{Math.round(daily.main.temp)}°C</p>
						<p>
							{Math.round(daily.main.temp_min)}°C / {Math.round(daily.main.temp_max)}°C{" "}
						</p>
						<p>Feels Like: {Math.round(daily.main.feels_like)}°C</p>
						<p>{w}</p>
					</div>
					<div className="parameters">
						<div className="item">
							<img src="/parameter-icons/sunrise.png" alt="" />
							<p>{sunrise}</p>
						</div>
						<div className="item">
							<img src="/parameter-icons/sunset.png" alt="" />
							<p>{sunset}</p>
						</div>
						<div className="item">
							<img src="/parameter-icons/pressure.png" alt="" />
							<p>{daily.main.pressure} hPa</p>
						</div>
						<div className="item">
							<img src="/parameter-icons/humidity.png" alt="" />
							<p>{daily.main.humidity}%</p>
						</div>
						<div className="item">
							<img src="/parameter-icons/wind.png" alt="" />
							<p>{daily.wind.speed} m/s</p>
						</div>
						<div className="item">
							<img src="/parameter-icons/clouds.png" alt="" />
							<p>{daily.clouds.all}%</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default Daily;
