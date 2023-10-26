import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/types";

const initialState: Task[] = [
  {
    id: "1",
    columnId: "todo",
    content: "List admin APIs for dashboard",
    author: "Test User",
    comments: [
      {
        idComment: "1",
        authorComment: "Test User",
        contentComment: "Test Comment",
      },
      {
        idComment: "2",
        authorComment: "Test User",
        contentComment: "Test Comment",
      },
      {
        idComment: "3",
        authorComment: "Test User",
        contentComment: "Test Comment",
      },
      {
        idComment: "4",
        authorComment: "Test User",
        contentComment: "Test Comment",
      },
    ],
  },
  {
    id: "2",
    columnId: "todo",
    content:
      "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
    author: "Test User",
  },
  {
    id: "3",
    columnId: "doing",
    content: "Conduct security testing",
    author: "Test User",
  },
  {
    id: "4",
    columnId: "doing",
    content: "Analyze competitors",
    author: "Test User",
  },
  {
    id: "5",
    columnId: "done",
    content: "Create UI kit documentation",
    author: "Test User",
  },
  {
    id: "6",
    columnId: "done",
    content: "Dev meeting",
    author: "Test User",
  },
  {
    id: "7",
    columnId: "done",
    content: "Deliver dashboard prototype",
    author: "Test User",
  },
  {
    id: "8",
    columnId: "todo",
    content: "Optimize application performance",
    author: "Test User",
    comments: [
      {
        idComment: "22",
        authorComment: "Test User",
        contentComment: "Test Comment",
      },
    ],
  },
  {
    id: "9",
    columnId: "todo",
    content: "Implement data validation",
    author: "Test User",
    comments: [
      {
        idComment: "11",
        authorComment: "Test User",
        contentComment: "Test Comment",
      },
    ],
  },
  {
    id: "10",
    columnId: "todo",
    content: "Design database schema",
    author: "Test User",
  },
  {
    id: "11",
    columnId: "todo",
    content: "Integrate SSL web certificates into workflow",
    author: "Test User",
  },
  {
    id: "12",
    columnId: "doing",
    content: "Implement error logging and monitoring",
    author: "Test User",
  },
  {
    id: "13",
    columnId: "doing",
    content: "Design and implement responsive UI",
    author: "Test User",
  },
];

const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const {} = tasks.actions;

export default tasks.reducer;
