import { Edit, Trash2 } from "lucide-react";
import { TaskCardProps } from "../data/columns-data";
import { useKanbanContext } from "./kanban-context";

// const TaskCard: React.FC<TaskCardProps> = ({ title, description, status, tag }) => {

export default function TaskCard(task: TaskCardProps) {
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
                tasks: [...p.tasks, task],
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
          <button
            onClick={() => removeTask(id, title)}
            className="text-gray-500 hover:text-blue-600"
          >
            <Edit size={16} />
          </button>
          <button className="text-gray-500 hover:text-red-600">
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
