import { createSlice } from "@reduxjs/toolkit";
import { forecastListState } from "../types/forecastList";

const initialState: forecastListState = {
  list: { forecastday: [] },
  isForecastListLoading: false,
  errorForecastList: false,
};

const forecastSlice = createSlice({
  name: "forecastList",
  initialState,
  reducers: {
    setErrorRetrievingForecastList(state, action) {
      return {
        ...state,
        errorForecastList: action.payload,
      }
    },
    setForecastListLoading(state, action) {
      return {
        ...state,
        isForecastListLoading: action.payload,
      }
    },
    setForecastList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const { setForecastList, setForecastListLoading, setErrorRetrievingForecastList} = forecastSlice.actions;

export default forecastSlice.reducer;
