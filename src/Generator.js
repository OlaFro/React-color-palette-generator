import React from "react";
import ColorPicker from "./ColorPicker";
import Palette from "./Palette";
import CopyHexField from "./CopyHexField";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/GeneratorStyles";

function Generator(props) {
  const { classes } = props;

  const [pickedColor, setPickedColor] = useState({ color: "#448282" });
  const [palette, setPalette] = useState([]);
  const [complete, setComplete] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [changeToShade, setChangeToShade] = useState();

  function handleClick() {
    setPalette([...palette, pickedColor]);
    if (palette.length === 4) {
      setComplete(true);
    }
  }

  function deleteBox(id) {
    const filtered = palette.filter((elem) => elem.id !== id);
    setPalette(filtered);
    if (palette.length <= 4) {
      setComplete(false);
    }
  }

  return (
    <div className={classes.root}>
      <div>
        <Palette
          palette={palette}
          setPalette={setPalette}
          deleteBox={deleteBox}
          snackbar={snackbar}
          setSnackbar={setSnackbar}
          changeToShade={changeToShade}
          setChangeToShade={setChangeToShade}
        />
      </div>
      <div className={classes.panel}>
        <ColorPicker
          pickedColor={pickedColor}
          setPickedColor={setPickedColor}
          palette={palette}
          setPalette={setPalette}
          handleClick={handleClick}
          complete={complete}
          maxColors={5}
        />
        <CopyHexField palette={palette} />
      </div>
    </div>
  );
}

export default withStyles(styles)(Generator);
