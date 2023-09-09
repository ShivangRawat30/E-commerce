import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  loading: false,
  productsCount: 0,
  resultPerPage: 0,
  error: null,
  product: {},
};

// Create an async thunk for getting products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({keyword = '', currentPage = 1, price = [0, 25000], category, ratings = 0}, { rejectWithValue }) => {
  try {
    const link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}${category ? `&category=${category}` : ''}`;
    
    const { data } = await axios.get(link);

    return data;
  } catch (error) {
    console.log("product 1");
    console.log(error.response.data.message);
    return rejectWithValue(error.response.data.message);
  }
});

// Create an async thunk for getting product details
export const fetchProductDetails = createAsyncThunk('products/fetchProductDetails', async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/api/v1/product/${id}`);
    return data.product;
  } catch (error) {
    console.log("Failed to fetch the product data from the backend")
    return rejectWithValue(error.response.data.message);
  }
});

// Create the product slice using createSlice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.productsCount = action.payload.productsCount;
        state.resultPerPage = action.payload.resultPerPage;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the product slice and its actions
export const { clearErrors } = productSlice.actions;

// Export the product reducer
export default productSlice.reducer;
