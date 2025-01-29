
const dotenv = require("dotenv");
dotenv.config(); // Cargar variables de entorno desde .env

const API_KEYS = {
  openWeatherMap: process.env.OPENWEATHERMAP_API_KEY,
  weatherAPI: process.env.WEATHERAPI_API_KEY,
  weatherStack: process.env.WEATHERSTACK_API_KEY
};

// Consultar clima desde OpenWeatherMap
async function getWeatherFromOpenWeatherMap() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Medellin,CO&units=metric&appid=${API_KEYS.openWeatherMap}`;
  return fetchWeather(url, "OpenWeatherMap");
}

// Consultar clima desde WeatherAPI
async function getWeatherFromWeatherAPI() {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEYS.weatherAPI}&q=Medellin`;
  return fetchWeather(url, "WeatherAPI");
}

// Consultar clima desde WeatherStack
async function getWeatherFromWeatherStack() {
  const url = `http://api.weatherstack.com/current?access_key=${API_KEYS.weatherStack}&query=Medellin`;
  return fetchWeather(url, "WeatherStack");
}

// Función genérica para obtener datos del clima
async function fetchWeather(url, source) {
const fetch = (await import('node-fetch')).default;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error en ${source}: ${response.status}`);
    const data = await response.json();

    let temperature;
    if (source === "OpenWeatherMap") {
      temperature = data.main.temp;
    } else if (source === "WeatherAPI") {
      temperature = data.current.temp_c;
    } else if (source === "WeatherStack") {
      temperature = data.current.temperature;
    }

    return { source, temperature };
  } catch (error) {
    console.error(`❌ Error obteniendo datos de ${source}:`, error.message);
    throw error; // Para que Promise.race continúe con otras APIs
  }
}

// Ejecutar Promise.race con las tres APIs
async function getFastestWeather() {
  try {
    const fastestWeather = await Promise.race([
      getWeatherFromOpenWeatherMap(),
      getWeatherFromWeatherAPI(),
      getWeatherFromWeatherStack()
    ]);

    console.log(`🌤️ Clima en Medellín desde ${fastestWeather.source}: ${fastestWeather.temperature}°C`);
  } catch (error) {
    console.log("🚨 No se pudo obtener el clima.");
  }
}

getFastestWeather();