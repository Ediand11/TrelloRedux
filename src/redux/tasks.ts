import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Id, Task } from "../types/types";

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
  reducers: {
    createTask: (state, action: PayloadAction<{ userName: string; columnId: Id }>) => {
      const { userName, columnId } = action.payload;
      const newTask = {
        id: Math.floor(Math.random() * 10001).toString(),
        columnId,
        content: `Task ${state.length + 1}`,
        author: userName,
      };
      state.push(newTask);
    },

    updateTask: (state, action: PayloadAction<{ id: Id; content: string }>) => {
      const { id, content } = action.payload;

      for (const task of state) {
        if (task.id === id) {
          if (typeof content === "string") {
            task.content = content;
          } else {
            if (!Array.isArray(task.comments)) {
              task.comments = [];
            }
            task.comments.push(content);
          }
          break; // Stop iterating further since the task has been found
        }
      }
    },

    deleteTask: (state, action: PayloadAction<{ id: Id }>) => {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    },

    deleteTasksColumn: (state, action: PayloadAction<{ id: Id }>) => {
      const { id } = action.payload;

      return state.filter((task) => task.columnId !== id);
    },

    addComment: (
      state,
      action: PayloadAction<{ taskId: Id; contentComment: string; authorComment: string }>
    ) => {
      const { taskId, contentComment, authorComment } = action.payload;

      const newComment = {
        idComment: Math.floor(Math.random() * 10001),
        contentComment,
        authorComment: authorComment || "Anonyms", // Assuming `user` is a global variable
      };

      const task = state.find((task) => task.id === taskId);
      if (task) {
        if (!Array.isArray(task.comments)) {
          task.comments = []; // Initialize comments array if it doesn't exist
        }
        task.comments.push(newComment);
      }
    },

    deleteComment: (state, action: PayloadAction<{ taskId: Id; commentId: Id }>) => {
      const { taskId, commentId } = action.payload;

      const task = state.find((task) => task.id === taskId);
      if (task && Array.isArray(task.comments)) {
        task.comments = task.comments.filter((comment) => comment.idComment !== commentId);
      }
    },

    updateComment: (
      state,
      action: PayloadAction<{ taskId: Id; commentId: Id; content: string }>
    ) => {
      const { taskId, commentId, content } = action.payload;

      const task = state.find((task) => task.id === taskId);
      if (task && Array.isArray(task.comments)) {
        const comment = task.comments.find((comment) => comment.idComment === commentId);
        if (comment) {
          comment.contentComment = content;
        }
      }
    },
  },
});

export const {
  createTask,
  updateTask,
  deleteTask,
  addComment,
  deleteComment,
  updateComment,
  deleteTasksColumn,
} = tasks.actions;

export default tasks.reducer;
