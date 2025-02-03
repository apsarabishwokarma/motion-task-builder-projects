// src/components/KanbanColumn.tsx
"use client";
import { Column } from "../data/columns-data";
import TaskCard from "./kanban-taskcard";

export default function KanbanColumn({ title, color, tasks }: Column) {
  return (
    <div
      className={`w-64 p-4 rounded-lg shadow-md ${color}`}
      onDragEnter={() => {
        console.log(title);
      }}
      onDragEnd={() => {
        console.log(title, "end");
      }}
    >
      <h2 className="text-lg font-semibold mb-3 text-black">{title}</h2>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          //           <TaskCard
          //   key={index}
          //   title={task.title}
          //   description={task.description}
          //   status={task.status}
          //   tag={task.tag}
          // />
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
}
