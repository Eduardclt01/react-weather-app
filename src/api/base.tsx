import axios from "axios";

const axClient = axios.create({
  baseURL: "http://api.weatherapi.com/v1/",
  params: {
    key: process.env.REACT_APP_WEATHERAPI_KEY,
  },
});

export function getCities(searchQuery: String) {
  return axClient.get("/search.json", { params: { q: searchQuery } });
}

export function getSelectedCityData(longitude: String, latitude: String) {
  return axClient.get("/current.json", {
    params: { q: `${latitude},${longitude}` },
  });
}

export function getSelectedCityForecastData(
  longitude: String,
  latitude: String,
  numberOfDays: String
) {
  return axClient.get("/forecast.json", {
    params: {
      q: `${latitude},${longitude}`,
      api: "no",
      alerts: "no",
      days: numberOfDays,
    },
  });
}
