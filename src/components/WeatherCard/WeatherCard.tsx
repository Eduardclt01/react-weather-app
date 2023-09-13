import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import { getSelectedCityForecastData } from "../../api/base";
import {
  setErrorRetrievingForecastList,
  setForecastList,
  setForecastListLoading,
} from "../../context/forecastSlice";
import { useTranslation } from "react-i18next";
import { CurrentCity } from "../../types/currentCity";

const StyledWeatherCard = styled.div`
  background-color: var(--white-color);
  padding: var(--spacing-2);
  border-radius: var(--spacing-2);
  box-shadow: var(--box-shadow-sm);

  @media only screen and (min-width: 768px) {
    width: 350px;
  }
`;

const TempratureSection = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  margin-right: var(--spacing-2);
  display: inline;
`;

function WeatherCard(props: {
  currentCity: CurrentCity;
  loading: boolean;
  cityLoaded: boolean;
  errorRetrieving: boolean;
}) {
  const { currentCity, loading, cityLoaded, errorRetrieving } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function handleMoreDetailsClick() {
    navigate("/weartherDetails");
  }

  function updateForecastListLoading(isLoading: boolean) {
    dispatch(setForecastListLoading(isLoading));
  }

  function setErrorForecastList(isError: boolean) {
    dispatch(setErrorRetrievingForecastList(isError));
  }

  function set5DayForecast() {
    const longitude = currentCity.location.lon.toString();
    const latitude = currentCity.location.lat.toString();

    updateForecastListLoading(true);
    getSelectedCityForecastData(longitude, latitude, "5")
      .then((res) => {
        dispatch(setForecastList(res.data.forecast));
      })
      .catch((error) => {
        setErrorForecastList(true);
      }).finally(() => {
        updateForecastListLoading(false);
      });
  }

  function handleFiveDayForecast() {
    set5DayForecast();
  }

  return (
    <>
      {loading && !errorRetrieving && (
        <StyledWeatherCard>
          <p>{t("loading")}</p>
        </StyledWeatherCard>
      )}

      {errorRetrieving && (
        <StyledWeatherCard>
          <p>{t("error")}</p>
        </StyledWeatherCard>
      )}

      {!loading && cityLoaded && (
        <StyledWeatherCard>
          <h2>{currentCity.location?.name}</h2>
          <p>
            {currentCity.current?.last_updated},{" "}
            {currentCity.current?.condition.text}
          </p>
          <TempratureSection>
            <h1>{currentCity.current?.temp_c}°C</h1>
            <img
              src={currentCity.current?.condition.icon}
              width="100px"
              height="100px"
            />
          </TempratureSection>

          <p>
            {t("weatherDetails.humidity")} {currentCity.current?.humidity}
          </p>
          <p>
            {t("weatherDetails.feelsLike")} {currentCity.current?.feelslike_c}°C
          </p>
          <ButtonContainer>
            <PrimaryButton
              onClick={handleMoreDetailsClick}
              text={t("moreDetails")}
            />
          </ButtonContainer>
          <PrimaryButton
            onClick={handleFiveDayForecast}
            text={t("loadFiveDay")}
          />
        </StyledWeatherCard>
      )}
    </>
  );
}

export default WeatherCard;
