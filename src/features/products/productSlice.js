import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productAPI";

const initialState = {
  products: [],
  loading: false,
};

export const getProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async ({ rejectWithValue }) => {
    fetchProducts()
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.response.data));
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProductsAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
