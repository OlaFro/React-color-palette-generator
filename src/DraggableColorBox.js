import React from "react";
import styles from "./styles/DraggableColorBoxStyles";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";

const DraggableColorBox = SortableElement((props) => {
  const { classes, id, color, deleteBox } = props;

  return (
    <div className={classes.box} style={{ backgroundColor: color }}>
      <span className={classes.colorNumber}>{`${color}`}</span>
      <div className={classes.buttons}>
        <a href="#" className={classes.button}>
          shades
        </a>
        <a href="#" className={classes.button}>
          copy
        </a>
        <a href="#" className={classes.button}>
          move
        </a>
        <button className={classes.button} onClick={() => deleteBox(id)}>
          del
        </button>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
