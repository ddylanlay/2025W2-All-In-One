import { apiGetTaskById } from "../../../apis/task/task-api";
import { Task } from "/app/client/library-modules/domain-models/task/Task";
import { mapApiTasktoTask } from "./mappers/task-mapper";
import { apiInsertTask } from "../../../apis/task/task-api";

export async function getTaskById(id: string): Promise<Task> {
  const apiTask = await apiGetTaskById(id);
  const mappedTask = mapApiTasktoTask(apiTask);

  return mappedTask;
}

export async function insertTask(
  taskId: string,
): Promise<string> {
  return await apiInsertTask(taskId);
}