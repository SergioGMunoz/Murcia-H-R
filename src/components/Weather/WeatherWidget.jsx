import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios";

const WeatherWidget = ({ municipio }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          municipio
        )}&count=1&language=es&format=json`;

        const geoResponse = await axios.get(geocodeUrl);
        const geoData = geoResponse.data;

        if (geoData.results && geoData.results.length > 0) {
          const { latitude, longitude } = geoData.results[0];

          const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Madrid&forecast_days=5`;

          const weatherResponse = await axios.get(weatherUrl);
          const weatherData = weatherResponse.data;

          setWeather(weatherData.daily);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [municipio]);

  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code <= 48) return "☁️";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "🌨️";
    if (code <= 82) return "🌦️";
    return "⛈️";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    return days[date.getDay()];
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <CircularProgress size={30} sx={{ color: "#b88e2f" }} />
      </Box>
    );
  }

  if (!weather) return null;

  return (
    <div className="weather-widget">
      <h3>Previsión del Tiempo</h3>
      <div className="weather-days">
        {weather.time.map((date, index) => (
          <div key={date} className="weather-day">
            <div className="weather-day__date">{formatDate(date)}</div>
            <div className="weather-day__icon">
              {getWeatherIcon(weather.weathercode[index])}
            </div>
            <div className="weather-day__temp">
              <span className="temp-max">{Math.round(weather.temperature_2m_max[index])}°</span>
              <span className="temp-min">{Math.round(weather.temperature_2m_min[index])}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;
