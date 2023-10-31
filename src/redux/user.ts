import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserState = {
  userName: string;
};

const initialState: UserState = { userName: "" };

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { changeUserName } = user.actions;

export default user.reducer;
