"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { formSchema, FormSchemaType } from "./components/FormSchema";
import { useAppDispatch } from "../../store";
import { TaskFormUIState } from "./state/TaskFormUIState";
import { load, selectTaskFormUiState, submitForm } from "./state/reducers/task-form-slice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavigationPath } from "../../navigation";
import { TaskFormMode } from "./enum/TaskFormMode";
import { unwrapResult } from "@reduxjs/toolkit";
export function TaskFormPage() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });
  const dispatch = useAppDispatch();
  const state: TaskFormUIState = useSelector(
    selectTaskFormUiState
  );
  const navigator = useNavigate();

  useEffect(() => {
    dispatch(load());
  }, []);

  const onClick = () => {
    console.log("Attempting to return to previous route.");
  };
  const navigate = (taskId: string) =>{ 
    navigator(`${NavigationPath.TaskListing}?taskId=${taskId}`);
  }

  const handleSubmit = async (values: FormSchemaType) => {
    const resultAction = await dispatch(submitForm(values))
    const taskId = unwrapResult(resultAction).taskId;
    if (taskId) {
      navigate(taskId);
    }

};
  
  return (
    <div className="mt-6 ml-10">
      <div className="flex flex-col items-start">
        <button
          onClick={onClick}
          className="flex items-center text-[#71717A] mb-2 gap-2 text-sm hover:underline"
        >
          <ArrowLeftIcon className="scale-75" />
          <span className="text-md">Back to Tasks</span>
        </button>
        <div>
          <h1 className="text-2xl font-bold mb-1">Task Listing</h1>
          <h3 className="text-sm text-[#71717A]">
            Create a new task 
          </h3>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 rounded-md space-y-10">
        <TaskForm
          onSubmit={handleSubmit}
          form={form}
          landlords={state.landlords}
          mode={TaskFormMode.CREATE}
        />
      </div>
    </div>
  );
}
