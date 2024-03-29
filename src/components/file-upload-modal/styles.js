const styles = (theme) => {
  return {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: theme.palette.background.transparentBlack,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 30,
    },
    container: {
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "20px",
      boxShadow: theme.shadows[24],
      textAlign: "center",
    },
    drop_area: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "70vw",
      height: "50vh",
      border: "3px dashed gray",
      borderRadius: "10px",
      padding: "20px",
    },
    drop_area_active: {
      border: "3px dashed " + theme.palette.primary.main,
    },
    contents: {},
  };
};

export default styles;
