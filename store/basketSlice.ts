import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import { RootState } from "./store";

export interface BasketState {
  items: Product[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemInCart = state.items.findIndex((item) => item._id === action.payload._id);
      if (itemInCart >= 0) {
        state.items[itemInCart] = {
          ...state.items[itemInCart],
          quantity: state.items[itemInCart].quantity + 1,
        };
        toast.success('یک تعداد به مقدار اضافه شد', {
          position: "top-center",
          duration:3000,
          style: {
              background: 'green',
              color: '#fff',
            },
        });
      } else {
          let tempProductItem = { ...action.payload, quantity: 1 };
          state.items.push(tempProductItem);
          toast.success('به سبد خرید شما اضافه شد', {
            position: "top-center",
            duration:3000,
            style: {
                background: 'green',
                color: '#fff',
              },
          });
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item._id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item._id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.items.filter((item) => item._id !== action.payload.id);
      state.items = removeItem;
    },
    paymentSuccess(state) {
      state.items = [];
    },
  },
});

export const { addToCart, incrementQuantity,decrementQuantity,removeItem,paymentSuccess } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;
export default basketSlice.reducer;