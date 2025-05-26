"use client";
import React from "react";
import { FormHeading } from "../../../../property-form-agent/components/FormHeading";
import TaskFormPropertySelection from "./TaskFormProperty";
import TaskFormDescription from "./TaskFormDescription";
import TaskFormDateSelection from "./TaskFormDate";
import TaskFormTaskType from "./TaskFormTaskType";
import TaskFormTaskPriority from "./TaskFormPriority";
import TaskFormAssignTo from "./TaskFormAssignTo";

export default function TaskFormInformation(): React.JSX.Element {
  return (
    <div className="border border-(--divider-color) w-full p-7 rounded-md mb-3">
      {/* Form Heading */}
      <FormHeading
        title="Add a New Task"
        subtitle="Create a new task with details and assign it to yourself, a landlord, or a tenant."
      />

      {/* Property Selection */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-12">
          <TaskFormPropertySelection />
        </div>
      </div>

      {/* Task Details */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-6">
          <TaskFormTaskType />
        </div>
        <div className="col-span-6">
          <TaskFormTaskPriority />
        </div>
      </div>

      {/* Date Selection */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-6">
          <TaskFormDateSelection />
        </div>
        <div className="col-span-6">
          <TaskFormAssignTo />
        </div>
      </div>

      {/* Task Description */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <TaskFormDescription />
        </div>
      </div>
    </div>
  );
}
