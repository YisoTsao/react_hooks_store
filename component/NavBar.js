import React, { useEffect, useReducer } from "react";
import { userContext } from "../store/LoginProvider";
import { reducer } from "../store/reducer/index";
import { initUserInfo } from "../store/initData/index";
import { changeUser } from "../store/action";

const NavBar = () => {
  const [userInfo, userDispatch] = useReducer(reducer, initUserInfo);
  const params = {
    firstName: "gary",
    lastName: "tsao",
    age: 30,
  };
  
  const changeUsers = () => changeUser(params, userDispatch);

  const store = userContext();
  const state = store?.state;
  

  function changeImgurl() {
    store.userSet.Imgurl({
      imgUrl: "http://balabla.img",
    });
  }

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <nav>
      <span>{userInfo?.firstName}</span>
      <span>{userInfo?.lastName}</span>
      <span>{userInfo?.age}</span>
      <div>{state?.userImg?.imgUrl}</div>

      <button onClick={changeUsers}>change info</button>
      <button onClick={changeImgurl}>change img url</button>
    </nav>
  );
};

export default NavBar;
