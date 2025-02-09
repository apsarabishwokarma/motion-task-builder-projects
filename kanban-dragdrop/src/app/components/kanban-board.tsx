"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import Column from "./kanban-column";
import { useKanbanContext } from "./kanban-context";

export default function KanbanBoard() {
  const { columns, setColumns } = useKanbanContext();
  const [isOpen, setIsOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "Not Started",
    tag: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Handle adding task
  const handleAddTask = () => {
    if (!newTask.title) {
      alert("Please enter title");
      return;
    }

    setColumns((prev) => {
      return prev.map((p) => {
        if (p.title === "Not Started") {
          return {
            ...p,
            tasks: [...p.tasks, { id: new Date().toISOString(), ...newTask }],
          };
        }

        return p;
      });
    });
    setIsOpen(false);
    setNewTask({ title: "", description: "", status: "Not Started", tag: "" });
  };

  const filteredColumns = columns.map((col) => ({
    ...col,
    tasks: col.tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="p-4">
      <div className="flex justify-between md:flex-row flex-col">
        <button
          className="text-lg font-bold bg-[#FFF6E1] text-black hover:bg-[#CCCCFF] m-2 border-none rounded-md py-2 px-6"
          onClick={() => setIsOpen(true)}
        >
          Add New Task &#x2b;
        </button>
        <div className="flex max-w-xs items-center border border-gray-300 p-3 rounded-full text-gray-800">
          <input
            placeholder="Search task"
            className="flex-1 border-r focus:outline-none "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="flex items-center pl-2">
            <Search />
          </button>
        </div>
      </div>

      {/* form for adding task*/}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96 text-black">
            <h2 className="text-xl font-bold mb-4 ">Add New Task</h2>

            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />

            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="border p-2 w-full mb-2"
            ></textarea>

            <input
              type="text"
              placeholder="Tag"
              value={newTask.tag}
              onChange={(e) => setNewTask({ ...newTask, tag: e.target.value })}
              className="border p-2 w-full mb-2"
            />

            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#FFF6E1] px-4 py-2 rounded"
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <div className="flex flex-wrap md:flex-nowrap gap-4 overflow-x-auto p-4">
        {columns.map((col, index) => (
          <Column key={index} {...col} />
        ))}
      </div> */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 overflow-x-auto p-4">
        {filteredColumns.map((col, index) => (
          <Column key={index} {...col} />
        ))}
      </div>
    </div>
  );
}
