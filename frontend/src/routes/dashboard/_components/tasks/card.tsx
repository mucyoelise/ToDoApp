import { Task } from "@/types/types";
import { TagBadge } from "../tags/tag-badge";
import { StatusBadge } from "./status-badge";
import { ShowDialog } from "./show-dialog";
import { EditDialog } from "./edit-dialog";

interface IProps {
  task: Task;
}

const getStatusStyles = (status: Task["status"]) => {
  switch (status) {
    case "TaskStatus.PENDING":
      return "bg-yellow-600 border-yellow-400";
    case "TaskStatus.IN_PROGRESS":
      return "bg-blue-600 border-blue-400";
    case "TaskStatus.COMPLETED":
      return "bg-green-600 border-green-400";
    default:
      return "";
  }
};

export const TaskCard = ({ task }: IProps) => {

  return (
    <div className={`border rounded-md p-4 bg-background ${getStatusStyles(task.status)}`}>
      <div className="pb-2 flex items-center">
        <ShowDialog task={task} />
        <EditDialog task={task} />
      </div>
      <div className="flex items-center gap-x-1">
        <TagBadge name={task.tagName} />
        <StatusBadge status={task.status} />
      </div>
    </div>
  );
};
