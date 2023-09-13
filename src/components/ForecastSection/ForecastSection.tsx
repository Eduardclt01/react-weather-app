import React from "react";
import { Forecastday, forecastListState } from "../../types/forecastList";
import { useTranslation } from "react-i18next";
import CardContainer from "../Common/CardContainer";
import WeatherForecastCard from "../WeatherCard/WeatherForecastCard";

function ForecastSection(props: { forecastList: forecastListState }) {
  const { forecastList } = props;
  const { t } = useTranslation();

  function shouldShowForecastList() {
    return (
      forecastList.list?.forecastday?.length > 0 &&
      !forecastList.errorForecastList
    );
  }

  return (
    <>
      {forecastList.isForecastListLoading && (
        <>
          <h1>{t("fiveDayForecast")}</h1>
          <CardContainer>
            <p>{t("loading")}</p>
          </CardContainer>
        </>
      )}

      {forecastList.errorForecastList && (
        <>
          <h1>{t("fiveDayForecast")}</h1>
          <CardContainer>
            <p>{t("error")}</p>
          </CardContainer>
        </>
      )}

      {shouldShowForecastList() && (
        <>
          <h1>{t("fiveDayForecast")}</h1>
          <CardContainer>
            {forecastList.list?.forecastday?.map((day: Forecastday, index) => (
              <WeatherForecastCard
                key={index}
                condition={day?.day?.condition.text}
                date={day?.date}
                maxtemp_c={day?.day?.maxtemp_c?.toString()}
                mintemp_c={day?.day?.mintemp_c?.toString()}
              />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default ForecastSection;
