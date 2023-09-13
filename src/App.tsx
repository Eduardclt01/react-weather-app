import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import WeartherDetails from "./components/Pages/WeahterDetails/WeatherDetails";
import { useDispatch } from "react-redux";
import {
  setLoadingCurrentCity,
  setCurrentCity,
  setErrorRetrievingCurrentCity,
} from "./context/currentCitySlice";
import { getSelectedCityData } from "./api/base";

function App() {
  const dispatch = useDispatch();

  function setCityFromLocation(long: number, lat: number) {
    dispatch(setLoadingCurrentCity(true));
    dispatch(setErrorRetrievingCurrentCity(false));

    getSelectedCityData(long.toString(), lat.toString())
      .then((res) => {
        dispatch(setCurrentCity(res.data));
      })
      .catch((error) => {
        dispatch(setErrorRetrievingCurrentCity(true));
      })
      .finally(() => {
        dispatch(setLoadingCurrentCity(false));
      });
  }

  function getUserLocationFromBrowser() {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location)
          setCityFromLocation(
            location.coords.longitude,
            location.coords.latitude
          );
      });
    }
  }

  useEffect(() => {
    getUserLocationFromBrowser();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weartherDetails" element={<WeartherDetails />} />
      </Routes>
    </>
  );
}

export default App;
