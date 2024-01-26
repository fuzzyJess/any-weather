import './App.css';
import sampleWeatherData from "./data/weatherData.json"
import getWeatherDetails from "./APITools.js"
import fewCloudsImage from "./icons/few-clouds.png"
import aricity from "./img/aricity.webp"
import cloudy from "./img/cloudy.jpeg"
import { InfoDisplay } from './info_display/info_display';

function App() {
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
    weatherCondition = "Beclouded";
  } else {
    weatherCondition = "Susurrous";
  }

  const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const date = new Date()
  const today = daysOfWeek[date.getDay()]
  const reportBackgrounds = {
    "Petrichor": "./img/petrichor.jpeg",
    "Snowmagedden" : "./img/snow.jpeg",
    "Apricity" : "./img/aricity.webp",
    "Beclouded" : cloudy,
    "Susurrous" : "./img/wind.jpeg" 
  }
  const background = reportBackgrounds[weatherCondition]
  const latLonText = `Lat: ${sampleWeatherData.coord.lat} • Lon: ${sampleWeatherData.coord.lon}`;
  return (
    <div className='AnyWeather-App' style={{backgroundImage: `url(${cloudy})`}}>
    <InfoDisplay weather = {weatherCondition} day={today}/>
    </div>
  )
}


export default App;
