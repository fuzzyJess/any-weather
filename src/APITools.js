export const getWeatherDetails = (lat, lon) => {
  const apiKey = 'inset key here'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    return data
  })
  .catch(error => {
    console.error('Error:', error);
  });
}