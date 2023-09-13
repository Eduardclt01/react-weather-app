import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledWeatherForecastCard = styled.div`
  background-color: var(--white-color);
  padding: var(--spacing-2);
  border-radius: var(--spacing-2);
  box-shadow: var(--box-shadow-sm);
  margin-top: var(--spacing-2);

  @media only screen and (min-width: 768px) {
    width: 200px;
    margin-left: var(--spacing-1);
    margin-right: var(--spacing-1);
  }
`;

function WeatherForecastCard(props: {
  date: String;
  condition: String;
  maxtemp_c: String;
  mintemp_c: String;
}) {
  const { date, condition, maxtemp_c, mintemp_c } = props;
  const { t } = useTranslation();

  return (
    <StyledWeatherForecastCard>
      <h3>{date}</h3>
      <p>{condition}</p>
      <p>
        {t("weatherDetails.min")} {maxtemp_c}°C
      </p>
      <p>
        {t("weatherDetails.max")} {mintemp_c}°C
      </p>
    </StyledWeatherForecastCard>
  );
}

export default WeatherForecastCard;
