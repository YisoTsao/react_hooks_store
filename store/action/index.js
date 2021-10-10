export function changeUser(data, dispatch) {
  dispatch({
    type: "SETUSERINFO",
    data: data,
  });
}

export const setImgUrl = (data, dispatch) => {
  dispatch({
    type: "SETIMG",
    data: {
      imgUrl: data?.imgUrl,
    },
  });
};
