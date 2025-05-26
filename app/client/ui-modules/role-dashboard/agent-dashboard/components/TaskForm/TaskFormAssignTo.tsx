"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../theming-shadcn/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../theming-shadcn/Select";
import { UseFormReturn } from "react-hook-form";
import { TaskFormSchemaType } from "../TaskFormSchema";

export default function TaskFormTaskType({
  form,
}: {
  form: UseFormReturn<TaskFormSchemaType>;
}): React.JSX.Element {
  return (
    <div className="border border-(--divider-color) w-full p-7 rounded-md mb-3">
        <FormField
          control={form.control}
          name="task_type"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Task Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select task type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="house">Inspection</SelectItem>
                  <SelectItem value="apartment">Maintenance</SelectItem>
                  <SelectItem value="apartment">Admin</SelectItem>
                  <SelectItem value="apartment">Document signing</SelectItem>
                  <SelectItem value="apartment">Cleaning</SelectItem>
                  <SelectItem value="apartment">Online Meeting</SelectItem>
                  <SelectItem value="apartment">In Person Meeting</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
    </div>
  );
}
