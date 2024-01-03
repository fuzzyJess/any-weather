import './App.css';
import sampleWeatherData from "./data/weatherData.json"
import getWeatherDetails from "./APITools.js"
import fewCloudsImage from "./icons/few-clouds.png"

function WeatherReport() {
  // const data = getWeatherDetails(10, 10)
  const description = sampleWeatherData.weather[0].description
  const latLonText = `Lat: ${sampleWeatherData.coord.lat} • Lon: ${sampleWeatherData.coord.lon}`
  return (
    <div>
      <div className="AnyWeather-Description">
        <div className="align-left">
          {description}
        </div>
        <div className="align-right">
          {latLonText}
        </div>
      </div>
      <div>
        <img src={fewCloudsImage} alt="black line icon of two clouds" width="500"/>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="AnyWeather-App">
      <header className="AnyWeather-Header">
        Any Weather
      </header>
      <WeatherReport />
    </div>
  );
}

export default App;
