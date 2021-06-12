import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selectUIState = (state: RootState) => state.ui;
const selectedAccountID = createSelector(selectUIState, (ui) => ui.accounts.selectedAccountId);
const accountFilter = createSelector(selectUIState, (ui) => ui.accounts.filter);
const masterFilter = createSelector(selectUIState, (ui) => ui.masterConfig.filter);

export const uiSelectors = {
  selectedAccountID,
  accountFilter,
  masterFilter,
};
