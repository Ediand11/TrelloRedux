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
  reducers: {
    changeColumnName: (state, action) => {
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
    // Добавить удаление tasks
  },
});

export const { changeColumnName, createColumn, deleteColumn } = columns.actions;

export default columns.reducer;

//functions

// function deleteColumn(id: Id) {
//   const filteredColumns = columns.filter((col) => col.id !== id);
//   setColumns(filteredColumns);
//   const newTasks = tasks.filter((task) => task.columnId !== id);
//   setTasks([...newTasks]);
// }