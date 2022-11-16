import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "calculator",
  initialState: { counter: [], total: null, symbol: "" },
  reducers: {
    inputNumber(state, action) {
      state.counter = [...state.counter, [action.payload]];
      //console.log(state.counter);
    },
    plus(state, action) {
      if (parseInt(state.counter) === null) {
        return;
      }
      if (!state.counter.length && typeof state.total === "number") {
        state.symbol = action.payload;
      }
      if (state.counter.length) {
        console.log("plus");
        state.total += parseFloat(state.counter.join(""));
        state.counter = [];
        state.symbol = action.payload;
        //console.log(state.symbol);
      }
    },

    minus(state, action) {
      if (!state.counter.length && state.total === null) {
        return;
      }

      if (!state.counter.length && typeof state.total === "number") {
        state.symbol = action.payload;
      }
      if (!state.total) {
        state.total += parseFloat(state.counter.join(""));
      } else {
        if (state.counter.length) {
          state.total -= parseFloat(state.counter.join(""));
        }
      }

      state.counter = [];
      state.symbol = action.payload;
    },
    multiply(state, action) {
      if (!state.counter.length && state.total === null) {
        return;
      }

      if (!state.counter.length && typeof state.total === "number") {
        state.symbol = action.payload;
      }

      if (!state.total) {
        state.total += parseFloat(state.counter.join(""));
      } else {
        if (state.counter.length) {
          state.total *= parseFloat(state.counter.join(""));
        }
      }

      state.counter = [];
      state.symbol = action.payload;

      
    },
    divide(state, action) {
      if (!state.counter.length && state.total === null) {
        return;
      }

      if (!state.counter.length && typeof state.total === "number") {
        state.symbol = action.payload;
      }

      if (!state.total) {
        state.total /= parseFloat(state.counter.join(""));
      } else {
        if (state.counter.length) {
          state.total /= parseFloat(state.counter.join(""));
        }
      }

      state.counter = [];
      state.symbol = action.payload;

    },

    equals(state, action) {
      if (state.counter.length < 0 || state.total === null) {
        return;
      }

      if (state.symbol === "+") {
        state.total += parseFloat(state.counter.join(""));
        state.symbol = "";
        state.counter = [];
      }

      if (state.symbol === "-") {
        state.total -= parseFloat(state.counter.join(""));
        state.symbol = "";
        state.counter = [];
      }
      if (state.symbol === "*") {
        console.log(state.symbol);
        state.total *= parseFloat(state.counter.join(""));
        state.symbol = "";
        state.counter = [];
      }

      if (state.symbol === "/") {
        state.total /= parseFloat(state.counter.join(""));
        state.symbol = "";
        state.counter = [];
      }
    },
    allClear(state, action) {
      state.total = null;
      state.counter = [];
      state.symbol = "";
      console.log("all clear");
    },

    backDelete(state, action) {
      state.counter.pop();
      console.log("delete");
    },
  },
});
export const actions = counterSlice.actions;
const store = configureStore(counterSlice);

export default store;
