// atcSlice.js
import { createSlice } from "@reduxjs/toolkit";

const atcSlice = createSlice({
  name: "atcData",
  initialState: {
    atc1Data: [],
    atc2Data: [],
    atc3Data: [],
    atc4Data: [],
    atc5Data: [],
    companyData:[],
    brandData: [],
    atcPayload:[],
  },
  reducers: {
    setAtc1Data: (state, action) => {
      state.atc1Data = action.payload;
    },
    setAtc2Data: (state, action) => {
      state.atc2Data = action.payload;
    },
    setAtc3Data: (state, action) => {
      state.atc3Data = action.payload;
    },
    setAtc4Data: (state, action) => {
      state.atc4Data = action.payload;
    },
    setAtc5Data: (state, action) => {
      state.atc5Data = action.payload;
    },
    setCompanyData: (state, action) => {
      state.companyData = action.payload;
    },
    setBrandData: (state, action) => {
      state.brandData = action.payload;
    },
     setAtcPayload: (state, action) => {
      state.atcPayload = action.payload;
    },
    }
   

});

export const {
  setAtc1Data,
  setAtc2Data,
  setAtc3Data,
  setAtc4Data,
  setAtc5Data,
  setCompanyData,
  setBrandData,
  setAtcPayload
} = atcSlice.actions;

export default atcSlice.reducer;
