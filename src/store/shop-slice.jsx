import { createSlice } from "@reduxjs/toolkit";

export const ordersArr =  [],
  likesArr = [],
  productsArr = [];


const initialState = {
  orders: ordersArr,
  likes: likesArr,
  products: productsArr,
  totalQuantity: 0,
  totalPrice: 0,
  totalLikes: 0,
  totalCarts: 0,
  dates: [],
  days: [],
  orderTotalPrice: 0,
};

const shopSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addLike(state, action) {
      if (state.totalLikes >= 0) {
        state.totalLikes++;
        const newLikes = action.payload;
        const exitingItems = state.likes.find(
          (item) => item.id === newLikes.id
        );
        if (!exitingItems) {
          state.likes.push({
            id: newLikes.id,
            like: true,
            img: newLikes.img,
            cartPirce: newLikes.cartPirce,
            regularPrice: newLikes.regularPrice,
            price: newLikes.price,
            name: newLikes.name,
            stars: newLikes.stars,
          });
        }
      } else {
        state.totalLikes = 0;
      }
    },

    removeLike(state, action) {
      state.likes = state.likes.filter((item) => item.id !== action.payload.id);

      if (state.totalLikes >= 0) state.totalLikes--;
      if (state.totalLikes < 0) state.totalLikes = 0;
    },

    totalCarts(state, action) {
      console.log(action);

      const testQty = state.products.find((item) => item.quantity === 0);
      if (state.totalCarts >= 0) {
        if (testQty) {
          state.totalCarts--;
          // state.products = state.products.filter(
          //   (test) => test.id !== items.id
          // );
        }
      }
    },

    addProducts(state, action) {
      state.totalQuantity++;
      const newProduct = action.payload;
      console.log(newProduct);

      const products = state.products.find((item) => item.id === newProduct.id);

      let gPrice = null;

      if (newProduct.price) {
        gPrice = newProduct.price;
      } else {
        gPrice = newProduct.cartPirce;
      }
      console.log(gPrice);

      if (!products) {
        state.products.push({
          id: newProduct.id,
          discount: newProduct.discount,
          like: false,
          img: newProduct.img,
          cartPirce: newProduct.cartPirce,
          regularPrice: newProduct.regularPrice,
          price: newProduct.price,
          name: newProduct.name,
          stars: newProduct.stars,
          quantity: 1,
          totalPrice: gPrice,
        });
        state.totalCarts++;
        state.totalPrice += gPrice;
      } else {
        state.totalPrice += gPrice;
        products.quantity++;
        products.totalPrice = products.totalPrice + gPrice;
      }
    },
    removeProducts(state, action) {
      state.totalQuantity--;
      const newProduct = action.payload;

      console.log(newProduct);

      const products = state.products.find((item) => item.id === newProduct.id);

      let gPrice = null;

      if (newProduct.price) {
        gPrice = newProduct.price;
      } else {
        gPrice = newProduct.cartPirce;
      }
      console.log(gPrice);

      if (products) {
        state.totalPrice -= gPrice;

        products.quantity--;
        products.totalPrice = products.totalPrice - gPrice;
        // this.totalCarts(newProduct.quantity)
      }
    },

    addOrder(state, action) {

      const order = action.payload;

      const obj = {
        orders: [...order.orders],
        day: order.endDay,
        totalPrice: state.totalPrice,
      };
      const getOrders = JSON.parse(localStorage.getItem("orders"));

      const newOrders = [obj, ...getOrders];

      localStorage.setItem("orders", JSON.stringify(newOrders));
   
      // state.orders = [...getOrders]
   
    },

    addDate(state, action) {
      const day = action.payload;

      if (day.date.trim() !== "" && day.time.trim() !== "") {
        console.log(`${day.date} ${day.time} isn't emty`);
        console.log(day);

        return {
          ...state,
          days: [...state.days, day],
        };
      }
    },

    clearProducts(state, action) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.totalCarts = 0;
    },

    calculateDates(state, action) {
      const today = new Date();
      const twoDaysLater = new Date(today);
      twoDaysLater.setDate(today.getDate() + 2); // 2 kundan keyingi kun

      const dateRange = state.dates;
      for (let i = 0; i < 10; i++) {
        const futureDate = new Date(twoDaysLater);
        futureDate.setDate(twoDaysLater.getDate() + i);
        let date = futureDate.toLocaleDateString();
        dateRange.push(date);
      }

      // state.dates({...dateRange})
    },
  },
});

export const shoppingAction = shopSlice.actions;
export default shopSlice.reducer;
