"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../theming-shadcn/Form";
import { RadioGroup, RadioGroupItem } from "../../../../theming-shadcn/RadioGroup";
import { UseFormReturn } from "react-hook-form";
import { TaskFormSchemaType } from "../TaskFormSchema";


export default function TaskFormTaskPriority({
  form,
}: {
  form: UseFormReturn<TaskFormSchemaType>;
}): React.JSX.Element {
  return (
    <div className="border border-(--divider-color) w-full p-7 rounded-md mb-3">
              <FormField
            control={form.control}
            name="task_priority"
            render={({ field }) => (
              <FormItem className="space-y-3 py-2">
                <FormLabel>Task Priority</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    className="flex flex-col space-y-2"
                  >
                    {[
                      ["High", "High"],
                      ["Medium", "Medium"],
                      ["Low", "Low"],
                    ].map((option, index) => (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={index}
                      >
                        <FormControl>
                          <RadioGroupItem value={option[1]} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option[0]}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
    </div>
  );
}
