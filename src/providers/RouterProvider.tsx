import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { HomePage, ProjectsPage, ContactPage, ExperiencePage } from "@pages";
import { NAV_PATHS } from "@constants";

const router = createBrowserRouter([
  {
    path: NAV_PATHS.BASE,
    Component: HomePage,
  },
  {
    path: NAV_PATHS.EXPERIENCE.BASE,
    Component: ExperiencePage,
  },
  {
    path: NAV_PATHS.PROJECTS.BASE,
    Component: ProjectsPage,
  },
  {
    path: NAV_PATHS.CONTACT.BASE,
    Component: ContactPage,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;
