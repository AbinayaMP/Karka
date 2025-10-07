// Child.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Child;
