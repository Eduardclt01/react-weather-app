import { configureStore } from "@reduxjs/toolkit";

import currentCityReducer from "./context/currentCitySlice";
import cityListReducer from "./context/cityListSlice";
import forecastListReducer from "./context/forecastSlice";

const store = configureStore({
  reducer: {
    currentCity: currentCityReducer,
    cityList: cityListReducer,
    forecastList: forecastListReducer,
  },
});

export default store;
