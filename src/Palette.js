import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DraggableColorList from "./DraggableColorList";
import styles from "./styles/PaletteStyles.js";
import { arrayMove } from "react-sortable-hoc";

function Palette(props) {
  const { classes, palette, setPalette, deleteBox } = props;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setPalette(arrayMove(palette, oldIndex, newIndex));
  };

  return (
    <div>
      <div className={classes.display}>
        {palette.length === 0 && (
          <span className={classes.info}>Add color</span>
        )}
        <DraggableColorList
          palette={palette}
          setPalette={setPalette}
          deleteBox={deleteBox}
          axis="x"
          onSortEnd={onSortEnd}
          lockToContainerEdges={false}
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(Palette);
