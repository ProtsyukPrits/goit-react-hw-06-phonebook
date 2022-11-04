import { createSlice } from "@reduxjs/toolkit";

const filtringInitialState = "";

const filtringSlice = createSlice({
  name: "filter",
  initialState: filtringInitialState,
  reducers: {
    filtringContactsUser: {
      reducer(state, action) {
      state = action.payload;
      }
    }
  }
})

export const {filtringContactsUser} = filtringSlice.actions
export  const filtringReducer = filtringSlice.reducer;