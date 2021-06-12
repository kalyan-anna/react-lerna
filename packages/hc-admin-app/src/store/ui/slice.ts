import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Filter {
  services?: string[];
  keyword?: string;
}

export interface UIState {
  accounts: {
    selectedAccountId: string;
    showDisabled: boolean;
    filter: Filter;
  };
  masterConfig: {
    filter: Filter;
  };
}

const initialState: UIState = {
  accounts: {
    selectedAccountId: '',
    showDisabled: false,
    filter: {
      services: [],
      keyword: '',
    },
  },
  masterConfig: {
    filter: {
      services: [],
      keyword: '',
    },
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    accountSelected: (state, { payload }: PayloadAction<string>) => {
      state.accounts.selectedAccountId = payload;
    },
    accountFilterUpdated: (state, { payload }: PayloadAction<Filter>) => {
      state.accounts.filter = payload;
    },
    masterFilterUpdated: (state, { payload }: PayloadAction<Filter>) => {
      state.masterConfig.filter = payload;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const { accountFilterUpdated, accountSelected, masterFilterUpdated } = uiSlice.actions;
