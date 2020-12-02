export default {
  copyContainer: {
    // border: "1px solid green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  copyField: {
    // backgroundColor: "#eaeaea",
    width: "14rem",
    height: "14rem",
    color: "rgba(0,0,0,0.6)",
    // fontFamily: "monospace",
    display: "flex",
    alignItems: "flex-start",
    border: "1px solid rgba(0,0,0,0.3)",
    // boxShadow: "8px 8px 8px #c0c0c0, -8px -8px 8px #ffffff",
  },
  list: {
    listStyle: "none",
    padding: "1rem 0 0 1rem",
    fontSize: "1rem",
    lineHeight: "2rem",
    // fontFamily: "'Major Mono Display', monospace;",
    margin: "0",
    borderRadius: "15px",
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
