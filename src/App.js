import "./App.css";
import Daily from "./components/Daily/Daily";
import Footer from "./components/Footer/Footer";
import ForecastHourly from "./components/Forecast/ForecastHourly";
import Search from "./components/Search/Search";

function App() {
	return (
		<div className="container">
			<div className="left">
				<Search />
				<Daily />
				<Footer />
			</div>
			<div className="content">
				<ForecastHourly />
				<div className="forecastWeekly">weekly</div>
			</div>
		</div>
	);
}

export default App;
