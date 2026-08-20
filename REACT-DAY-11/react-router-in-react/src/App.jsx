import { Home } from "./components/NabBar/Home";
import { About } from "./components/NabBar/About";
import { Contact } from "./components/NabBar/Contact";
import { User } from "./components/NabBar/User";
import { Products } from "./components/NabBar/Products";
import { Dashboard } from "./components/NestedRoutes/Dashboard";
import { Profile } from "./components/NestedRoutes/Profile";
import { Settings } from "./components/NestedRoutes/Settings";
import { Routes, Route,  } from "react-router-dom";
import { Layout } from "./components/Layout";
function App() {
  return (
    <>
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
