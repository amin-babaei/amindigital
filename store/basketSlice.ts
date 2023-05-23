import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { RootState } from "./store";

const cartAdapter = createEntityAdapter<Product>({
  selectId: item => item._id
});

export const basketSlice = createSlice({
  name: "basket",
  initialState: cartAdapter.getInitialState(),
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.entities[action.payload._id]
      if (itemInCart) {
        itemInCart.quantity += 1
        toast.success(`یک تعداد به مقدار ${itemInCart.title} اضافه شد`, {
          position: "top-center",
          duration: 3000,
          style: {
            background: 'green',
            color: '#fff',
          },
        });
      } else {
        cartAdapter.addOne(state, { ...action.payload, quantity: 1 })
        toast.success(`${action.payload.title} به سبد خرید شما اضافه شد`, {
          position: "top-center",
          duration: 3000,
          style: {
            background: 'green',
            color: '#fff',
          },
        });
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.entities[action.payload.id]
      if (itemInCart) {
        itemInCart.quantity+=1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.entities[action.payload.id];
      if (itemInCart) {
        itemInCart.quantity-=1;
      }
    },
    removeItem: (state, action) => {
      cartAdapter.removeOne(state, action.payload._id);
    },
    paymentSuccess(state) {
      cartAdapter.removeAll(state);
    },
  },
});
const selectCartState = (state: RootState) => state.basket;

export const selectBasketItems = createSelector(
  selectCartState,
  (cart) => cartAdapter.getSelectors().selectAll(cart)
);
export const selectCartTotal = createSelector(selectBasketItems, (items) =>
  items.reduce((total, item) => total + item.totalPrice * item.quantity, 0)
);

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, paymentSuccess } = basketSlice.actions;
export default basketSlice.reducer;