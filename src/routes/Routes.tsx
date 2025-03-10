import { Routes, Route } from "react-router-dom";

import { Layout } from "../components";
import { Home } from "../pages";
import { About } from "../pages";
import { UsersList } from "../pages";
import { UserProfile } from "../pages";
import { CompaniesList } from "../pages";
import { CompanyProfile } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/companies" element={<CompaniesList />} />
        <Route path={"/companies/:id"} element={<CompanyProfile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
