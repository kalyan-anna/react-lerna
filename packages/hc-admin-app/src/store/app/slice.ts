import { bulkDisableRules, bulkEnableRules, disableRules, loadRules } from '../rule';

import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  isAppBusy: boolean;
  apiError: string;
}

const initialState: AppState = {
  isAppBusy: false,
  apiError: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: {
    [loadRules.pending.type]: (state) => {
      state.isAppBusy = true;
      state.apiError = '';
    },
    [loadRules.fulfilled.type]: (state) => {
      state.isAppBusy = false;
      state.apiError = '';
    },
    [loadRules.rejected.type]: (state, action) => {
      state.isAppBusy = false;
      state.apiError = action.error;
    },
    [disableRules.pending.type]: (state) => {
      state.isAppBusy = true;
      state.apiError = '';
    },
    [disableRules.fulfilled.type]: (state) => {
      state.isAppBusy = false;
      state.apiError = '';
    },
    [disableRules.rejected.type]: (state, action) => {
      state.isAppBusy = false;
      state.apiError = action.error;
    },
    [bulkDisableRules.pending.type]: (state) => {
      state.isAppBusy = true;
      state.apiError = '';
    },
    [bulkDisableRules.fulfilled.type]: (state) => {
      state.isAppBusy = false;
      state.apiError = '';
    },
    [bulkDisableRules.rejected.type]: (state, action) => {
      state.isAppBusy = false;
      state.apiError = action.error;
    },
    [bulkEnableRules.pending.type]: (state) => {
      state.isAppBusy = true;
      state.apiError = '';
    },
    [bulkEnableRules.fulfilled.type]: (state) => {
      state.isAppBusy = false;
      state.apiError = '';
    },
    [bulkEnableRules.rejected.type]: (state, action) => {
      state.isAppBusy = false;
      state.apiError = action.error;
    },
  },
});

export const appReducer = appSlice.reducer;
