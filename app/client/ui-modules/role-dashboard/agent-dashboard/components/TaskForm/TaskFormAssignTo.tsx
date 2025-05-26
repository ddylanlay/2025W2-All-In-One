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
import { Landlord } from "/app/client/library-modules/domain-models/user/Landlord";
export default function TaskFormAssignTo({
  form,
  landlords,
}: {
  form: UseFormReturn<TaskFormSchemaType>;
  landlords: Landlord[];
}): React.JSX.Element {
  return (
    <div className="border border-(--divider-color) w-full p-7 rounded-md mb-3">
           <FormField
        control={form.control}
        name="landlord"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Assign To </FormLabel>
            <Select
              onValueChange={(val) => field.onChange(val)}
              defaultValue={
                field.value !== undefined ? String(field.value) : undefined
              }
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Assign a tenant, landlord or yourself" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-white">
                {landlords.map((landlord) => (
                  <SelectItem
                    key={String(landlord.landlordId)}
                    value={String(landlord.landlordId)}
                  >
                    {landlord.firstName} {landlord.lastName}
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