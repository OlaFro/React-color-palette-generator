import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DraggableColorList from "./DraggableColorList";
import styles from "./styles/PaletteStyles.js";
import { arrayMove } from "react-sortable-hoc";

function Palette(props) {
  const {
    classes,
    palette,
    setPalette,
    deleteBox,
    snackbar,
    setSnackbar,
    changeToShade,
    setChangeToShade,
  } = props;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setPalette(arrayMove(palette, oldIndex, newIndex));
  };

  return (
    <div>
      <div className={classes.display}>
        {palette.length === 0 && (
          <div className={classes.text}>
            <h1 className={classes.header}>Hi!</h1>
            <h2 className={classes.info}>
              Add a color with the color picker below and create your own
              palette!
            </h2>
          </div>
        )}
        <DraggableColorList
          palette={palette}
          setPalette={setPalette}
          deleteBox={deleteBox}
          axis="x"
          onSortEnd={onSortEnd}
          lockToContainerEdges={false}
          snackbar={snackbar}
          setSnackbar={setSnackbar}
          changeToShade={changeToShade}
          setChangeToShade={setChangeToShade}
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(Palette);
