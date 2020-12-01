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
    fontSize: "0.8rem",
  },

  colorNumberDark: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    color: "rgba(0,0,0,0.6)",
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

    "&:hover": {
      opacity: "1",
    },
    "& a": {
      textDecoration: "none",
      paddingTop: "0.5rem",
    },
  },

  button: {
    cursor: "pointer",
    fontFamily: "'Quicksand', monospace",
    fontSize: "1rem",
    width: "4.7rem",
    height: "2rem",
    border: "none",
    borderRadius: "15px",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.5)",
    outline: "none",

    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },

    "&:active": {
      outline: "none",
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  },

  buttonDark: {
    cursor: "pointer",
    fontFamily: "'Quicksand', monospace",
    fontSize: "1rem",
    width: "6rem",
    height: "2rem",
    border: "none",
    borderRadius: "15px",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.6)",
    outline: "none",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },

    "&:active": {
      outline: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },

  shade: {
    height: "50%",
    display: "flex",
    flexDisplay: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  a: {
    margin: "0",
  },
};
