// fire get location function

const currentLocation = document.getElementById('currentLocation');
const showIcon = document.getElementById('showIcon')



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
    fetchData(tempUrl);
    console.log(`lat ${lat} \n lon ${lon}`)
}

// request data from OpenWeatherMap
const fetchData = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.current.weather[0].icon)
            handleCurrentWeather(data);
        })
        .catch(e => console.log(e.message))
}

const handleCurrentWeather = (data) => {
    let location = data.timezone;
    let iconId = data.current.weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + iconId + ".png";
    currentLocation.innerHTML = location;
    showIcon.src = iconUrl;
}
window.onload = getLocation();