const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";
const API_KEY = isBrowser ? window.API_KEY : process.env.OPENWEATHER_API_KEY;

// const url      = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// const outputEl = isBrowser ? document.querySelector("#config") : null;

// async function fetchWeather() {
//   if (!API_KEY) {
//     throw new Error(
//       isBrowser
//         ? "Missing API key. Make sure `config.js` loads before `script.js` and sets `window.API_KEY`."
//         : "Missing API key. Set OPENWEATHER_API_KEY in your terminal session.",
//     );
//   }

//   const response = await fetch(url);

//   // OpenWeather commonly returns JSON even on error
//   const data = await response.json().catch(() => null);

//   if (!response.ok) {
//     const message =
//       data?.message ||
//       (response.status === 401
//         ? "Invalid API key"
//         : `API error: ${response.status}`);
//     throw new Error(message);
//   }

//   return data;
// }

// fetchWeather()
//   .then((data) => {
//     const temp = data?.main?.temp;
//     const desc = data?.weather?.[0]?.description;
//     const name = data?.name || city;

//     const text = `City: ${name}\nTemp: ${temp}°C\nWeather: ${desc}`;
//     console.log(data);
//     if (outputEl) outputEl.textContent = text;
//     else console.log(text);
//   })
//   .catch((err) => {
//     console.error(err);
//     if (outputEl) outputEl.textContent = `Error: ${err.message}`;
//     else process.exitCode = 1;
//   });

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const statusE1 = document.querySelector("#status");
const resultE1 = document.querySelector("#weather-result");

//Individual display elements inside the result area
const cityNameE1 = document.querySelector("#city-name");
const countryE1 = document.querySelector("#country-code");
const iconE1 = document.querySelector("#weather-icon");
const tempE1 = document.querySelector("#temperature");
const descE1 = document.querySelector("#weather-description");
const feelsE1 = document.querySelector("#feels-like");
const humidE1 = document.querySelector("#humidity");
const windE1 = document.querySelector("#wind-speed");
const pressE1 = document.querySelector("#pressure");

function setStatus(message, isError = false) {
  statusE1.textContent = message;
  statusE1.className = isError ? "error" : "";
}

function renderWeather(data) {
  console.log(data.name, "From within result");
  cityNameE1.textContent = data.name;
  countryE1.textContent = data.sys.countryE1;

  tempE1.textContent = Math.round(data.main.temp);
  feelsE1.textContent = Math.round(data.main.feel_like) + "^C"; //todo
  humidE1.textContent = data.main.humidity + "%";
  windE1.textContent = data.wind.speed + "m/s";
  pressE1.textContent = data.wind.pressure + "hPa";

  descE1.textContent = data.weather[0].description;

  const iconCode = data.weather[0].icon;
  iconE1.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  iconE1.alt = data.weather[0].description;

  resultE1.style.display = "block";
}

async function getWeather() {
  const city = cityInput.value.trim() || 'Lagos';

  if (!city) {
    setStatus("Please enter a city name.", true);
    return;
  }

  resultE1.style.display = "none";
  setStatus("Searching...");
  searchBtn.disabled = true;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${encodeURIComponent(API_KEY ?? "")}&units=metric`;
    const response = await fetch(url);

    if (response.status === 401) {
      //401 (not authorized request)
      throw new Error(`Invalid API key. Check your configs`);
    }

    if (response.status === 404) {
      throw new Error(`City "${city}" was not found. Check the spelling.`);
    }

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const result = await response.json();

    setStatus("");

    renderWeather(result);
    // console.log(result)
  } catch (error) {
    resultE1.style.display = "none";
    setStatus(error.message, true);
  } finally {
    searchBtn.disabled = false;
  }
}

searchBtn.addEventListener("click", getWeather);
getWeather();
