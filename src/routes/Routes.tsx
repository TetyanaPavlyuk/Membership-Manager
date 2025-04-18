import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, PrivateRoute } from "../components";
import {
  About,
  CompaniesList,
  CompanyProfile,
  Dashboard,
  Home,
  Login,
  NotFound,
  Registration,
  UserProfile,
  UsersList,
} from "../pages";
import { RoutesEnum } from "../enum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: RoutesEnum.HOME,
        element: <Home />,
      },
      {
        path: RoutesEnum.ABOUT,
        element: <About />,
      },
      {
        path: RoutesEnum.REGISTRATION,
        element: <Registration />,
      },
      {
        path: RoutesEnum.LOGIN,
        element: <Login />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: RoutesEnum.USERS,
            element: <UsersList />,
          },
          {
            path: `${RoutesEnum.USERS}/:id`,
            element: <UserProfile />,
          },
          {
            path: RoutesEnum.COMPANIES,
            element: <CompaniesList />,
          },
          {
            path: `${RoutesEnum.COMPANIES}/:id`,
            element: <CompanyProfile />,
          },
          {
            path: RoutesEnum.ME,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
