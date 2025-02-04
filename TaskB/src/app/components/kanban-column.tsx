"use client";
import { Column } from "../data/columns-data";
import { useKanbanContext } from "./kanban-context";
import TaskCard from "./kanban-taskcard";

export default function KanbanColumn({ title, color, tasks }: Column) {
  const { setDraggedOverColumn } = useKanbanContext();
  return (
    <div
      className={`w-64 p-4 rounded-lg shadow-md ${color}`}
      onDragEnter={() => {
        setDraggedOverColumn(title as "Ready");
      }}
    >
      <h2 className="text-lg font-semibold mb-3 text-black">{title}</h2>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
}
