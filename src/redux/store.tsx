import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import columns from "./columns";
import tasks from "./tasks";
import user from "./user";

export const store = configureStore({
  reducer: {
    columns,
    tasks,
    user,
  },
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
