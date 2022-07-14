const initialState = {
  drawerSize: 0,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return { ...state, drawerSize: state.drawerSize === 0 ? 300 : 0 };
    case "SET_DRAWER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default layoutReducer;
