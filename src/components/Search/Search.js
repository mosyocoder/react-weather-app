import axios from "axios";
import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import "./style.css";

function Search() {
	const option = {
		method: "GET",
		url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
		headers: {
			"X-RapidAPI-Key": "4019612f98msh79acfaf515dd398p156a92jsnad89244c6d47",
			"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
		},
	};

	const loadOptions = (inputValue) => {
		return axios
			.request(option, (option.params = { namePrefix: `${inputValue}` }))
			.then((response) => {
				return {
					options: response.data.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			})
			.catch((error) => console.log(error));
	};

	const onChangeHandler = (value) => {
		console.log(value);
	};

	return (
		<div className="search">
			<div className="searchInput">
				<AsyncPaginate placeholder="Search for city" debounceTimeout={600} onChange={onChangeHandler} loadOptions={loadOptions} />
			</div>
			<div className="dayNightToggle">
				<input type="checkbox" id="toggle" className="toggle--checkbox" />
				<label htmlFor="toggle" className="toggle--label">
					<span className="toggle--label-background"></span>
				</label>
				<div className="background"></div>
			</div>
		</div>
	);
}

export default Search;
