import "./App.css";
import sampleWeatherData from "./data/weatherData.json";
import getWeatherDetails from "./APITools.js";
import fewCloudsImage from "./icons/few-clouds.png";

function WeatherReport() {
  // const data = getWeatherDetails(10, 10)
  const description = sampleWeatherData.weather[0].description;
  const weatherCode = sampleWeatherData.weather[0].id;
  console.log(weatherCode);
  let weatherCondition;

  if (200 <= weatherCode && weatherCode < 300) {
    weatherCondition = "Petrichor";
  } else if (300 <= weatherCode && weatherCode < 600) {
    weatherCondition = "Petrichor";
  } else if (600 <= weatherCode && weatherCode < 700) {
    weatherCondition = "Snowmagedden";
  } else if (weatherCode === 800) {
    weatherCondition = "Apricity";
  } else if (801 <= weatherCode && weatherCode < 805) {
    weatherCondition = "Clouds";
  } else {
    weatherCondition = "Susurrous";
  }

  const latLonText = `Lat: ${sampleWeatherData.coord.lat} • Lon: ${sampleWeatherData.coord.lon}`;
  return (
    <div>
      <header className="AnyWeather-Header">{weatherCondition}</header>
      <div className="AnyWeather-Description">
        <div className="align-left">{description}</div>
        <div className="align-right">{latLonText}</div>
      </div>
      <div>
        <img
          src={fewCloudsImage}
          alt="black line icon of two clouds"
          width="500"
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="AnyWeather-App">
      <WeatherReport />
    </div>
  );
}

export default App;
