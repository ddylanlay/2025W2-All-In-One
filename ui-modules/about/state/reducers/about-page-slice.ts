import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AboutPageUiState } from "/ui-modules/about/state/AboutPageUiState";
import {
  addNewTask as repoAddNewTask,
  getAllTasks,
} from "/library-modules/domain-models/task-example/repositories/task-repository";
import { RootState } from "/app/store";

const initialState: AboutPageUiState = {
  isLoading: true,
  taskDescriptions: [],
  taskIds: [],
  exampleTextboxValue: "",
};

export const aboutPageSlice = createSlice({
  name: "aboutPage",
  initialState: initialState,
  reducers: {
    updateTextboxValue: (state, action: PayloadAction<string>) => {
      state.exampleTextboxValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.taskDescriptions = action.payload.map((task) => task.text);
        state.taskIds = action.payload.map((task) => task.id);
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.taskDescriptions.push(action.payload.text);
        state.taskIds.push(action.payload.id);
      });
  },
});

export const loadTasks = createAsyncThunk("aboutPage/loadTasks", async () => {
  const tasks = await getAllTasks();
  return tasks;
});

export const addNewTask = createAsyncThunk(
  "aboutPage/addNewTask",
  async (text: string) => {
    const id = await repoAddNewTask(text);
    const newTask = { id: id, text: text };
    return newTask;
  }
);

export const { updateTextboxValue } = aboutPageSlice.actions;
export const selectAboutPageUiState = (state: RootState) => state.aboutPage