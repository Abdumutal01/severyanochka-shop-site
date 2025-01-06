import { createSlice } from "@reduxjs/toolkit";

export const ordersArr = [],
  likesArr = [],
  productsArr = [];

let TestOrders = JSON.parse(localStorage.getItem("orders")) || null;

let oldOrders = !TestOrders
  ? []
  : TestOrders.slice(0).map((item) => item.orders);

export const orders = oldOrders;

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
      window.location.reload()

        const newLikes = action.payload;
        const likesStore = JSON.parse(localStorage.getItem("likes"));
        const exitingItems = likesStore.find((item) => item.id === newLikes.id);
        if (!exitingItems) {
          const likesObj = {
            id: newLikes.id,
            like: true,
            img: newLikes.img,
            cartPirce: newLikes.cartPirce,
            regularPrice: newLikes.regularPrice,
            price: newLikes.price,
            name: newLikes.name,
            stars: newLikes.stars,
          };
          const oldLikes = [likesObj, ...likesStore];
          localStorage.setItem("likes", JSON.stringify(oldLikes));
        }
      } else {
        state.totalLikes = 0;
      }
    },

    removeLike(state, action) {
      let likesStore = JSON.parse(localStorage.getItem("likes")) ||[];
      
      window.location.reload()
      console.log(likesStore);
      likesStore = likesStore.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('likes', JSON.stringify(likesStore))

      if (state.totalLikes >= 0) state.totalLikes--;
      if (state.totalLikes < 0) state.totalLikes = 0;
    },

    totalCarts(state, action) {
      console.log(action);

      const testQty = state.products.find((item) => item.quantity === 0);
      if (state.totalCarts >= 0) {
        if (testQty) {
          state.totalCarts--;
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
