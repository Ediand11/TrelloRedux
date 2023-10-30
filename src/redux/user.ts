import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
}

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
