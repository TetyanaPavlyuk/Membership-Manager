import { Routes, Route } from "react-router-dom";

import { Layout } from "../components";
import { Home, About, UsersList, UserProfile, CompaniesList, CompanyProfile } from "../pages";
import { RoutesEnum } from "./RoutesEnum.ts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={RoutesEnum.HOME} element={<Home />} />
        <Route path={RoutesEnum.ABOUT} element={<About />} />
        <Route path={RoutesEnum.USERS} element={<UsersList />} />
        <Route path={`${RoutesEnum.USERS}/:id`} element={<UserProfile />} />
        <Route path={RoutesEnum.COMPANIES} element={<CompaniesList />} />
        <Route path={`${RoutesEnum.COMPANIES}/:id`} element={<CompanyProfile />} />
      </Route>
    </Routes>
  );
};
