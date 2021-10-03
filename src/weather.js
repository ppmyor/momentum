const API_KEY = "74f0ddea5bae1a4408d1237720911899";

function onGeoOk(position)  {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        temp.innerText = `${Math.round(data.main.temp)}`;
        weather.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError()   {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);