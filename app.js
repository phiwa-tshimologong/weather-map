// fire get location function

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
    let tempUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`;
    let locationUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${-26.12223911073801}&lon=${27.89586220554027}&limit=5&appid=${API_KEY}`;
    fetchData(tempUrl);
    fetchCurrentLocation(locationUrl);
}
const fetchCurrentLocation = locationUrl => {
    fetch(locationUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let location = data[0].name;
            currentLocation.innerHTML = location;
        })
}

// request data from OpenWeatherMap
const fetchData = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            handleWeather(data);
            let iconId = data.current.weather[0].icon;
            let iconUrl = "http://openweathermap.org/img/w/" + iconId + ".png"
            showIcon.src = iconUrl;
        })
        .catch(e => console.log(e.message))
}

const handleWeather = (data) => {
    let temp = `${convertToDeg(data.current.temp)}&deg;`;
    let feel = `Feels Like ${convertToDeg(data.current.feels_like)}&deg;`;
    currentTemp.innerHTML = temp;
    feelsLike.innerHTML = feel;

}

const convertToDeg = (kelvin) => {
    return Math.round(kelvin - 273.15);
}
window.onload = getLocation();