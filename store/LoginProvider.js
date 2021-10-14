import React, { useEffect, createContext, useReducer, useContext } from "react";
import { ImgReducer } from "../store/reducer";
import { initUserImg } from "../store/initData/index";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const theme = { color: "lightBlue" };
  const [userImg, userImgDispatch] = useReducer(ImgReducer, initUserImg, () => {
    const localData = localStorage.getItem("imgUrl");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("imgUrl", JSON.stringify(userImg));
  }, [userImg]);

  const state = {
    userImg,
    theme,
  };
  return (
    <UserContext.Provider value={{ state, userImgDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const userContext = () => useContext(UserContext);
