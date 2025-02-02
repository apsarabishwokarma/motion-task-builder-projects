export interface Task {
  title: string;
  description: string;
  status: string;
  tag: string;
}

export interface Column {
  title: string;
  color: string;
  tasks: Task[];
}

export const columns: Column[] = [
  {
    title: "Not Started",
    color: "bg-red-100",
    tasks: [
      {
        title: "Make a nice background",
        description: "Help the UX",
        status: "Not started",
        tag: "Beta version releasing",
      },
    ],
  },
  {
    title: "Ready",
    color: "bg-purple-100",
    tasks: [
      {
        title: "Make a simple Kanban",
        description: "For Figma UX",
        status: "Ready",
        tag: "Beta version releasing",
      },
    ],
  },
  {
    title: "In Progress",
    color: "bg-blue-100",
    tasks: [
      {
        title: "Fix auto height",
        description: "Fix swim lanes",
        status: "In progress",
        tag: "Beta version releasing",
      },
    ],
  },
  {
    title: "Done",
    color: "bg-green-100",
    tasks: [
      {
        title: "Make avatar tiles",
        description: "Avatar UX",
        status: "Done",
        tag: "Beta version releasing",
      },
    ],
  },
];
