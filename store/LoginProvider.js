import React, { useState, createContext, useReducer, useContext } from "react";
import { ImgReducer } from "../store/reducer";
import { initUserImg } from "../store/initData/index";
import { setImgUrl } from "../store/action";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const theme = { color: "lightBlue" };
  const [userImg, userImgDispatch] = useReducer(ImgReducer, initUserImg);

  const Imgurl = (data) => setImgUrl(data, userImgDispatch);

  const userSet = {
    Imgurl,
  };

  const state = {
    userImg,
    theme,
  };
  return (
    <UserContext.Provider value={{ state, userSet }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const userContext = () => useContext(UserContext);
