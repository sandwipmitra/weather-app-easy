const apiKey = "473afae85b3295dd5b7137c0af8c6ed5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Khulna";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";




}
checkWeather();

