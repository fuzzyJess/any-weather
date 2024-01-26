import './App.css';
import sampleWeatherData from "./data/weatherData.json"
import getWeatherDetails from "./APITools.js"
import fewCloudsImage from "./icons/few-clouds.png"
import { InfoDisplay } from './info_display/info_display';

function WeatherReport({word}) {
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
    <>
    <h1>{word}</h1>
    <InfoDisplay></InfoDisplay>
    </>
  )
}

function App() {
  return (
    <div className="AnyWeather-App">
      <WeatherReport word="Petrichor"/>
    </div>
  );
}

export default App;
