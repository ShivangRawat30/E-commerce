// orderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state for the orders slice
const initialState = {
  loading: false,
  orders: [],
  order: {},
  error: null,
};

// Create an async thunk for creating an order
export const createOrder = createAsyncThunk('order/createOrder', async (order, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/v1/order/new', order, config);
    return data;
  } catch (error) {
    console.log("order");
    console.log(error.response.data.message);
    return rejectWithValue(error.response.data.message);
  }
});

// Create an async thunk for fetching user's orders
export const fetchMyOrders = createAsyncThunk('order/fetchMyOrders', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/api/v1/orders/me');
    return data.orders;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

// Create an async thunk for fetching order details
export const fetchOrderDetails = createAsyncThunk('order/fetchOrderDetails', async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/api/v1/order/${id}`);
    return data.order;
  } catch (error) {
    console.log("product");
    console.log(error.response.data.message);
    return rejectWithValue(error.response.data.message);
  }
});

// Create the order slice using createSlice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMyOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchMyOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the order slice and its actions
export const { clearErrors } = orderSlice.actions;

// Export the order reducer
export default orderSlice.reducer;
