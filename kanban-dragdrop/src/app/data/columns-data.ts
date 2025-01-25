export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  tag: string;
}

// export type UpdateTaskProps = Partial<TaskCardProps>;

export interface Column {
  title: string;
  color: string;
  tasks: TaskCardProps[];
}

// const data: {
//   title: string;
//   description: string;
//   status: "not-started" | "pending" | "done" | "ready";
//   tag: string;
// }[] = [
//   {
//     title: "Make a nice background",
//     description: "Help the UX",
//     status: "not-started",
//     tag: "Beta version releasing",
//   },
// ];

export const dummyColumns: Column[] = [
  {
    title: "Not Started",
    color: "bg-red-100",
    tasks: [
      // {
      //   id: "1",
      //   title: "Make a nice background",
      //   description: "Help the UX",
      //   status: "Not Started",
      //   tag: "Beta version releasing",
      // },
    ],
  },
  {
    title: "Ready",
    color: "bg-purple-100",
    tasks: [
      // {
      //   id: "2",
      //   title: "Make a simple Kanban",
      //   description: "For Figma UX",
      //   status: "Ready",
      //   tag: "Beta version releasing",
      // },
    ],
  },
  {
    title: "In Progress",
    color: "bg-blue-100",
    tasks: [
      // {
      //   id: "3",
      //   title: "Fix auto height",
      //   description: "Fix swim lanes",
      //   status: "In progress",
      //   tag: "Beta version releasing",
      // },
    ],
  },
  {
    title: "Done",
    color: "bg-green-100",
    tasks: [
      // {
      //   id: "4",
      //   title: "Make avatar tiles",
      //   description: "Avatar UX",
      //   status: "Done",
      //   tag: "Beta version releasing",
      // },
    ],
  },
];
