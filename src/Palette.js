import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DraggableColorBox from "./DraggableColorBox";
import styles from "./styles/PaletteStyles.js";

function Palette(props) {
  const { classes, palette, deleteBox } = props;
  return (
    <div>
      <div className={classes.display}>
        {palette.length === 0 && (
          <span className={classes.info}>Add color</span>
        )}
        {palette.map((elem, i) => (
          <DraggableColorBox
            index={i}
            deleteBox={deleteBox}
            id={elem.id}
            color={elem.color}
          />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(Palette);
