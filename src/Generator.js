import React from "react";
import ColorPicker from "./ColorPicker";
import Palette from "./Palette";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/GeneratorStyles";

function Generator(props) {
  const { classes } = props;

  const [pickedColor, setPickedColor] = useState({});
  const [palette, setPalette] = useState([]);
  const [complete, setComplete] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  function handleClick() {
    setPalette([...palette, pickedColor]);
    if (palette.length === 4) {
      setComplete(true);
    }
  }

  function deleteBox(id) {
    console.log("test");
    const filtered = palette.filter((elem) => elem.id !== id);
    setPalette(filtered);
    if (palette.length <= 4) {
      setComplete(false);
    }
  }

  return (
    <div className={classes.root}>
      <Palette
        palette={palette}
        setPalette={setPalette}
        deleteBox={deleteBox}
        snackbar={snackbar}
        setSnackbar={setSnackbar}
      />
      <ColorPicker
        pickedColor={pickedColor}
        setPickedColor={setPickedColor}
        palette={palette}
        setPalette={setPalette}
        handleClick={handleClick}
        complete={complete}
        maxColors={5}
      />
    </div>
  );
}

export default withStyles(styles)(Generator);
