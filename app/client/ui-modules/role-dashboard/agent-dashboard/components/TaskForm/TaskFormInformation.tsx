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
import { Textarea } from "../../../../theming-shadcn/Textarea";
import { format } from "date-fns";
import { UseFormReturn } from "react-hook-form";
import { TaskFormSchemaType } from "../TaskFormSchema";
import { FormHeading } from "../../../../property-form-agent/components/FormHeading";
import { Landlord } from "/app/client/library-modules/domain-models/user/Landlord";
import { Property } from "/app/client/library-modules/domain-models/property/Property";
export default function FormBasicInformation({
  form,
  landlords,
  properties,
}: {
  form: UseFormReturn<TaskFormSchemaType>;
  landlords: Landlord[];
  properties: Property[];
}) {
  return (
    <div className="border border-(--divider-color) w-full p-7 rounded-md mb-3">
      <FormHeading
        title="Add a New Task"
        subtitle="Create a new task with details and assign it to yourself, a landlord, or a tenant."
      ></FormHeading>
      
      <div> </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">

          <div className="grid grid-cols-12 gap-4">
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
        </div>
      </div>
    </div>
  );
}
