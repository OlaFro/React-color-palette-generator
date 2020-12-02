import styles from "./styles/DraggableColorListStyles";
import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import { withStyles } from "@material-ui/core/styles";

const DraggableColorList = SortableContainer((props) => {
  const {
    palette,
    setPalette,
    deleteBox,
    snackbar,
    setSnackbar,
    changeToShade,
    setChangeToShade,
    classes,
  } = props;
  return (
    <div className={classes.colorList}>
      {palette.map((elem, i) => (
        <DraggableColorBox
          key={elem.id}
          boxIndex={i}
          index={i}
          deleteBox={deleteBox}
          id={elem.id}
          color={elem.color}
          snackbar={snackbar}
          setSnackbar={setSnackbar}
          palette={palette}
          setPalette={setPalette}
          changeToShade={changeToShade}
          setChangeToShade={setChangeToShade}
        />
      ))}
    </div>
  );
});

export default withStyles(styles)(DraggableColorList);
