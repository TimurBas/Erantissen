import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import customerReducer from "./slices/customerSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    customer: customerReducer,
  },
  devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
