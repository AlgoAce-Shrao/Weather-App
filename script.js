//steps:
//take the inputs
const cityNm = document.getElementById("cityInput");
const ct = document.getElementById("cityName").textContent;
const icon = document.getElementById("weatherIcon"); //
const tempElem = document.getElementById("temperature");
const descElem = document.getElementById("description");
const humiElem = document.getElementById("humidity");
const windSpElem = document.getElementById("wind");

//add the event of enter /clicking the search button
document
  .getElementById("searchBtn")
  .addEventListener("click", async function getData() {
    try {
      const city = cityNm.value.trim();
      const r = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89aa46828f62cd408617dbdb3333e446&units=metric`
      );
      //convert to json data
      const resp = await r.json();
      //remove the hidden property to show the results
      document.getElementById("weatherInfo").classList.remove("hidden");
      document.getElementById("cityName").textContent = `${city}`;
      document.getElementById(
        "weatherIcon"
      ).src = `https://openweathermap.org/img/wn/${resp.weather[0].icon}@2x.png`;
      tempElem.textContent = `Temperature: ${resp.main.temp} °C`;
      descElem.textContent = `Description: --${resp.weather[0].description}`;
      humiElem.textContent = `Humidity: ${resp.main.humidity}%`;
      windSpElem.textContent = `Wind Speed: --${resp.wind.speed} m/s`;
      console.log(`${resp.name}`);
    } catch (error) {
      document.getElementById("errorMsg").textContent = `Something went wrong,`;
      document.getElementById("weatherInfo").classList.add("hidden");
    }
  });
