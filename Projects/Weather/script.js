
const apiKey = 'e10beb12b8592b7a7cffe2326d14c028';
const searchBar = document.querySelector('#input');
const searchBtn = document.querySelector('.s-btn');
const weatherIcon = document.querySelector('.weather-icon');
async function check(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (response.status === 404) {
        document.querySelector('.e-cont').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else {
        let data = await response.json();
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humi').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " Km/h";
        if (data.weather[0].main === "Drizzle")
            weatherIcon.src = "../../HTML_CSS/images/drizzle.png";
        else if (data.weather[0].main === "Mist")
            weatherIcon.src = "../../HTML_CSS/images/mist.png";
        else if (data.weather[0].main === "Clear")
            weatherIcon.src = "../../HTML_CSS/images/clear.png";
        else if (data.weather[0].main === "Clouds")
            weatherIcon.src = "../../HTML_CSS/images/clouds.png";
        else if (data.weather[0].main === "Rain")
            weatherIcon.src = "../../HTML_CSS/images/rain.png";
        else if (data.weather[0].main === "Snow")
            weatherIcon.src = "../../HTML_CSS/images/snow.png";
        document.querySelector('.weather').style.display = "none";
        document.querySelector('.e-cont').style.display = "block";
    }
}
searchBtn.addEventListener('click', () => {
    check(searchBar.value);
});