export type TaskInsertData = {
  taskId: string;
  name: string;
  status: string;
  createdDate: Date;
  dueDate: Date;
  description: string;
  priority: string;
}

export type TaskFormData = {
  taskId: string;
  name: string;
  status: string;
  createdDate: Date;
  dueDate: Date;
  description: string;
}