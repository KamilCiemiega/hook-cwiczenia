import { useState, useContext, createContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <UserContext.Provider value={{ setIsAuthorized, isAuthorized }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error("Missing user context. it's not wrapped in UserProvider");
  }
  return ctx;
};

export const Example = () => {
  const { isAuthorized, setIsAuthorized } = useUserContext();

  return <div></div>;
};
