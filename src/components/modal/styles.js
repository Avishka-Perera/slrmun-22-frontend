const styles = (theme) => {
  return {
    root: {
      position: "absolute",
      backgroundColor: theme.palette.background.transparentBlack,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 5,
    },
    container: {
      backgroundColor: "white",
      maxWidth: "450px",
      padding: "30px",
      borderRadius: "20px",
      boxShadow: theme.shadows[24],
    },
    h3: {
      fontSize: "3rem",
      color: theme.palette.primary.main,
      padding: "10px",
    },
    bodyText: {
      padding: "10px 0px",
      color: "gray",
    },
    button: {
      margin: "10px 0px",
    },
  };
};

export default styles;
