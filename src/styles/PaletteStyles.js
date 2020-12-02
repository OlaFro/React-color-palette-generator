export default {
  display: {
    margin: "3rem 0",
    display: "flex",
    flexDirection: "row",
    // borderRadius: "25px",
    width: "80vw",
    height: "50vh",
    overflow: "hidden",
    position: "relative",
    background: "#eaeaea",
    // boxShadow: "8px 8px 12px #c0c0c0, -8px -8px 12px #ffffff",
    "@media (max-width: 900px)": {
      width: "80vw",
      height: "60vh",
    },
  },

  text: {
    position: "absolute",
    left: "50%",
    top: "0",
    transform: "translateX(-50%)",
    textAlign: "center",
    "@media (max-width: 900px)": {
      top: "25%",
    },
  },
  header: {
    fontSize: "6em",
    fontFamily: "'Quicksand', monospace",
    color: "#c1c1c1",
    lineHeight: "150%",
    "@media (max-width: 900px)": {
      fontSize: "4rem",
    },
  },
  info: {
    fontSize: "2rem",
    fontFamily: "'Quicksand', monospace",
    color: "#c1c1c1",
    lineHeight: "110%",
    "@media (max-width: 900px)": {
      fontSize: "1.5rem",
    },
  },
};
