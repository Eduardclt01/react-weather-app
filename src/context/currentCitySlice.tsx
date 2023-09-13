import { createSlice } from "@reduxjs/toolkit";
import { CurrentCityState, CurrentCity } from "../types/currentCity";

const initialState: CurrentCityState = {
  loading: false,
  cityLoaded: false,
  city: {} as CurrentCity,
  errorCurrentCity: false,
};

const currentCitySlice = createSlice({
  name: "currentCity",
  initialState,
  reducers: {
    setErrorRetrievingCurrentCity(state, action) {
      return {
        ...state,
        errorCurrentCity: action.payload,
      };
    },
    setLoadingCurrentCity(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setCurrentCity(state, action) {
      return {
        ...state,
        city: action.payload,
        cityLoaded: true,
      };
    },
  },
});

export const {
  setCurrentCity,
  setLoadingCurrentCity,
  setErrorRetrievingCurrentCity,
} = currentCitySlice.actions;

export default currentCitySlice.reducer;
