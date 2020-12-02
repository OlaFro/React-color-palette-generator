export default {
  display: {
    margin: "3rem 0",
    display: "flex",
    flexDirection: "row",
    borderRadius: "25px",
    width: "60vw",
    height: "50vh",
    overflow: "hidden",
    position: "relative",
    background: "#eaeaea",
    boxShadow: "8px 8px 8px #c0c0c0, -8px -8px 8px #ffffff",
    "@media (max-width: 800px)": {
      flexDirection: "column",
      backgroundColor: "red",
      width: "80vw",
      height: "80vh",
    },
  },

  text: {
    position: "absolute",
    left: "50%",
    top: "0",
    transform: "translateX(-50%)",
    textAlign: "center",
    "@media (max-width: 800px)": {
      top: "25%",
    },
  },
  header: {
    fontSize: "6em",
    fontFamily: "'Quicksand', monospace",
    color: "#c1c1c1",
    lineHeight: "150%",
    "@media (max-width: 800px)": {
      fontSize: "3rem",
    },
  },
  info: {
    fontSize: "2rem",
    fontFamily: "'Quicksand', monospace",
    color: "#c1c1c1",
    lineHeight: "110%",
    "@media (max-width: 800px)": {
      fontSize: "1rem",
    },
  },
};
