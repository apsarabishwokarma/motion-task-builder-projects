"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Column, dummyColumns } from "../data/columns-data";

// Define the context type
export type KanbanContextType = {
  columns: Column[];
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  draggedTaskId?: string;
  draggedOverColumn?: "Not Started" | "Pending" | "Ready" | "Done";
  draggedOverTaskId?: string;
  setDraggedTaskId: Dispatch<SetStateAction<undefined | string>>;
  setDraggedOverColumn: Dispatch<
    SetStateAction<undefined | "Not Started" | "Pending" | "Ready" | "Done">
  >;
  setDraggedOverTaskId: Dispatch<SetStateAction<undefined | string>>;
  removeTask: (id: string, columnTitle: string) => void;
};

// Creating Context
export const KanbanContext = createContext<KanbanContextType | undefined>(
  undefined
);

// Creating Provider
export default function KanbanProvider({ children }: { children: ReactNode }) {
  const [columns, setColumns] = useState<Column[]>(dummyColumns);
  const [draggedTaskId, setDraggedTaskId] = useState<undefined | string>();
  const [draggedOverColumn, setDraggedOverColumn] = useState<
    "Not Started" | "Pending" | "Ready" | "Done"
  >();
  const [draggedOverTaskId, setDraggedOverTaskId] = useState<
    undefined | string
  >();

  function removeTask(id: string, columnTitle: string) {
    setColumns((prevItems) => {
      return prevItems.map((p) => {
        if (p.title === columnTitle) {
          return {
            ...p,
            tasks: p.tasks.filter((t) => {
              return t.id !== id;
            }),
          };
        }
        return p;
      });
    });
  }

  // Return the context provider
  return (
    <KanbanContext.Provider
      value={{
        columns,
        setColumns,
        setDraggedTaskId,
        draggedTaskId,
        draggedOverColumn,
        setDraggedOverColumn,
        draggedOverTaskId,
        setDraggedOverTaskId,
        removeTask,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
}

// Custom Hook for Consuming the Context
export const useKanbanContext = () => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("KanbanContext must be used within a KanbanProvider");
  }
  return context;
};
