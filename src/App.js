import "./App.css";
import Daily from "./components/Daily/Daily";
import Footer from "./components/Footer/Footer";
import Forecast from "./components/Forecast/Forecast";
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
				<div className="forecastHourly">hourly</div>
				<div className="forecastWeekly">weekly</div>
			</div>
		</div>
	);
}

export default App;
