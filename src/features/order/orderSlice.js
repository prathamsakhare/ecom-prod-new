import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from './orderAPI';

const initialState = {
  status: 'idle',
  orders: [],
  currentOrder : null,
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
    resetOrder : (state) => {
      state.currentOrder = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder = action.payload;
      })
  },
});

export const { increment, resetOrder } = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectCurrentOrder= (state) => state.order.currentOrder
export default orderSlice.reducer;
