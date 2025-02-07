import { Edit, Trash2 } from "lucide-react";
import { TaskCardProps } from "../data/columns-data";
import { useKanbanContext } from "./kanban-context";

// const TaskCard: React.FC<TaskCardProps> = ({ title, description, status, tag }) => {

export default function TaskCard({
  task,
  columnTitle,
}: {
  task: TaskCardProps;
  columnTitle: string;
}) {
  const { title, description, tag, id } = task;
  const {
    setDraggedTaskId,
    draggedOverColumn,
    setDraggedOverTaskId,
    setColumns,
    removeTask,
  } = useKanbanContext();
  return (
    <div
      draggable
      className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500"
      onDrag={() => {
        setDraggedTaskId(id);
      }}
      onDragOver={() => {
        setDraggedOverTaskId(id);
      }}
      onDragEnd={() => {
        setColumns((prev) => {
          return prev.map((p) => {
            if (p.title === draggedOverColumn) {
              return {
                ...p,
                tasks: p.tasks.some((t) => t.id === task.id) //Check if task already exists
                  ? p.tasks //If exists, keep same tasks
                  : [...p.tasks, task], // Otherwise, add task
              };
            }

            return p;
          });
        });
      }}
    >
      <div className="flex">
        <h3 className="font-semibold text-black">{title}</h3>
        <div className="flex space-x-2 ml-1">
          <button className="text-gray-500 hover:text-blue-600">
            <Edit size={16} />
          </button>
          <button
            onClick={() => removeTask(id, columnTitle)}
            className="text-gray-500 hover:text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{description}</p>

      {tag && (
        <div className="mt-3 flex items-center space-x-2text-xs">
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md">
            {tag}
          </span>
        </div>
      )}
    </div>
  );
}
