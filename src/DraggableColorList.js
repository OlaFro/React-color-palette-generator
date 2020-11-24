import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
// import styles from "./styles/DraggableColorList.js";

const DraggableColorList = SortableContainer(({ palette, deleteBox }) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      {palette.map((elem, i) => (
        <DraggableColorBox
          key={elem.id}
          index={i}
          deleteBox={() => deleteBox(elem.id)}
          id={elem.id}
          color={elem.color}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
