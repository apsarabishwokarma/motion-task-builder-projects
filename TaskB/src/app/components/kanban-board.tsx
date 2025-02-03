"use client";

import Column from "./kanban-column";
import { useKanbanContext } from "./kanban-context";

export default function KanbanBoard() {
  const { columns, setColumns } = useKanbanContext();
  return (
    <div>
      <button
        onClick={() => {
          setColumns((prev) => {
            return prev.map((p) => {
              if (p.title === "Not Started") {
                return {
                  ...p,
                  tasks: [
                    ...p.tasks,
                    {
                      title: "Hi",
                      description: "ok",
                      status: "done",
                      tag: "ok",
                    },
                  ],
                };
              }

              return p;
            });
          });
        }}
      >
        Add Task
      </button>
      <div className="flex flex-wrap md:flex-nowrap gap-4 overflow-x-auto p-4">
        {columns.map((col, index) => (
          <Column key={index} {...col} />
        ))}
      </div>
    </div>
  );
}
