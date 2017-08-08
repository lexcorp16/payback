import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import { ThemeProvider } from "styled-components";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const colors = {
  bg: "#F0F4F6",
  bgPrimary: "#3BB75E",
  bgMuted: "#FCFCFC",
  bgSuccess: "#F0FFF4",
  bgDanger: "#FCE9E9",
  bgInfo: "#F6FCFF",
  bdMuted: "#e3e3e3",
  bgRed: "#EF3B24",
  bgWarning: "#FFF7D2",
  bdPrimary: "#2C8846",
  bdSuccess: "#CBF5D6",
  bdDanger: "#FFD1D7",
  bdInfo: "#B7E6F6",
  bdInfoLight: "#DFF7FF",
  bdWarning: "#F4CC6A",
  textPrimary: "#011B33",
  textSecondary: "#7C86A2",
  textMuted: "#B2B2BA",
  textInfo: "#09A5DB",
  textSuccess: "#049720",
  textDanger: "#EF3B24",
  textWarning: "#CB8E01"
};

const theme = {
  space: [0, 4, 8, 16, 25, 30, 45, 60, 90, 125],
  fontSizes: [0, 12, 14, 16, 18, 21, 24, 36, 48],
  radius: "5px",
  colors
};

const rootEl = document.getElementById("root");

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={{ ...theme, ...colors }}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </ReduxProvider>,
  rootEl
);

registerServiceWorker();
