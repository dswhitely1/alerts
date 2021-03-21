import { createSlice } from '@reduxjs/toolkit';

interface AlertState {
  alerts: any[];
  isLoading: boolean;
  errors: any | null;
}

const initialState: AlertState = {
  alerts: [],
  isLoading: false,
  errors: null,
};

const alerts = createSlice({
  initialState,
  name: 'alerts',
  reducers: {
    alertStart: (state) => {
      if (!state.isLoading) state.isLoading = true;
      if (state.alerts.length) state.alerts = [];
      if (state.errors) state.errors = null;
    },
    alertSuccess: (state, action) => {
      if (state.isLoading) state.isLoading = false;
      state.alerts = action.payload;
    },
    alertFailure: (state, action) => {
      if (state.isLoading) state.isLoading = false;
      if (state.alerts.length) state.alerts = [];
      state.errors = action.payload;
    },
  },
});

export const { alertFailure, alertStart, alertSuccess } = alerts.actions;
export default alerts.reducer;
