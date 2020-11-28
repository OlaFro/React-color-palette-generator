import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer((props) => {
  const { palette, deleteBox, snackbar, setSnackbar } = props;
  return (
    <div style={{ width: "100%", display: "flex" }}>
      {palette.map((elem, i) => (
        <DraggableColorBox
          key={elem.id}
          index={i}
          deleteBox={deleteBox}
          id={elem.id}
          color={elem.color}
          snackbar={snackbar}
          setSnackbar={setSnackbar}
          palette={palette}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
