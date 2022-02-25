'use strict';
const clock = document.getElementById('clock');

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString('en-ZA', { hour12: false });
  clock.innerHTML = currentTime;
}, [1000]);
// _____________________________

const currentLocation = document.getElementById('currentLocation');
const showIcon = document.getElementById('showIcon');
const currentTemp = document.getElementById('currentTemp');
const feelsLike = document.getElementById('feelsLike');
const description = document.getElementById('description');

// get Lat and Long
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(storeLocation);
  }
};

// store postion
const storeLocation = (pos) => {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  console.log(`lat ${lat} \nlon ${lon}`);
  // eslint-disable-next-line no-undef
  const tempUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`;
  // eslint-disable-next-line no-undef
  const locationUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`;
  fetchData(tempUrl);
  fetchCurrentLocation(locationUrl);
};
const fetchCurrentLocation = locationUrl => {
  fetch(locationUrl)
    .then(res => res.json())
    .then(data => {
      const location = `${data[0].name}, ${data[0].country}`;
      currentLocation.innerHTML = location;
    });
};

// request data from OpenWeatherMap
const fetchData = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      handleWeather(data);
    })
    .catch(e => console.log(e.message));
};

const handleWeather = (data) => {
  const iconId = data.current.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
  showIcon.src = iconUrl;

  const temp = `${convertToDeg(data.current.temp)}&deg;`;
  const feel = `Feels Like ${convertToDeg(data.current.feels_like)}&deg;,`;
  const mainDesc = data.current.weather[0].main;
  const desc = data.current.weather[0].description;

  currentTemp.innerHTML = temp;
  feelsLike.innerHTML = feel;
  description.innerHTML = `${mainDesc} - ${desc}`;
};

const convertToDeg = (kelvin) => {
  return Math.round(kelvin - 273.15);
};
window.onload = getLocation();
