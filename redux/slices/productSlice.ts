import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../shared/responses/ProductResponse";
import { AppState } from "../store";

const initialState: ProductModel[] = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductModel>) => {
      return [action.payload, ...state];
    },
  },
});

export const { addProductToCart } = productSlice.actions;

export const getProductsSelector = (state: AppState) => state.products;

export default productSlice.reducer;
