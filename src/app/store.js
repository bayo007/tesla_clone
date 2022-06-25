import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice"

export const Carstore = configureStore({
  reducer: {
    car: carReducer,
  },
});

export default Carstore;
