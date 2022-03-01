import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./dataWeather";

export const store = configureStore({
  reducer: {
    dataWeather: weatherReducer,
  }
});
