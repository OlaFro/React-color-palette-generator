import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/DraggableColorBoxStyles";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";

const DraggableColorBox = SortableElement((props) => {
  const { classes, deleteBox, id, color, palette, setPalette } = props;
  return (
    <div className={classes.box} style={{ backgroundColor: color }}>
      <div>
        <span className={classes.text}>{`${color}`}</span>

        <IconButton
          aria-label="delete"
          className={classes.icon}
          style={{ color: "white" }}
        >
          {console.log(id)}
          <button
            onClick={() => {
              console.log("test");
              let filtered = palette.filter((elem) => elem.id !== id);
              setPalette(filtered);
            }}
          >
            <DeleteIcon />
          </button>
        </IconButton>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
