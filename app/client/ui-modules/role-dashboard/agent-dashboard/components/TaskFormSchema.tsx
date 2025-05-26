import * as z from "zod";

export const taskFormSchema = z.object({
   landlord: z.string().min(1, { message: "Please assign a landlord" }),
   property: z.string().min(1, { message: "Please select a relevant property" }),
   task_type: z.string().min(1, { message: "Please select a task type" }),
   task_duedate: z.coerce.date(),
   task_priority: z.string().min(1, { message: "Please select a task priority" }),
   task_description: z.string().min(1, { message: "Please describe the task" }),
  // address: z.string().min(1, { message: "Please fill out field" }),
  // city: z.string().min(1, { message: "Please fill out field" }),
  // state: z.string().min(1, { message: "Please fill out field" }),
  // postal_code: z.string().length(4, { message: "Postal code must be 4 digits long" }),
  // apartment_number: z.string().optional(),
  // bedroom_number: z.coerce.number().min(1, { message: "Please fill out field" }),
  // bathroom_number: z.coerce.number().min(1, { message: "Please fill out field" }),
  // space: z.coerce.number().min(1, { message: "Please fill out field" }),
  // description: z.string().min(1, { message: "Please fill out field" }),
  // // amenities: z.string().min(1, { message: "Please fill out field" }),
  // images: z.array(z.instanceof(File)).min(1, { message: "At least one image is required" }),
  // available_dates: z.coerce.date(),
  // lease_term: z.string().min(1, { message: "Lease term is required" }),
  // show_contact_boolean: z.boolean().optional(),
});

export type TaskFormSchemaType = z.infer<typeof taskFormSchema>;
