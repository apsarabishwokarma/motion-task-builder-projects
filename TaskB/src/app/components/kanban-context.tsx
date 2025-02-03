"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Column, dummyColumns } from "../data/columns-data";

// Define the context type
export type KanbanContextType = {
  columns: Column[];
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
};

// Creating Context
export const KanbanContext = createContext<KanbanContextType | undefined>(
  undefined
);

// Creating Provider
export default function KanbanProvider({ children }: { children: ReactNode }) {
  const [columns, setColumns] = useState<Column[]>(dummyColumns);

  // Return the context provider
  return (
    <KanbanContext.Provider value={{ columns, setColumns }}>
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
