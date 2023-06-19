import { createSlice } from "@reduxjs/toolkit";

export const assignSlice = createSlice({
  name: "assign",
  initialState: {
    value: [
      {
        uuid: 1,
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        name: "please select",
        task: [],
      },
      {
        uuid: 1,
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        name: "vinod",
        task: [],
      },
      {
        uuid: 2,
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        name: "ram",
        task: [],
      },

      {
        uuid: 4,
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        name: "shyam",
        task: [],
      },
    ],
  },
  reducers: {
    counter: (state, action) => {
      console.log(state.value);
    },
    push: (state, action) => {
      state.data = [...state["data"], action.payload];
    },
  },
});

export const { push, counter } = assignSlice.actions;

export const selectData = (state) => state.assign.value;

export default assignSlice.reducer;
