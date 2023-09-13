import { createSlice } from "@reduxjs/toolkit";
import { CityListState } from "../types/cityList";

const initialState: CityListState = {
  list: [],
  shouldShowCityList: false,
  isCityListLoading: false,
  searchString: "",
  errorCityList: false,
};

const cityListSlice = createSlice({
  name: "cityList",
  initialState,
  reducers: {
    setErrorRetrievingCityList(state, action) {
      return {
        ...state,
        errorCityList: action.payload,
      }
    },
    setSearchString(state, action) {
      return {
        ...state,
        searchString: action.payload,
      };
    },
    setIsCityListLoading(state, action) {
      return {
        ...state,
        isCityListLoading: action.payload,
      };
    },
    setShouldShowCityList(state, action) {
      return {
        ...state,
        shouldShowCityList: action.payload,
      };
    },
    setCityList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const {
  setCityList,
  setShouldShowCityList,
  setIsCityListLoading,
  setSearchString,
  setErrorRetrievingCityList
} = cityListSlice.actions;

export default cityListSlice.reducer;
