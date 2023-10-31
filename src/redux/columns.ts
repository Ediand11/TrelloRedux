import { Column, Id } from "../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Column[] = [
  { id: "todo", title: "TODO" },
  { id: "doing", title: "In Progress" },
  { id: "testing", title: "Testing" },
  { id: "done", title: "Done" },
];

const columns = createSlice({
  name: "columns",
  initialState,
  reducers: {
    changeColumnName: (state, action: PayloadAction<{ id: Id; newTitle: string }>) => {
      const { id, newTitle } = action.payload;
      const columnToUpdate = state.find((column) => column.id === id);

      if (columnToUpdate) {
        columnToUpdate.title = newTitle;
      }
    },
    createColumn: (state) => {
      state.push({
        id: Math.floor(Math.random() * 10001),
        title: `Column ${state.length + 1}`,
      });
    },
    deleteColumn: (state, action) => state.filter((column) => column.id !== action.payload),
  },
});

export const { changeColumnName, createColumn, deleteColumn } = columns.actions;

export default columns.reducer;
