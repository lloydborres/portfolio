import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage, ProjectsPage } from "@pages";
import { NAV_PATHS } from "@constants";

const router = createBrowserRouter([
  {
    path: NAV_PATHS.BASE,
    Component: HomePage,
  },
  {
    path: NAV_PATHS.PROJECTS.BASE,
    Component: ProjectsPage,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
