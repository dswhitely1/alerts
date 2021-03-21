import { configureStore } from '@reduxjs/toolkit';
import alertsReducer from './alerts';

const store = configureStore({
  reducer: {
    alerts: alertsReducer,
  },
});

// We will need this for Typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
