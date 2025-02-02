import KanbanBoard from "../components/kanban-board";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-8">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-black">
          Drag-and-Drop Kanban Board
        </h1>
        <KanbanBoard />
      </div>
    </div>
  );
}
