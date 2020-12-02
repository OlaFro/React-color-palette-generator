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
  const [currentShade, setCurrentShade] = useState("");
  // const [isDarkColor, setIsDarkColor] = useState(false);

  const { classes, id, color, deleteBox, snackbar, setSnackbar } = props;

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

  // handling the palette of shades and setting dynamic color to text

  function handleSwitch(shade) {
    setCurrentShade(shade);
    setShowShades(false);

    // const newColorObj = { color: shade, id };
    // const newPalette = palette.splice(boxIndex, 1, newColorObj);
    // setPalette(newPalette);
  }

  const isDarkColor =
    chroma(currentShade.length > 0 ? currentShade : color).luminance() >= 0.5;

  const displayedShades = shades.map((shade) => {
    return (
      <div style={{ backgroundColor: shade }} className={classes.shade}>
        <button
          className={isDarkColor ? classes.buttonDark : classes.button}
          onClick={(e) => handleSwitch(shade)}
        >
          {shade}
        </button>
      </div>
    );
  });

  return (
    <div
      className={classes.box}
      style={{
        backgroundColor: currentShade.length > 0 ? currentShade : color,
      }}
    >
      {showShades ? (
        <div className={classes.shades}>{displayedShades}</div>
      ) : (
        <React.Fragment>
          <span
            className={
              isDarkColor ? classes.colorNumberDark : classes.colorNumber
            }
          >{`${currentShade.length > 0 ? currentShade : color}`}</span>
          <div className={classes.buttons}>
            <button
              className={isDarkColor ? classes.buttonDark : classes.button}
              onClick={() => handleShades()}
            >
              shades
            </button>
            <CopyToClipboard
              text={currentShade.length > 0 ? currentShade : color}
            >
              <button
                className={isDarkColor ? classes.buttonDark : classes.button}
                onClick={() => setSnackbar(true)}
              >
                copy
              </button>
            </CopyToClipboard>
            <button
              className={isDarkColor ? classes.buttonDark : classes.button}
            >
              move
            </button>
            <button
              className={isDarkColor ? classes.buttonDark : classes.button}
              onClick={() => deleteBox(id)}
            >
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
