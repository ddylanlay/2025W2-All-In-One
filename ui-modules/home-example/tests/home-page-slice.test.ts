import { expect, test } from "@jest/globals";
import reducer from "/ui-modules/home-example/state/reducers/home-page-slice";

test("sum test", () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual({
    isLoading: true,
    taskDescriptions: [],
    taskIds: [],
    exampleTextboxValue: "",
  })
})