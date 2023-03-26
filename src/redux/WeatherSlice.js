import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeatherCity = createAsyncThunk("weather/getWeatherCity", async (city) => {
	const val = city.value.split(" ");

	const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${val[0]}&lon=${val[1]}&appid=25c5dc04b42ce8825f70e8bb3dc11c29&units=metric`);
	return res.data;
});

export const WeatherSlice = createSlice({
	name: "weather",
	initialState: {
		darkmode: false,
		daily: {
			status: "idle",
			data: [],
		},
		forecast: {
			status: "idle",
			data: [],
		},
	},
	reducers: {
		darkSwitch: (state) => {
			state.darkmode = !state.darkmode;
		},
	},
	extraReducers: {
		[getWeatherCity.pending]: (state) => {
			state.daily.status = "pending";
		},
		[getWeatherCity.fulfilled]: (state, action) => {
			state.daily.data = action.payload;
			state.daily.status = "success";
		},
		[getWeatherCity.rejected]: (state) => {
			state.daily.status = "rejected";
		},
	},
});

export const { darkSwitch } = WeatherSlice.actions;
export default WeatherSlice.reducer;
