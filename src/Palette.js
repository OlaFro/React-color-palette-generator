import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/PaletteStyles.js";

function Palette(props) {
  const { classes, palette, deleteBox } = props;
  return (
    <div>
      <div className={classes.display}>
        {palette.length === 0 && (
          <span className={classes.info}>ADD COLOR</span>
        )}
        {palette.map((elem) => (
          <div
            className={classes.box}
            style={{ backgroundColor: `${elem.color}` }}
          >
            <div>
              <span>{`${elem.color}`}</span>
            </div>
            <div>
              <IconButton aria-label="delete" style={{ color: "white" }}>
                <DeleteIcon
                  onClick={() => {
                    deleteBox(elem.id);
                  }}
                />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(Palette);
