import * as z from "zod";

export const taskFormSchema = z.object({
   landlord: z.string().min(1, { message: "Please assign a landlord" }),
   property: z.string().min(1, { message: "Please select a relevant property" }),
   task_type: z.string().min(1, { message: "Please select a task type" }),
   task_duedate: z.coerce.date(),
   task_priority: z.string().min(1, { message: "Please select a task priority" }),
   task_description: z.string().min(1, { message: "Please describe the task" }),
});

export type TaskFormSchemaType = z.infer<typeof taskFormSchema>;
