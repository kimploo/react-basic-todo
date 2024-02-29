import { configureStore } from '@reduxjs/toolkit';
import fruitReducer from './features/fruit/fruit.reducer';

export const store = configureStore({
  reducer: {
    fruit: fruitReducer
  },
});
