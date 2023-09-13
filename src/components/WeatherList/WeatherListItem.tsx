import React from "react";
import { useDispatch } from "react-redux";
import { getSelectedCityData } from "../../api/base";
import {
  setLoadingCurrentCity,
  setCurrentCity,
  setErrorRetrievingCurrentCity,
} from "../../context/currentCitySlice";
import styled from "styled-components";
import { setShouldShowCityList } from "../../context/cityListSlice";
import { setForecastList, setForecastListLoading } from "../../context/forecastSlice";
import { City } from "../../types/cityList";

const StyledWeatherListItem = styled.div`
  cursor: pointer;
  padding: var(--spacing-1);

  &:hover {
    background-color: var(--light-grey-color);
  }
`;

function WeatherListItem(props: { city: City }) {
  const { city } = props;

  const dispatch = useDispatch();

  function hideCityList() {
    dispatch(setShouldShowCityList(false));
  }

  function setCurrentCityLoading(isLoading: boolean) {
    dispatch(setLoadingCurrentCity(isLoading));
  }

  function clearForecastList() {
    dispatch(setForecastListLoading(false))
    dispatch(setForecastList([]));
  }

  function setSelectedCity(){
    getSelectedCityData(city.lon.toString(), city.lat.toString()).then(
      (res) => {
        dispatch(setCurrentCity(res.data));
      }
    ).catch((error) => {
      dispatch(setErrorRetrievingCurrentCity(true));
    }).finally(() => {
      setCurrentCityLoading(false);
    }) ;
  }

  function handleCityClick() {
    setCurrentCityLoading(true)
    hideCityList()
    clearForecastList();
    setSelectedCity();
  }

  return (
    <StyledWeatherListItem onMouseDown={handleCityClick}>
      {city.name}, {city.region}, {city.country}
    </StyledWeatherListItem>
  );
}

export default WeatherListItem;
