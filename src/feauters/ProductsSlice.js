import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialProductsValue = {
  data: [],
  item: [],
  cats: [],
  status: "idle",
  isPending: false,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const products = await fetch("http://localhost:3001/media");
    const data = await products.json();
    return data;
  }
);

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
    saddlePads: (state, action) => {

      const cats = state.data.filter((e) => e.cat == "Saddle Pads");
      return {
        ...state,
        data: cats ? cats : [],
      };
    },
    earBonnet: (state, action) => {
      const cats = state.data.filter((e) => e.cat == "Ear Bonnet");
      return {
        ...state,
        data: cats ? cats : [],
      };
    },
    halters: (state, action) => {
      const cats = state.data.filter((e) => e.cat == "Halters");
      return {
        ...state,
        data: cats ? cats : [],
      };
    },
    horseBlankets: (state, action) => {
      const cats = state.data.filter((e) => e.cat == "Horse Blankets");
      return {
        ...state,
        data: cats ? cats : [],
      };
    },
    horseBoots: (state, action) => {
      const cats = state.data.filter((e) => e.cat == "Horse Boots");
      return {
        ...state,
        data: cats ? cats : [],
      };
    },
    legWraps: (state, action) => {
      const cats = state.data.filter((e) => e.cat == "Leg Wraps");
      return {
        ...state,
        data: cats ? cats : [],
      };
    },
    tops: (state, action) => {
      const cat = state.data.filter((e) => e.cat == "Tops");
      return {
        ...state,
        data: cat ? cat : [],
      };
    },
    ridingLeggins: (state, action) => {
      const cat = state.data.filter((e) => e.cat == "Riding Tights & Leggins");
      return {
        ...state,
        data: cat ? cat : [],
      };
    },
    ridingJackets: (state, action) => {
      const cat = state.data.filter((e) => e.cat == "Riding Jackets");
      return {
        ...state,
        data: cat ? cat : [],
      };
    },
    ridingShowJackets: (state, action) => {
      const cat = state.data.filter((e) => e.cat == "Show Jackets");
      return {
        ...state,
        data: cat ? cat : [],
      };
    },
    ridingGloves: (state, action) => {
      const cat = state.data.filter((e) => e.cat == "Riding Gloves");
      return {
        ...state,
        data: cat ? cat : [],
      };
    },
    addToCart: (state, action) => {
      const itms = state.data.filter((e) => e.id == action.payload.id);
      localStorage.setItem(action.payload.id, JSON.stringify(itms));
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
export const { addToCart } = productsSlice.actions;
export const { saddlePads } = productsSlice.actions;
export const { earBonnet } = productsSlice.actions;
export const { halters } = productsSlice.actions;
export const { horseBlankets } = productsSlice.actions;
export const { horseBoots } = productsSlice.actions;
export const { legWraps } = productsSlice.actions;
export const { tops } = productsSlice.actions;
export const { ridingLeggins } = productsSlice.actions;
export const { ridingJackets } = productsSlice.actions;
export const { ridingShowJackets } = productsSlice.actions;
export const { ridingGloves } = productsSlice.actions;
