import React from "react";
import { useSelector } from "react-redux";
import WeatherListItem from "./WeatherListItem";
import { useTranslation } from "react-i18next";
import { City, CityListState } from "../../types/cityList";

function WeatherList() {
  const cityList = useSelector(
    (state: { cityList: CityListState }) => state.cityList
  );

  const { t } = useTranslation();

  function noResultsFound() {
    return (
      cityList.list.length <= 0 &&
      !cityList.isCityListLoading &&
      cityList.searchString.length >= 3 && 
      !cityList.errorCityList
    );
  }

  function searchStringTooShort() {
    return cityList.searchString.length;
  }

  function cityIsLoading() {
    return cityList.isCityListLoading;
  }

  function cityIsError() {
    return cityList.errorCityList;
  }

  return (
    <>
      {searchStringTooShort() < 3 && <p>{t("threeCharsError")}</p>}

      {noResultsFound() && <p>{t("noResults")}</p>}

      {cityIsLoading() && <p>{t("loading")}</p>}

      {cityIsError() && <p>{t("error")}</p>}

      {cityList.list &&
        cityList.list?.map((city: City) => <WeatherListItem key={city.id} city={city} />)}
    </>
  );
}

export default WeatherList;
