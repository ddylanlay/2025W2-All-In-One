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
import { Property } from "/app/client/library-modules/domain-models/property/Property";

export default function TaskFormPropertySelection({
  form,
  properties,
}: {
  form: UseFormReturn<TaskFormSchemaType>;
  properties: Property[];
}): React.JSX.Element {
  return (
    <div className="border border-(--divider-color) w-full p-7 rounded-md mb-3">
      <FormField
        control={form.control}
        name="property"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Property</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={
                field.value !== undefined ? String(field.value) : undefined
              }
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Property" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-white">
                {properties.map((property) => (
                  <SelectItem
                    key={property.propertyId}
                    value={property.propertyId}
                  >
                    {property.streetnumber} {property.streetname}{" "}
                    {property.postcode}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
