import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
// import styles from "./styles/DraggableColorList.js";

const DraggableColorList = SortableContainer((props) => {
  const { palette, deleteBox, setPalette } = props;
  return (
    <div style={{ width: "100%", display: "flex" }}>
      {palette.map((elem, i) => (
        <DraggableColorBox
          palette={palette}
          setPalette={setPalette}
          key={elem.id}
          index={i}
          deleteBox={deleteBox}
          id={elem.id}
          color={elem.color}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
