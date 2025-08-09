import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage, ProjectsPage, ContactPage } from "@pages";
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
  {
    path: NAV_PATHS.CONTACT.BASE,
    Component: ContactPage,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
