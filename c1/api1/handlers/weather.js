const {
  getCityWeather,
  getFiveDaysForecastForCity,
  getCityWeatherByLongitudeAndLatitude, 
} = require("../pkg/openweathermap");

const getForCity = async (req, res) => {
  try {
    const weather = await getCityWeather(req.params.city);
    return res.status(200).send(weather);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error!");
  }
};

const getFiveDayForecast = async (req, res) => {
  try {
    const { lat, lon } = req.params;
    const forecast = await getFiveDaysForecastForCity(lat, lon);

    return res.status(200).send(forecast);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error!");
  }
};

const getCityWeatherLonLat = async (req, res) => {
  try {
    const { lat, lon } = req.params;

    const weather = await getCityWeatherByLongitudeAndLatitude(lat, lon);

    return res.status(200).send(weather);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error!");
  }
};

module.exports = {
  getForCity,
  getFiveDayForecast,
  getCityWeatherLonLat,
};