import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import WeatherCard from "../../WeatherCard/WeatherCard";
import WeatherList from "../../WeatherList/WeatherList";
import {
  setCityList,
  setErrorRetrievingCityList,
  setIsCityListLoading,
  setSearchString,
  setShouldShowCityList,
} from "../../../context/cityListSlice";
import { getCities } from "../../../api/base";
import Header from "../../Common/Header";
import CardContainer from "../../Common/CardContainer";
import InputField from "../../Common/FormComponents/InputField";
import DropdownContainer from "../../Common/DropdownContainer";
import BodyContainer from "../../Common/BodyContainer";
import { useTranslation } from "react-i18next";
import { CityList, CityListState } from "../../../types/cityList";
import { forecastListState } from "../../../types/forecastList";
import { CurrentCityState } from "../../../types/currentCity";
import ForecastSection from "../../ForecastSection/ForecastSection";

const SearchContentContainer = styled.div`
  width: 400px;
`;

function Home() {
  const cityList = useSelector(
    (state: { cityList: CityListState }) => state.cityList
  );

  const forecastList = useSelector(
    (state: { forecastList: forecastListState }) => state.forecastList
  );

  const currentCity = useSelector(
    (state: { currentCity: CurrentCityState }) => state.currentCity
  );

  const dispatch = useDispatch();
  const { t } = useTranslation();
  let delayDebounceFn: NodeJS.Timeout;

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setSearchString(event.target.value));
  }

  function onSearchFocus() {
    dispatch(setShouldShowCityList(true));
  }

  function onSearchBlur() {
    dispatch(setShouldShowCityList(false));
  }

  function updateCityList(data: CityList[]) {
    dispatch(setCityList(data));
  }

  function setCityListLoading(isLoading: boolean) {
    dispatch(setIsCityListLoading(isLoading));
  }

  function setCityListError(isError: boolean) {
    dispatch(setErrorRetrievingCityList(isError));
  }

  function shouldSearchForCity() {
    return cityList.searchString.length >= 3;
  }

  function searchForCityOnUserType() {
    if (shouldSearchForCity()) {
      updateCityList([]);
      setCityListLoading(true);
      setCityListError(false);
      delayDebounceFn = setTimeout(() => {
        getCities(cityList.searchString)
          .then((res) => {
            updateCityList(res.data);
          })
          .catch((error) => {
            setCityListError(true);
          })
          .finally(() => {
            setCityListLoading(false);
          });
      }, 1000);
    } else {
      updateCityList([]);
    }
  }

  useEffect(() => {
    searchForCityOnUserType();
    return () => clearTimeout(delayDebounceFn);
  }, [cityList.searchString]);

  return (
    <>
      <Header>
        <SearchContentContainer>
          <InputField
            value={cityList.searchString}
            onChange={handleSearchInputChange}
            placeholder={t("searchBarPlaceholder")}
            onFocus={onSearchFocus}
            onBlur={onSearchBlur}
          />
          <DropdownContainer shouldShowCityList={cityList.shouldShowCityList}>
            <WeatherList />
          </DropdownContainer>
        </SearchContentContainer>
      </Header>
      <BodyContainer>
        <CardContainer>
          <WeatherCard
            currentCity={currentCity.city}
            loading={currentCity.loading}
            cityLoaded={currentCity.cityLoaded}
            errorRetrieving={currentCity.errorCurrentCity}
          />
        </CardContainer>

        <ForecastSection forecastList={forecastList} />
      </BodyContainer>
    </>
  );
}

export default Home;
