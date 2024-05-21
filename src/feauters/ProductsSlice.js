import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialProductsValue = {
  data: [],
  item: [],
  status: "idle",
  isPending: false,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const products = await fetch("http://localhost:3000/media")
    const data = await products.json()
    return data
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsValue,
  reducers: {
    showItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.data.find((e) => e.id === itemId);
      return {
        ...state,
        item: item ? [item] : [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        (state.isPending = true), (state.status = "pending");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.isPending = false),
          (state.status = "fulfilled"),
          (state.data = action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.isPending = false),
          (state.status = "rejected"),
          (state.data = []);
      });
  },
});

export default productsSlice.reducer;
export const { showItem } = productsSlice.actions;
