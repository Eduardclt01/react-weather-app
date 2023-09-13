import React from "react";
import { Current, Location } from "../../types/currentCity";
import { useTranslation } from "react-i18next";
import WeartherDetailsItem from "./WeatherDetailsItem";

function WeartherDetailsContent(props: {
  currentWeather: Current;
  location: Location;
}) {
  const { currentWeather, location } = props;

  const { t } = useTranslation();

  return (
    <>
      <h3>{t("cityDetails.title")}</h3>
      <hr />
      <WeartherDetailsItem
        title={t("cityDetails.region")}
        data={location.region}
      />
      <WeartherDetailsItem
        title={t("cityDetails.country")}
        data={location.country}
      />
      <WeartherDetailsItem
        title={t("cityDetails.localTime")}
        data={location.localtime}
      />

      <h3>{t("weatherDetails.title")}</h3>
      <hr />

      <WeartherDetailsItem
        title={t("weatherDetails.windSpeed")}
        data={currentWeather.wind_kph.toString()}
      />
      <WeartherDetailsItem
        title={t("weatherDetails.windDir")}
        data={`${currentWeather.wind_degree} ${currentWeather.wind_dir}`}
      />
      <WeartherDetailsItem
        title={t("weatherDetails.pressure")}
        data={currentWeather.pressure_mb.toString()}
      />
      <WeartherDetailsItem
        title={t("weatherDetails.humidity")}
        data={currentWeather.humidity.toString()}
      />
      <WeartherDetailsItem
        title={t("weatherDetails.uv")}
        data={currentWeather.uv.toString()}
      />
    </>
  );
}

export default WeartherDetailsContent;
