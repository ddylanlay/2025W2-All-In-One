import { expect, test } from "@jest/globals";
import reducer, { loadTasks, updateTextboxValue } from "/ui-modules/home-example/state/reducers/home-page-slice";
import { Task } from "/library-modules/domain-models/task-example/Task";

const initialState = {
  isLoading: true,
  taskDescriptions: [],
  taskIds: [],
  exampleTextboxValue: "",
};

test("when the reducer is loaded, then it should return correct initial state", () => {
  // ACT
  const res = reducer(undefined, { type: "unknown" });

  // ASSERT
  expect(res).toEqual(initialState);
});

test("when an update to the textbox value is sent, then the updated textbox value should match", () => {
  // ARRANGE
  const newTextboxValue = "test";
  const expectedUpdatedState = {
    ...initialState,
    exampleTextboxValue: newTextboxValue,
  }

  // ACT
  const updatedState = reducer(initialState, updateTextboxValue(newTextboxValue));

  // ASSERT
  expect(updatedState).toEqual(expectedUpdatedState);
});

test("when the tasks are fetched, then the state should be updated with task descriptions and ids that should match the same order", async () => {
  // ARRANGE
  const fakeTasks: Task[] = [
    {
      id: "afwn7JnD8",
      text: "todo1",
    },
    {
      id: "cFDd24dz",
      text: "todo2",
    },
  ];
  const expectedTaskIds = fakeTasks.map((task) => task.id)
  const expectedTaskDescriptions = fakeTasks.map((task) => task.text)

  // ACT
  const updatedState = reducer(initialState, loadTasks.fulfilled(fakeTasks, ""));

  // ASSERT
  expect(updatedState.taskIds).toEqual(expectedTaskIds)
  expect(updatedState.taskDescriptions).toEqual(expectedTaskDescriptions)
});
