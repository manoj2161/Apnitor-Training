import { useState } from "react";
import { MyContext } from "../src/components/Exercise1/ThemeContext.jsx";
import { Page } from "./components/Exercise1/Page.jsx";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <MyContext.Provider value={{ theme, setTheme }}>
        <div className={theme ? "dark" : ""}>
          <Page />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
