import { TProduct } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartState = {
  cartItems: TProduct[];
  cartQuantity: number;
  cartTotal: number;
};

const initialState: CartState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const idx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (idx >= 0) {
        state.cartItems[idx].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
        state.cartQuantity++;
      }
      state.cartTotal = state.cartItems.reduce(
        (acc, item) => item.quantity * item.price + acc,
        0
      );
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
