import { mapApiTasksToTasks } from "./mappers/task-mapper";
import { apiAddNewTask, apiGetAllTasks } from "../../../apis/example-tasks/task-api";
import { Task } from "../Task";

export async function repoGetAllTasks(): Promise<Task[]> {
  const dbTasks = await apiGetAllTasks();
  const mappedTasks = mapApiTasksToTasks(dbTasks)

  return mappedTasks;
}

export async function repoAddNewTask(text: string): Promise<string> {
  return apiAddNewTask(text)
}