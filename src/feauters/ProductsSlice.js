import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialProductsValue = {
  data: [],
  status: 'idle',
  isPending: false,
}

export const getAsyncProducts = createAsyncThunk(
  'product/getAsyncProducts',
  async () => {
    const products = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await products.json();
    return data;
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsValue, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncProducts.pending, (state, action) => {
        state.isPending = true,
        state.status = 'pending'
      })
      .addCase(getAsyncProducts.fulfilled, (state, action) => {
        state.isPending = false, 
        state.status = 'fulfilled',
        state.data = action.payload 
      })
      .addCase(getAsyncProducts.rejected, (state, action) => {
        state.isPending = false, 
        state.status = 'rejected',
        state.data = []
      })
  }
})

export default productsSlice.reducer
