import { createContext, useState } from "react";

const ThemeContext = createContext({
  dark: false,
});

export const ThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleClick = () => {
    setDarkTheme(true);
    console.log(darkTheme);
  };
  const context = {
    changeTheme: handleClick,
    theme: darkTheme,
  };
  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
