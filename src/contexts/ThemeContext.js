import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: isDarkMode, toggleTheme: toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
