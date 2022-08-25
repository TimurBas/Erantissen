import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../shared/redux/ProductModel";
import { AppState } from "../store";

const initialState: ProductModel[] = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductModel>) => {
      const { title } = action.payload;
      const existingProduct = state.find((product) => product.title == title);

      if (existingProduct) {
        existingProduct.cartAmount += 1;
        return;
      }

      return [action.payload, ...state];
    },
  },
});

export const { addProductToCart } = productSlice.actions;

export const getProductsSelector = (state: AppState) => state.products;

export default productSlice.reducer;
