const styles = {
  root: {
    height: "100vh",
    position: "sticky",
    top: 0,
    "@media screen and (max-width: 768px)": {
      height: "100%",
      zIndex: 2,
    },
  },
  body: {
    transition: "0.3s",
    paddingLeft: "10px",
    backgroundColor: (props) => props.palette.grey["200"],
    width: "30vw",
    maxWidth: "250px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transform: "translateX(0)",
    "@media screen and (max-width: 768px)": {
      position: "absolute",
      width: "220px",
      height: "500px",
      transform: "translateX(-240px)",
      boxShadow: "0px 0px 5px gray",
    },
  },
  body_in: {
    transform: "translateX(0)",
  },
};

export default styles;