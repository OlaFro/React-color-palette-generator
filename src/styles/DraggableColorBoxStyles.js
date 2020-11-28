export default {
  box: {
    flex: "1",
    height: "100%",
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
    color: "white",
    fontFamily: "'Quicksand', monospace",
    justifyContent: "space-around",
    alignItems: "space-around",
    position: "relative",
    transition: "200ms",
    "&:hover": {
      flexGrow: "2",
    },
  },

  colorNumber: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    textTransform: "uppercase",
  },

  buttons: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "space-around",
    opacity: "0",
    cursor: "pointer",
    "&:hover": {
      opacity: "1",
    },
  },

  button: {
    textDecoration: "none",
    fontFamily: "'Quicksand', monospace",
    fontSize: "1rem",
    width: "4.7rem",
    height: "2rem",
    border: "none",
    borderRadius: "15px",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.5)",

    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },

    "&:active": {
      outline: "none",
      backgroundColor: "rgba(255,255,255,0.5)",
    },
    "&:focus": {
      outline: "none",
    },
  },
};
