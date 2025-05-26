"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../theming-shadcn/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../theming-shadcn/Select";
import { Input } from "../../../theming-shadcn/Input";
import { Textarea } from "../../../theming-shadcn/Textarea";
import { format } from "date-fns";
import { UseFormReturn } from "react-hook-form";
import { TaskFormSchemaType } from "./TaskFormSchema";
import { FormHeading } from "../../../property-form-agent/components/FormHeading";
import { Landlord } from "/app/client/library-modules/domain-models/user/Landlord";
import { Property } from "/app/client/library-modules/domain-models/property/Property";
import { Calendar } from "../../../theming-shadcn/Calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "../../../theming-shadcn/Button";
import { RadioGroup, RadioGroupItem } from "../../../theming-shadcn/RadioGroup";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../theming-shadcn/Popover";
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
      <div> </div>
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
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <FormField
            control={form.control}
            name="task_duedate"
            render={({ field }) => (
              <FormItem className="flex flex-col py-2">
                <FormLabel>Task Due</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={`w-[240px] pl-3 text-left font-normal border-[--divider-color] ${
                          !field.value ? "text-muted-foreground" : ""
                        }`}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 border-(--divider-color) bg-white"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
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
