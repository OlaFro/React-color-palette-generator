export default {
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f7f6f7",
  },
  panel: {
    display: "flex",
    alignItems: "flex-start",
    width: "50vw",
    height: "30vh",
    justifyContent: "space-around",
    "@media (max-width: 1000px)": {
      width: "80vw",
    },
    "@media (max-width: 600px)": {
      width: "80vw",
      // flexDirection: "column",
    },
  },
};
