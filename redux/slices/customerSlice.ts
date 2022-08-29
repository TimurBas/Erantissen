import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerModel } from "../../shared/redux/CustomerModel";
import { AppState } from "../store";

const initialState: CustomerModel = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<CustomerModel>) => {
      return action.payload;
    },
  },
});

export const { addCustomer } = customerSlice.actions;

export const getCustomerSelector = (state: AppState) => state.customer;

export default customerSlice.reducer;
