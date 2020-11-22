import React from "react";
import { ChromePicker } from "react-color";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./ColorPicker.css";
const { v4: uuid4 } = require("uuid");

const styles = {
  picker: {
    width: "500px",
  },

  box: {
    width: "10rem",
    height: "10rem",
  },

  display: {
    display: "flex",
  },

  click: {
    cursor: "pointer",
  },
};

function ColorPicker(props) {
  const [pickedColor, setPickedColor] = useState({});
  const [palette, setPalette] = useState([]);

  const { classes } = props;

  function handleClick() {
    setPalette([...palette, pickedColor]);
  }

  function deleteBox(id) {
    const filtered = palette.filter((elem) => elem.id !== id);
    setPalette(filtered);
  }

  return (
    <div>
      <div className={classes.display}>
        {console.log(palette)}
        {palette.map((elem) => (
          <div
            className={classes.box}
            style={{ backgroundColor: `${elem.color}` }}
          >
            <div>
              <span
                className={classes.click}
                onClick={() => {
                  deleteBox(elem.id);
                }}
              >
                X
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.picker}>
        <ChromePicker
          color={pickedColor.color}
          onChange={(newColor) =>
            setPickedColor({ color: newColor.hex, id: uuid4() })
          }
        />
        <button onClick={handleClick}>ADD COLOR</button>
      </div>
    </div>
  );
}

export default withStyles(styles)(ColorPicker);
