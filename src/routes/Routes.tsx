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
        path: RoutesEnum.USERS,
        element: <PrivateRoute />,
        children: [
          {
            path: RoutesEnum.USERS,
            element: <UsersList />,
            children: [
              {
                path: `${RoutesEnum.USERS}/:id`,
                element: <UserProfile />,
              },
            ],
          },
        ],
      },
      {
        path: RoutesEnum.COMPANIES,
        element: <PrivateRoute />,
        children: [
          {
            path: RoutesEnum.COMPANIES,
            element: <CompaniesList />,
            children: [
              {
                path: `${RoutesEnum.COMPANIES}/:id`,
                element: <CompanyProfile />,
              },
            ],
          },
        ],
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
        path: RoutesEnum.ME,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
