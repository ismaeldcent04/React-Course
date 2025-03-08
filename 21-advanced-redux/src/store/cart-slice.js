import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      state.totalQuantity++;
      if (!existingItem) {
        state.items = [
          ...state.items,
          {
            id: newItem.id,
            description: newItem.description,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.title,
          },
        ];
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((c) => c.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.total - existingItem.price;
      }
    },

    setItems(state, action) {
      const items = action.payload.items;

      state.items = [...items];
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice;
