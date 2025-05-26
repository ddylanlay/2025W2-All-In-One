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
import { Textarea } from "/app/client/ui-modules/theming-shadcn/Textarea";
export default function TaskFormDescription({
  form,
}: {
  form: UseFormReturn<TaskFormSchemaType>;
}): React.JSX.Element {
  return (
    <div className="border border-(--divider-color) w-full p-7 rounded-md mb-3">
      <FormField
        control={form.control}
        name="task_description"
        render={({ field }) => (
          <FormItem className="py-2">
            <FormLabel>Property Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe the property in detail..."
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
