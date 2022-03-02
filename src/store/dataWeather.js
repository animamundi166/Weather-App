import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import getCurrentWeather from "../API/getCurrentWeather";
import getForecastWeather from "../API/getForecastWeather";
import getGeoCurrent from "../API/getGeoCurrent";
import getGeoForecast from "../API/getGeoForecast";

export const getDataCurrent = createAsyncThunk('getDataCurrent', (city) => {
  return getCurrentWeather(city);
});

export const getDataForecast = createAsyncThunk('getDataForecast', (city) => {
  return getForecastWeather(city);
});

export const getGeo = createAsyncThunk('getGeo', (params) => {
  return getGeoCurrent(params.lat, params.lon);
});

export const getGeo16 = createAsyncThunk('getGeo16', (params) => {
  return getGeoForecast(params.lat, params.lon);
});

export const resetWarning = createAction('resetWarning');


const initialState = {
  dataCurrent: null,
  dataForecast: null,
  isLoading: false,
  isWarning: false,
};

const weatherReducer = createReducer(initialState, (builder) => {
  builder.addCase(getDataCurrent.pending, (state) => {
    state.isWarning = false;
    state.isLoading = true;
    state.dataCurrent = null;
  });
  builder.addCase(getDataCurrent.fulfilled, (state, action) => {
    state.dataCurrent = action.payload;
    state.isLoading = false;
  });
  builder.addCase(getDataCurrent.rejected, (state) => {
    state.dataCurrent = null;
    state.isLoading = false;
    state.isWarning = true;
  });

  builder.addCase(resetWarning, (state) => {
    state.isWarning = false;
  });

  builder.addCase(getDataForecast.pending, (state) => {
    state.dataForecast = null;
  });
  builder.addCase(getDataForecast.fulfilled, (state, action) => {
    state.dataForecast = action.payload;
  });

  builder.addCase(getGeo.pending, (state) => {
    state.isWarning = false;
    state.isLoading = true;
    state.dataCurrent = null;
  });
  builder.addCase(getGeo.fulfilled, (state, action) => {
    state.dataCurrent = action.payload;
    state.isLoading = false;
  });
  builder.addCase(getGeo.rejected, (state) => {
    state.dataCurrent = null;
    state.isLoading = false;
    state.isWarning = true;
  });

  builder.addCase(getGeo16.pending, (state) => {
    state.isWarning = false;
    state.isLoading = true;
    state.dataForecast = null;
  });
  builder.addCase(getGeo16.fulfilled, (state, action) => {
    state.dataForecast = action.payload;
    state.isLoading = false;
  });
  builder.addCase(getGeo16.rejected, (state) => {
    state.dataForecast = null;
    state.isLoading = false;
    state.isWarning = true;
  });
});

export default weatherReducer;
