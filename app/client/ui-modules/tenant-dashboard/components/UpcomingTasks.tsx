// components/UpcomingTasks.tsx
import React from "react";

// Define the Task interface
interface Task {
  id: string;
  title: string;
  address: string;
  dateTime: string;
  status: "due_soon" | "upcoming" | "overdue";
}

interface UpcomingTasksProps {
  tasks: Task[];
}

const UpcomingTasks: React.FC<UpcomingTasksProps> = ({ tasks }) => {
  // Function to render the status badge
  const renderStatusBadge = (status: Task["status"]) => {
    const statusStyles = {
      due_soon: "bg-amber-50 text-amber-800",
      upcoming: "bg-blue-50 text-blue-700",
      overdue: "bg-red-50 text-red-700",
    };

    const statusText = {
      due_soon: "Due Soon",
      upcoming: "Upcoming",
      overdue: "Overdue",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
      >
        {statusText[status]}
      </span>
    );
  };

  return (
    <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-sm">
      <h2 className="text-3xl font-bold mb-2">Upcoming Tasks</h2>
      <p className="text-gray-600 mb-6">
        Your scheduled tasks and appointments
      </p>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <p className="text-gray-600">{task.address}</p>
                <p className="text-gray-800 font-medium mt-1">
                  {task.dateTime}
                </p>
              </div>
              <div>{renderStatusBadge(task.status)}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-center hover:bg-gray-50 transition-colors">
        View All Tasks
      </button>
    </div>
  );
};

export default UpcomingTasks;
