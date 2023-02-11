import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    id: 0,
    img: "",
    name: "",
    phone: "",
    email: "",
    job: "",
  },
  reducers: {
    DeleteCard: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id += 1;
      console.log(state.id);
    },
    decrement: (state) => {
      state.id -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { DeleteCard, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
