import { useContext } from "react";
import ThemeContext from "./theme-context";

export const Zad6 = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div>
      <h1>Zad6</h1>
      <button onClick={themeCtx.changeTheme}>Change</button>
      <div className={`${themeCtx.theme ? "dark" : "light"}`}></div>
    </div>
  );
};
