import React from "react";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerStyles";
const { v4: uuid4 } = require("uuid");

function ColorPicker(props) {
  const {
    classes,
    pickedColor,
    palette,
    handleClick,
    maxColors,
    setPickedColor,
  } = props;

  const complete = palette.length >= maxColors;
  // const sameColor = pickedColor === palette[palette.length - 1];

  return (
    <div className={classes.ColorPickerCont}>
      <ChromePicker
        color={pickedColor.color}
        onChange={(newColor) =>
          setPickedColor({
            color: newColor.hex,
            id: uuid4(),
            rgb: newColor.rgb,
          })
        }
        disableAlpha={true}
      />

      <button
        disabled={complete}
        className={classes.buttonDark}
        onClick={handleClick}
      >
        {complete ? "Palette Full" : "Add Color"}
      </button>
    </div>
  );
}

export default withStyles(styles)(ColorPicker);
