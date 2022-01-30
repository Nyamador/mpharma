import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: true,
  nextId: 0,
  mode: "save", // save || edit
};

export const getProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const cachedProducts = window.localStorage.getItem("products");
      if (cachedProducts) {
        return JSON.parse(cachedProducts);
      }

      const response = await axios.get(
        "http://www.mocky.io/v2/5c3e15e63500006e003e9795"
      );
      window.localStorage.setItem(
        "products",
        JSON.stringify(response.data.products)
      );
      return response.data.products;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
      state.nextId = state.products[state.products.length - 1].id + 1;
      window.localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload;
        state.nextId = state.products[state.products.length - 1].id + 1;
        state.loading = false;
      })
      .addCase(getProductsAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
