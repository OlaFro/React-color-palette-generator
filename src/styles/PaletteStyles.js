export default {
  box: {
    width: "20%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "'Quicksand', monospace",
    justifyContent: "space-around",
    alignItems: "space-around",
  },

  display: {
    margin: "3rem 0",
    display: "flex",
    borderRadius: "15px",
    width: "60vw",
    height: "50vh",
    position: "relative",
    flexWrap: "wrap",
    backgroundColor: "grey",
  },

  click: {
    cursor: "pointer",
  },

  info: {
    fontSize: "10em",
    textAlign: "center",
    fontFamily: "'Quicksand', monospace",
    color: "rgba(255,255,255,0.15)",
    position: "absolute",
    left: "50%",
    top: "25%",
    transform: "translateX(-50%)",
    lineHeight: "80%",
  },
};
