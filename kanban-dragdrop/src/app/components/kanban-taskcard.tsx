"use client";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
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
    draggedTaskHeight,
    draggedOverTaskId,
    setDraggedOverColumn,
  } = useKanbanContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSaveTask = () => {
    setColumns((prev) => {
      return prev.map((col) => {
        if (col.title === columnTitle) {
          return {
            ...col,
            tasks: col.tasks.map((t) =>
              t.id === id ? { ...t, ...editedTask } : t
            ),
          };
        }
        return col;
      });
    });
    setIsEditing(false);
  };

  return (
    <>
      <div
        id={`task-card-${id}`}
        draggable
        className={
          "bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500 transition-all mt-3"
        }
        style={{
          marginTop: draggedOverTaskId === id ? draggedTaskHeight : 12,
        }}
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
                const draggedOverTaskIndex = p.tasks.findIndex(
                  (t) => t.id === draggedOverTaskId
                );
                const downTasks = p.tasks.slice(draggedOverTaskIndex);
                const upTasks = p.tasks.slice(0, draggedOverTaskIndex);

                return {
                  ...p,
                  tasks: p.tasks.some((t) => t.id === task.id) //Check if task already exists
                    ? p.tasks //If exists, keep same tasks
                    : [...upTasks, task, ...downTasks], // Otherwise, add task
                };
              }

              return p;
            });
          });
          if (columnTitle !== draggedOverColumn) {
            removeTask(id, columnTitle);
          }
          setDraggedOverTaskId(undefined);
          setDraggedOverColumn(undefined);
          setDraggedTaskId(undefined);
        }}
      >
        <div className="flex">
          <h3 className="font-semibold text-black overflow-hidden">{title}</h3>
          <div className="flex space-x-2 ml-1">
            <button
              onClick={() => setIsEditing(true)}
              className="text-gray-500 hover:text-blue-600"
            >
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
      {isEditing && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96 text-black">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>

            <input
              type="text"
              placeholder="Title"
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({ ...editedTask, title: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />

            <textarea
              placeholder="Description"
              value={editedTask.description}
              onChange={(e) =>
                setEditedTask({ ...editedTask, description: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />

            <input
              type="text"
              placeholder="Tag"
              value={editedTask.tag}
              onChange={(e) =>
                setEditedTask({ ...editedTask, tag: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />

            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#FFF6E1] px-4 py-2 rounded"
                onClick={handleSaveTask}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
