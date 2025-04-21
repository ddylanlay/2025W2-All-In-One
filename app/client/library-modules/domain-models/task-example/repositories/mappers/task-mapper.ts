import { Task } from "../../Task";
import { ApiTask } from "/app/client/library-modules/apis/example-tasks/models/ApiTask";

export function mapApiTasksToTasks(tasks: ApiTask[]): Task[] {
  return tasks.map((task) => {
    return {
      id: task.taskId,
      text: task.text
    }
  })
}