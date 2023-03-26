import React from "react";
import { useSelector } from "react-redux";

function ForecastHourly() {
	const data = useSelector((state) => state.weather.forecastHourly.data);
	const status = useSelector((state) => state.weather.forecastHourly.status);
	let arr = [];
	if (status === "success") {
		data.list.map((item) => {
			let w = "";
			item.weather[0].description.split(" ").map((word) => (w += word[0].toUpperCase() + word.slice(1) + " "));
			arr.push(w);
		});
	}

	return (
		<div className="forecastHourly">
			{data &&
				data.list.map((item, key) => (
					<div className="card" key={key}>
						<p>{item.dt_txt.slice(11, 16)}</p>
						<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />

						<span className="feelsLikeDegree">
							<p>{Math.round(item.main.temp_min)}°C</p>
							<p>{Math.round(item.main.temp_max)}°C</p>
						</span>
						<p>{arr[key]}</p>
					</div>
				))}
		</div>
	);
}

export default ForecastHourly;
