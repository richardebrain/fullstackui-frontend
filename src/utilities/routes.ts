import _ from "lodash";
import { SideBarRoutes } from "./types";
import { IconDashboard, IconDatabase, IconHome, IconOrg, IconReport, IconTasks, IconUsers } from "./contants-icons";

const RandomId = _.uniqueId;

export const sidebarRoutes: SideBarRoutes[] = [
//   {
//     id: RandomId(),
//     path: "/",
//     name: "Home",
//     icon: IconHome,
//     children: [
//       {
//         id: RandomId(),
//         path: "/home",
//         name: "Home",
//       },
//     ],
//   },
  {
    id: RandomId(),
    path: "/dashboard",
    name: "Dashboard",
    icon: IconDashboard,
    children: [
      {
        id: RandomId(),
        path: "/dashboard",
        name: "Dashboard",
      },
    ],
  },
  {
    id: RandomId(),
    path: "/dashboard/projects",
    name: "Projects",
    icon: IconDatabase,
    children: [
      {
        id: RandomId(),
        path: "/projects",
        name: "Projects",
      },
    ],
  },
  {
    id: RandomId(),
    path: "/dashboard/tasks",
    name: "Tasks",
    icon: IconTasks,
    children: [
      {
        id: RandomId(),
        path: "/tasks",
        name: "Task",
      },
    ],
  },
  {
    id: RandomId(),
    path: "/dashboard/reporting",
    name: "Reporting",
    icon: IconReport,
    children: [
      {
        id: RandomId(),
        path: "/reporting",
        name: "Reporting",
      },
    ],
  },
  {
    id: RandomId(),
    path: "/dashboard/users",
    name: "Users",
    icon: IconUsers,
    children: [
      {
        id: RandomId(),
        path: "/users",
        name: "Users",
      },
    ],
  },
];
