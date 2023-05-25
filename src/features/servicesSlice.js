import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    items: [],
    loadingList: false,
    errorList: null,
    details: null,
    loadingDetails: false,
    errorDetails: null,
  },
  reducers: {
    fetchServices: (state) => {
      state.loadingList = true;
      state.errorList = null;
      state.items = [];
    },
    fetchServicesSuccess: (state, action) => {
      state.items = action.payload;
      state.loadingList = false;
      state.errorList = null;
    },
    fetchServicesFailure: (state, action) => {
      state.loadingList = false;
      state.errorList = action.payload;
    },
    fetchServiceDetails: (state) => {
      state.loadingDetails = true;
      state.errorDetails = null;
      state.details = null;
    },
    fetchServiceDetailsSuccess: (state, action) => {
      state.details = action.payload;
      state.loadingDetails = false;
      state.errorDetails = null;
    },
    fetchServiceDetailsFailure: (state, action) => {
      state.loadingDetails = false;
      state.errorDetails = action.payload;
    }
  },
});

export const {
  fetchServices,
  fetchServiceDetails,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure
} = servicesSlice.actions;

export default servicesSlice.reducer;
