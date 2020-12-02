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
    "@media (max-width: 900px)": {
      width: "100%",
      height: "20%",
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
    "@media (max-width: 900px)": {
      flexDirection: "row",
      width: "60%",
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

  buttonA: {
    cursor: "pointer",
    fontFamily: "'Quicksand', monospace",
    fontSize: "1rem",
    width: "6rem",
    height: "2rem",
    border: "none",
    borderRadius: "15px",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.5)",
    outline: "none",
    textAlign: "center",
    padding: "0",

    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },

    "&:active": {
      outline: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },

  buttonDarkA: {
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
    textAlign: "center",
    padding: "0",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },

    "&:active": {
      outline: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },

  shades: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 900px)": {
      flexDirection: "row",
    },
  },

  shade: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
