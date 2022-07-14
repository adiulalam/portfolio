const toggleDrawer = () => {
  return {
    type: "TOGGLE_DRAWER",
  };
};

const setDrawer = (drawerSize) => {
  return {
    type: "SET_DRAWER",
    payload: { drawerSize },
  };
};

export { setDrawer, toggleDrawer };
