import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Id } from "../types/types";

const getTasks = (state: RootState) => state.tasks;
const getColumnId = (state: RootState, columnId: Id) => columnId;

// Create a selector using reselect to select tasks for a specific column
export const getTasksByColumnId = createSelector([getTasks, getColumnId], (tasks, columnId) => {
  return tasks.filter((task) => task.columnId === columnId);
});
