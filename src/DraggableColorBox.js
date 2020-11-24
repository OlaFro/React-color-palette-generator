import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/DraggableColorBoxStyles";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";

const DraggableColorBox = SortableElement((props) => {
  const { classes, deleteBox, id, color } = props;
  return (
    <div className={classes.box} style={{ backgroundColor: color }}>
      <div>
        <span>{`${color}`}</span>

        <IconButton aria-label="delete" style={{ color: "white" }}>
          <DeleteIcon
            onClick={() => {
              deleteBox(id);
            }}
          />
        </IconButton>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
