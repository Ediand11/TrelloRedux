import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import columns from "./columns";
import tasks from "./tasks";

export const store = configureStore({
  reducer: {
    columns,
    tasks,
  },
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
