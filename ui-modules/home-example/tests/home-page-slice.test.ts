import { expect, test } from "@jest/globals";
import reducer from "/ui-modules/home-example/state/reducers/home-page-slice";

test("when reducer is loaded, should return correct initial state", () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual({
    isLoading: true,
    taskDescriptions: [],
    taskIds: [],
    exampleTextboxValue: "",
  })
})