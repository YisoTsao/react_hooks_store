export function reducer(state, action) {
  switch (action.type) {
    case "SETUSERINFO":
      return { ...state, ...action.data };
    default:
      throw new Error();
  }
}

export function ImgReducer(state, action) {
  switch (action.type) {
    case "SETIMG":
      return { ...state, ...action.data };
    default:
      throw new Error();
  }
}
