import { Home } from "./components/NabBar/Home";
import { About } from "./components/NabBar/About";
import { Contact } from "./components/NabBar/Contact";
import { User } from "./components/NabBar/User";
import { Products } from "./components/NabBar/Products";
import { Dashboard } from "./components/NestedRoutes/Dashboard";
import { Profile } from "./components/NestedRoutes/Profile";
import { Settings } from "./components/NestedRoutes/Settings";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { DashboardHome } from "./components/NestedRoutes/DashboardHome";
import { NotFound } from "./components/NotFound";
import { ProctedRoute } from "./components/ProctedRoute";
import { Login } from "./components/Login";
import { PublicRoute } from "./components/PublicRoute";
import { RoleProtectedRoute } from "./components/RoleProtectedRoute";
import { Admin } from "./components/Admin";
import { Unauthorized } from "./components/Unauthorized";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/old-about" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />}></Route>
          </Route>
          <Route element={<ProctedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
          </Route>
          <Route element={<RoleProtectedRoute />}>
            <Route path="/admin" element={<Admin />}></Route>
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
