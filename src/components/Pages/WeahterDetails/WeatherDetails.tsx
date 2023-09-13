import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../Common/Header";
import SecondaryButton from "../../Common/Buttons/SecondaryButton";
import BodyContainer from "../../Common/BodyContainer";
import { CurrentCityState } from "../../../types/currentCity";
import WeartherDetailsContent from "../../WeatherDetails/WeatherDetailsContent";
import Paper from "../../Common/Paper/Paper";
import PaperFooter from "../../Common/Paper/PaperFooter";

function WeartherDetails() {
  const currentCity = useSelector(
    (state: { currentCity: CurrentCityState }) => state.currentCity
  );

  const navigate = useNavigate();

  function handleBackClick() {
    navigate("/");
  }

  function shouldShowWeatherContent() {
    return currentCity?.city?.current && currentCity?.city?.location;
  }

  return (
    <>
      <Header>
        {shouldShowWeatherContent() && (
          <h2>{currentCity?.city?.location?.name}</h2>
        )}
      </Header>

      <BodyContainer>
        <Paper>
          {shouldShowWeatherContent() && (
            <WeartherDetailsContent
              currentWeather={currentCity?.city?.current}
              location={currentCity?.city?.location}
            />
          )}
          <PaperFooter>
            <SecondaryButton onClick={handleBackClick} text="← Home" />
          </PaperFooter>
        </Paper>
      </BodyContainer>
    </>
  );
}

export default WeartherDetails;
