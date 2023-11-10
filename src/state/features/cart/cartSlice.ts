import { TProduct } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartState = {
  cartItems: TProduct[];
  cartQuantity: number;
  cartTotal: number;
  vat: number;
  shipping: number;
};

const initialState: CartState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
  vat: 0,
  shipping: 0,
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
      state.shipping = 50;
      state.vat = parseInt((0.2 * state.cartTotal).toFixed(0));
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) item.quantity++;
      state.cartTotal = state.cartItems.reduce(
        (acc, item) => item.quantity * item.price + acc,
        0
      );
      state.vat = parseInt((0.2 * state.cartTotal).toFixed(0));
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) item.quantity--;
      state.cartTotal = state.cartItems.reduce(
        (acc, item) => item.quantity * item.price + acc,
        0
      );
      state.vat = parseInt((0.2 * state.cartTotal).toFixed(0));
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
      state.cartQuantity = 0;
      state.shipping = 0;
      state.vat = 0;
    },
  },
});

export const { addToCart, emptyCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
