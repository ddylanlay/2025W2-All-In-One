import React, { useEffect } from "react";
import { Task } from "./components/Task";
import { AddTaskButton } from "./components/AddTaskButton";
import { HomePageUiState } from "./state/HomePageUiState";
import { addNewTask, loadTasks, selectHomePageUiState, updateTextboxValue } from "./state/reducers/home-page-slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "/app/store";

export function ExampleHomePage(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const homePageUiState: HomePageUiState = useSelector(selectHomePageUiState)

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  function handleNewTaskAdded(text: string): void {
    dispatch(addNewTask(text));
  }

  function handleTextboxChange(newValue: string): void {
    dispatch(updateTextboxValue(newValue));
  }

  return (
    <ExampleHomePageBase
      homePageUiState={homePageUiState}
      onNewTaskAdded={handleNewTaskAdded}
      onTextboxChange={handleTextboxChange}
    />
    // Some other components here too that would also receive homePageUiState
  );
}

function ExampleHomePageBase({
  homePageUiState,
  onNewTaskAdded,
  onTextboxChange,
}: {
  homePageUiState: HomePageUiState;
  onNewTaskAdded: (text: string) => void;
  onTextboxChange: (text: string) => void;
}): React.JSX.Element {
  if (homePageUiState.isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="p-5">
        <div className="relative flex flex-col items-center justify-center min-h-[80vh] bg-white overflow-hidden px-4">
          {/* Animated Ripple Background */}
          <div className="ripple pointer-events-none z-0" />

          {/* Foreground content */}
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] mb-6">
              Find your perfect rental home
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Search thousands of rental properties in your area
            </p>
        {/* Search input and button */}
            <div className="flex justify-center gap-4">
              <input
                type="text"
                placeholder="Enter city or postcode"
                //value={searchTerm}
                //onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-64"
              />
              <button
                //onClick={handleSearch}
                className="mt-4 px-6 py-3 bg-[#111827] text-white rounded-xl hover:bg-[#1f2937] transition"
              >
                Search
              </button>
            </div>

          </div>
        </div>

        {/* This should be a seperate react component */}
        <h1 className="title-example-style">Welcome to All in One!</h1>

        {/* This should be a seperate react component */}
        <ul className="list-example-style">
          {homePageUiState.taskDescriptions.map((description, i) => (
            <Task key={homePageUiState.taskIds[i]} text={description} />
          ))}
        </ul>

        <AddTaskButton
          onClick={() => {
            onNewTaskAdded("New Task");
          }}
        />

        {/* This should be a seperate react component */}
        <input
          type="text"
          className="textbox-example-style"
          placeholder="Type something..."
          value={homePageUiState.exampleTextboxValue}
          onChange={(e) => onTextboxChange(e.target.value)}
        />
      </div>
    );
  }
}
