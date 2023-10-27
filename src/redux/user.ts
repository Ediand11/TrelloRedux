import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "Guest";

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = user.actions;

export default user.reducer;
