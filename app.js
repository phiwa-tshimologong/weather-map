const clock = document.getElementById('clock');

setInterval(() => {
    let currentTime = new Date().toLocaleTimeString('en-ZA', {hour12: false});
    clock.innerHTML = currentTime;
},[1000]);
// _____________________________

const currentLocation = document.getElementById('currentLocation');
const showIcon = document.getElementById('showIcon');
const currentTemp = document.getElementById('currentTemp');
const feelsLike = document.getElementById('feelsLike');


// get Lat and Long
const getLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(storeLocation);
    }
};

// store postion
const storeLocation = (pos) => {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    console.log(`lat ${lat} \nlon ${lon}`)
    let tempUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`;
    let locationUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`;
    fetchData(tempUrl);
    fetchCurrentLocation(locationUrl);
}
const fetchCurrentLocation = locationUrl => {
    fetch(locationUrl)
        .then(res => res.json())
        .then(data => {
            let location = `${data[0].name}, ${data[0].country}`;
            currentLocation.innerHTML = location;
        })
}

// request data from OpenWeatherMap
const fetchData = (url) => {
    fetch(url)
        .then(res => res.json())
<<<<<<< HEAD
        .then(data => { 
            console.log(data.current.weather[0].icon)
            handleCurrentWeather(data);
=======
        .then(data => {
            handleWeather(data);
            let iconId = data.current.weather[0].icon;
            let iconUrl = "http://openweathermap.org/img/w/" + iconId + ".png"
            showIcon.src = iconUrl;
>>>>>>> 48b474cb3f323b8f4447d40066fcc18b808583c0
        })
        .catch(e => console.log(e.message))
}

<<<<<<< HEAD
const handleCurrentWeather = (data) => {
    let location = data.timezone;
    let iconId = data.current.weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + iconId + ".png";
    currentLocation.innerHTML = location;
    showIcon.src = iconUrl;
=======
const handleWeather = (data) => {
    let temp = `${convertToDeg(data.current.temp)}&deg;`;
    let feel = `Feels Like ${convertToDeg(data.current.feels_like)}&deg;`;
    currentTemp.innerHTML = temp;
    feelsLike.innerHTML = feel;

}

const convertToDeg = (kelvin) => {
    return Math.round(kelvin - 273.15);
>>>>>>> 48b474cb3f323b8f4447d40066fcc18b808583c0
}
window.onload = getLocation();