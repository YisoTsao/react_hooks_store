import { createContext, useContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const useState = {
    firstName: "",
    lastName: "",
    age: 0
  };

  const theme = { color: "lightBlue" };
  const user = useState;
  return (
    <UserContext.Provider value={theme} user={user}>
      {props.children}
    </UserContext.Provider>
  );
};

export const userContext = () => useContext(UserContext);
