import { Column } from "../types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Column[] = [
  { id: "todo", title: "TODO" },
  { id: "doing", title: "In Progress" },
  { id: "testing", title: "Testing" },
  { id: "done", title: "Done" },
];

const columns = createSlice({
  name: "columns",
  initialState,
  reducers: {},
});

export const {} = columns.actions;

export default columns.reducer;
