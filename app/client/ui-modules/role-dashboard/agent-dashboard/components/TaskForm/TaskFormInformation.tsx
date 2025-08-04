"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { Form } from "../../theming-shadcn/Form";
import TaskFormAssignTo from "./TaskFormAssignTo";
import TaskFormDate from "./TaskFormDate";
import TaskFormDescription from "./TaskFormDescription";
import TaskFormPriority from "./TaskFormPriority";
import TaskFormProperty from "./TaskFormProperty";
import TaskFormTaskType from "./TaskFormTaskType";

import FormPropertyDetails from "./FormPropertyDetails";
import FormPropertyImages from "./FormPropertyImages";
import FormListingOptions from "./FormListingOptions";
import { formSchema, FormSchemaType } from "./FormSchema";
import { Button } from "../../theming-shadcn/Button";
import { Landlord } from "/app/client/library-modules/domain-models/user/Landlord";
import { TaskFormMode } from "../enum/TaskFormMode";

export function TaskFormInformation({
  form,
  onSubmit,
  landlords,
  date,
  mode = PropertyFormMode.CREATE,
}: {
  form: UseFormReturn<FormSchemaType>;
  onSubmit: (values: FormSchemaType) => void;
  landlords: (Landlord & { firstName: string; lastName: string })[];
  mode: TaskFormMode;
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TaskFormAssignTo form={form} landlords={landlords} />
        <TaskFormDate form={form} />
        <TaskFormDescription form={form} />
        <TaskFormPriority form={form} />
        <TaskFormProperty form={form} />
        <TaskFormTaskType form={form} />
        <div className="flex justify-end mt-5">
          <Button type="submit">
            {mode === TaskFormMode.CREATE ? "Create Task" : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export const formDefaultValues: z.infer<typeof formSchema> = {
  landlord: "",
  task_duedate: new Date(),
  task_description: "",
  task_priority: "",
  property: "",
  task_type: "",
};
