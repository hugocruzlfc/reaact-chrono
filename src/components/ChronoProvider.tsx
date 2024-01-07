import React from "react";
import { Chrono } from "react-chrono";
import { items } from "../data/items";

const THEME = {
  primary: "red",
  secondary: "blue",
  cardBgColor: "yellow",
  cardForeColor: "violet",
  titleColor: "black",
  titleColorActive: "red",
};

const BUTTON_TEXTS = {
  first: "Jump to First",
  last: "Jump to Last",
  next: "Next",
  previous: "Previous",
};

export const ChronoHorizontal: React.FC = () => {
  return (
    <Chrono
      items={items}
      mode="HORIZONTAL"
      itemWidth={150}
      showSingle
    />
  );
};

export const ChronoVertical: React.FC = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL"
      itemWidth={150}
      slideItemDuration={5000}
      slideShow
      theme={THEME}
      buttonTexts={BUTTON_TEXTS}
    />
  );
};
