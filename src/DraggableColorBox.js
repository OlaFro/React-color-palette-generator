import React from "react";
import styles from "./styles/DraggableColorBoxStyles";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import chroma from "chroma-js";
import { useState } from "react";

const DraggableColorBox = SortableElement((props) => {
  const [shades, setShades] = useState([]);
  const [showShades, setShowShades] = useState(false);

  const {
    classes,
    id,
    color,
    deleteBox,
    snackbar,
    setSnackbar,
    palette,
  } = props;

  // closing Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  // generating palette of shades using chroma

  function getRange(hexColor) {
    const end = "#fff";
    return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
  }

  function getScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
  }

  const handleShades = () => {
    const shades = getScale(color, 8).reverse().splice(1);
    setShades(shades);
    setShowShades(true);
  };

  // handling the palette of shades

  const colorsInState = palette;
  function indexOfClickedColor(id) {
    const filtered = palette.filter((elem, index) => {
      return elem.id === id;
    });
    console.log("test");
  }

  const handleSwitch = () => {
    setShowShades(false);
  };

  const displayedShades = shades.map((shade) => (
    <div style={{ backgroundColor: shade }} className={classes.shade}>
      <button onClick={handleSwitch}>{shade}</button>
    </div>
  ));

  const areShades = showShades;

  return (
    <div className={classes.box} style={{ backgroundColor: color }}>
      {areShades ? (
        displayedShades
      ) : (
        <React.Fragment>
          <span className={classes.colorNumber}>{`${color}`}</span>
          <div className={classes.buttons}>
            <button className={classes.button} onClick={handleShades}>
              shades
            </button>
            <CopyToClipboard text={color}>
              <button
                className={classes.button}
                onClick={() => setSnackbar(true)}
              >
                copy
              </button>
            </CopyToClipboard>
            <a href="#" className={classes.button}>
              move
            </a>
            <button className={classes.button} onClick={() => deleteBox(id)}>
              delete
            </button>
          </div>
          <Snackbar
            bodyStyle={{ backgroundColor: "teal", color: "coral" }}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={600}
            open={snackbar}
            message={<span id="message-id">Copied! 🎉</span>}
            ContentProps={{ "aria-describedby": "message-id" }}
            onClose={handleClose}
          ></Snackbar>
        </React.Fragment>
      )}
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
