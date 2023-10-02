import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from './orderAPI';

const initialState = {
  status: 'idle',
  orders: [],
};

export const createOrderAsync = createAsyncThunk(
  'cart/createOrder',
  async (order) => {
    const response = await createOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// export const fetchItemsByUserIdAsync = createAsyncThunk(
//   'cart/fetchItemsByUserId',
//   async (userId) => {
//     const response = await fetchItemsByUserId(userId);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

// export const updateCartAsync = createAsyncThunk(
//   'cart/updateCart',
//   async (update) => {
//     const response = await updateCart(update);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

// export const deleteItemFromCartAsync = createAsyncThunk(
//   'cart/deleteItemFromCart',
//   async (itemId) => {
//     const response = await deleteItemFromCart(itemId);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
      })
  },
});

export const { increment } = orderSlice.actions;

export const selectOrders = (state) => state.cart.orders;

export default orderSlice.reducer;
