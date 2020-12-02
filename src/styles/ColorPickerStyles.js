export default {
  ColorPickerCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "250px",
    // border: "1px solid blue",
    height: "100%",
    justifyContent: "space-between",
  },

  picker: {
    margin: "1rem 0",
  },

  buttonDark: {
    cursor: "pointer",
    fontFamily: "'Quicksand', monospace",
    fontSize: "1rem",
    width: "8rem",
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
    "&:disabled": {
      color: "rgba(0,0,0,0.3)",
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  },
};
