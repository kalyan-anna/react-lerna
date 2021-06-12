import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selectAppState = (state: RootState) => state.app;

const isAppBusy = createSelector(selectAppState, (state) => state.isAppBusy);

export const appSelector = {
  isAppBusy,
};
