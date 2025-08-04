import { ApiTask } from "/app/shared/api-models/task/ApiTask";
import { MeteorMethodIdentifier } from "/app/shared/meteor-method-identifier";
import { TaskInsertData } from "/app/shared/api-models/task/TaskInsertData";
import { TaskUpdateData } from "/app/shared/api-models/task/TaskUpdateData";
export async function apiGetTaskById(id: string): Promise<ApiTask> {
  const fetchedTask = await Meteor.callAsync(MeteorMethodIdentifier.TASK_GET, id);

  return fetchedTask;
}

export async function apiInsertTask(task: TaskInsertData): Promise<string> {
  return await Meteor.callAsync(MeteorMethodIdentifier.TASK_INSERT, task);
}


export async function apiUpdateTaskData(updatedTask: TaskUpdateData): Promise<string> {
  return await Meteor.callAsync(MeteorMethodIdentifier.TASK_DATA_UPDATE, updatedTask);
}