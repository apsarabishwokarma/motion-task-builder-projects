import { columns } from "../data/columns-data";
import Column from "./kanban-column";

export default function KanbanBoard() {
  return (
    <div className="flex space-x-4 overflow-x-auto p-4">
      {columns.map((col, index) => (
        <Column key={index} {...col} />
      ))}
    </div>
  );
}
